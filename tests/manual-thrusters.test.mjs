import {test} from 'node:test';
import assert from 'node:assert/strict';
import {createVehicle,stepVehicle,toggleFlight,setInfiniteBoosters} from '../assets/vehicle.mjs';
const run=(s,input,seconds,boxes=[])=>{for(let i=0;i<seconds*120;i++)stepVehicle(s,input,1/120,boxes);};
test('bottom thruster input lifts from ground, shows thrust, and consumes charge',()=>{
 const s=createVehicle();run(s,{climb:1},2);
 assert.ok(s.flight);assert.ok(s.y>7);assert.ok(s.thrusters.lift>0);assert.ok(s.charge<1);
});
test('left/right translation jets push oppositely without rotating the car',()=>{
 const a=createVehicle(),b=createVehicle();toggleFlight(a);toggleFlight(b);run(a,{},5);run(b,{},5);
 run(a,{strafe:1},.5);run(b,{strafe:-1},.5);
 assert.ok(a.vx>0&&b.vx<0);assert.ok(a.thrusters.strafeLeft>0&&b.thrusters.strafeRight>0);
 assert.equal(a.yaw,0);assert.equal(b.yaw,0);
});
test('manual and reserve landings slow near the surface and brake horizontal movement',()=>{
 for(const depleted of [false,true]){
  const s=createVehicle();Object.assign(s,{y:30,flight:true,altitude:30,vz:20});
  if(depleted){s.charge=0;s.forcedLanding=true;s.recharging=true;}else setInfiniteBoosters(s,true);
  s.landing=true;let touchdownSpeed=null,lastVy=s.vy;
  for(let i=0;i<120*30&&s.flight;i++){lastVy=s.vy;stepVehicle(s,{forward:1,boost:1},1/120);if(!s.flight)touchdownSpeed=Math.abs(lastVy);}
  assert.equal(s.flight,false);assert.ok(touchdownSpeed<.6);assert.ok(Math.abs(s.vz)<.1);
 }
});
test('rooftop landings also slow down before contact',()=>{
 const s=createVehicle();setInfiniteBoosters(s,true);Object.assign(s,{y:40,flight:true,landing:true,altitude:40});
 const boxes=[{x:4,z:-24,hx:10,hz:10,bottom:0,top:12}];let lastVy=0;
 for(let i=0;i<2400&&s.flight;i++){lastVy=s.vy;stepVehicle(s,{},1/120,boxes);}
 assert.equal(s.flight,false);assert.ok(Math.abs(s.y-12)<.01);assert.ok(Math.abs(lastVy)<.6);
});
