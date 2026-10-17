import {test} from 'node:test';
import assert from 'node:assert/strict';
import {createVehicle,stepVehicle} from '../assets/vehicle.mjs';
import {RAMP_COURSE,sampleRamp,attachRamp} from '../assets/ramp-course.mjs';
test('original ramp has a continuous vertical and inverted profile',()=>{
 assert.ok(sampleRamp(RAMP_COURSE.length).angle>Math.PI/2);
 assert.ok(Math.max(...RAMP_COURSE.samples.map(p=>p.y))>18);
 for(let i=1;i<RAMP_COURSE.samples.length;i++){const a=RAMP_COURSE.samples[i-1],b=RAMP_COURSE.samples[i];assert.ok(Math.hypot(b.x-a.x,b.y-a.y)<.081);}
});
test('car follows ramp, releases from its lip, and lands softly',()=>{
 const s=createVehicle();Object.assign(s,{x:-3,z:0,yaw:Math.PI/2,vx:20,speed:20});attachRamp(s);
 let high=0,released=false;
 for(let i=0;i<2400;i++){stepVehicle(s,{forward:s.ramp?1:0},1/120);high=Math.max(high,s.y);if(!s.ramp)released=true;assert.ok(Number.isFinite(s.y));}
 assert.ok(high>18);assert.ok(released);assert.equal(s.flight,false);assert.ok(s.y<.01);
});
test('ramp release preserves its inverted pose until recovery completes',()=>{
 const s=createVehicle();Object.assign(s,{x:-3,z:0,yaw:Math.PI/2,vx:20,speed:20});attachRamp(s);
 for(let i=0;i<1200&&s.ramp;i++)stepVehicle(s,{forward:1},1/120);
 assert.ok(s.rampRecovery,'release must retain an animation state');
 assert.ok(s.rampRecovery.frame.up[1]<0,'start from the inverted ramp pose');
 assert.equal(s.rampRecovery.elapsed,0);
 for(let i=0;i<60;i++)stepVehicle(s,{},1/120);
 assert.ok(s.rampRecovery,'flip must last longer than a single frame');
 for(let i=0;i<120;i++)stepVehicle(s,{},1/120);
 assert.equal(s.rampRecovery,null);
});
