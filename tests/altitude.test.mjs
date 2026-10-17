import {test} from 'node:test';
import assert from 'node:assert/strict';
import {createVehicle,stepVehicle,adjustFlightAltitude,setInfiniteBoosters,FLIGHT} from '../assets/vehicle.mjs';
const run=(s,input,seconds,boxes=[])=>{for(let i=0;i<seconds*120;i++)stepVehicle(s,input,1/120,boxes);};
test('height steps take off, raise target and hold above the former 100 m ceiling',()=>{
 const s=createVehicle();setInfiniteBoosters(s,true);adjustFlightAltitude(s,20);
 assert.equal(s.altitude,27);assert.ok(s.flight);
 for(let i=0;i<5;i++)adjustFlightAltitude(s,20);
 run(s,{},20);assert.ok(Math.abs(s.y-127)<.1);
 adjustFlightAltitude(s,-20);run(s,{},8);assert.ok(Math.abs(s.y-107)<.1);
});
test('height commands clamp to the new ceiling and can return to the ground',()=>{
 const s=createVehicle();setInfiniteBoosters(s,true);adjustFlightAltitude(s,1000);
 assert.equal(s.altitude,FLIGHT.ceiling);run(s,{},60);assert.ok(Math.abs(s.y-500)<.1);
 adjustFlightAltitude(s,-1000);assert.equal(s.altitude,0);run(s,{},75);assert.equal(s.flight,false);
});
test('raising height clears a tall building while finite reserve landing rejects commands',()=>{
 const s=createVehicle();setInfiniteBoosters(s,true);adjustFlightAltitude(s,60);run(s,{},12);
 run(s,{forward:1},3,[{x:4,z:10,hx:10,hz:10,bottom:0,top:45}]);
 assert.ok(s.z>10);assert.ok(s.y>60);assert.ok(s.impact<.01);
 setInfiniteBoosters(s,false);s.forcedLanding=true;s.landing=true;const before=s.altitude;
 assert.equal(adjustFlightAltitude(s,20),false);assert.equal(s.altitude,before);
});
