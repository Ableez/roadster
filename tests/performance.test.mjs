import {test} from 'node:test';
import assert from 'node:assert/strict';
import {createVehicle,stepVehicle,toggleFlight,setInfiniteBoosters} from '../assets/vehicle.mjs';
import {ROADSTER,MPH} from '../assets/roadster-spec.mjs';
const run=(s,input,seconds,dt=1/120)=>{for(let i=0;i<seconds/dt;i++)stepVehicle(s,input,dt);};
test('motor 0–60 mph matches the configured sub-1.6-second target without rollout',()=>{
 const s=createVehicle();run(s,{forward:1},2);
 assert.ok(s.launch.sixtyMph>1.57&&s.launch.sixtyMph<1.6);
 assert.ok(s.launch.hundredKmh>s.launch.sixtyMph);assert.equal(s.launch.boosted,false);
});
test('Rocket W+B 0–60 mph matches the sub-0.59-second target with finite charge',()=>{
 const s=createVehicle();run(s,{forward:1,boost:1},1);
 assert.ok(s.launch.sixtyMph>.57&&s.launch.sixtyMph<.59);assert.equal(s.launch.boosted,true);assert.ok(s.charge<1);
});
test('motor power reaches the >230 mph model governor without boost',()=>{
 const s=createVehicle();run(s,{forward:1},90);
 assert.ok(s.speed>230*MPH);assert.ok(s.speed<=ROADSTER.speedGovernor+.001);
});
test('launch measurements agree across simulation step sizes',()=>{
 const a=createVehicle(),b=createVehicle();run(a,{forward:1},2,1/120);run(b,{forward:1},2,1/240);
 assert.ok(Math.abs(a.launch.sixtyMph-b.launch.sixtyMph)<.005);
});
test('braking stops without instantly reversing and collisions invalidate launch timing',()=>{
 const s=createVehicle();run(s,{forward:1},2);run(s,{back:1},1.5);assert.ok(s.speed>=0);
 const b=createVehicle();stepVehicle(b,{forward:1},1/120,[{x:4,z:-21,hx:5,hz:.1,bottom:0,top:10}]);
 for(let i=0;i<120;i++)stepVehicle(b,{forward:1},1/120,[{x:4,z:-21,hx:5,hz:.1,bottom:0,top:10}]);
 assert.equal(b.launch.valid,false);assert.equal(b.launch.sixtyMph,null);
});
test('infinite mode preserves finite charge and allows sustained flight / boost',()=>{
 const s=createVehicle();s.charge=.1;setInfiniteBoosters(s,true);toggleFlight(s);run(s,{boost:1},50);
 assert.equal(s.charge,.1);assert.equal(s.flight,true);assert.equal(s.forcedLanding,false);assert.equal(s.thrusters.rear,1);
 setInfiniteBoosters(s,false);run(s,{},4);assert.ok(s.forcedLanding);assert.equal(s.charge,0);
});
test('enabling infinite mode unlocks an empty pack; disabling it restores depletion landing',()=>{
 const s=createVehicle();s.charge=0;s.recharging=true;setInfiniteBoosters(s,true);assert.ok(toggleFlight(s));run(s,{},5);
 setInfiniteBoosters(s,false);assert.equal(s.forcedLanding,true);assert.equal(s.landing,true);assert.equal(s.charge,0);
});
