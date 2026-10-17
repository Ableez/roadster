import {advanceRamp} from './ramp-course.mjs';
import {ROADSTER, resistanceAcceleration, normalAcceleration, motorAcceleration, createLaunch, recordLaunch} from './roadster-spec.mjs';
// SI units. One controller owns drive, flight, contacts and propulsion output.
export const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
const follow = (v, target, rate, dt) => v + (target - v) * (1 - Math.exp(-rate * dt));
export const WHEELBASE=2.7688, TRACK=1.6748, WHEEL_RADIUS=.3;
export const WHEELS=[{x:TRACK/2,z:WHEELBASE/2},{x:-TRACK/2,z:WHEELBASE/2},{x:TRACK/2,z:-WHEELBASE/2},{x:-TRACK/2,z:-WHEELBASE/2}];
export const FLIGHT={ceiling:500,altitudeStep:20,climbRate:12,descendRate:8,maxClimbSpeed:10,maxDescendSpeed:8};
export const ENERGY={hoverDrain:.04,boostDrain:.22,rechargeRate:.125,rechargeDelay:1.5,minTakeoff:.2};
export function createVehicle() {
 return {ramp:null,rampFrame:null,rampRecovery:null,travelled:0,x:4,y:0,z:-24,vx:0,vy:0,vz:0,yaw:0,yawRate:0,steer:0,pitch:0,roll:0,
  speed:0,flight:false,landing:false,forcedLanding:false,altitude:7,impact:0,acceleration:0,
  infiniteBoosters:false,launch:createLaunch(),launchArmed:true,charge:1,recharging:false,rechargeWait:0,thrusters:{rear:0,front:0,lift:0,left:0,right:0,strafeLeft:0,strafeRight:0},
  wheelHeights:[0,0,0,0],wheelTravel:[0,0,0,0],groundHeight:0};
}
export function toggleFlight(s) {
 if(!s.infiniteBoosters && (s.forcedLanding || s.recharging || (!s.flight && s.charge<ENERGY.minTakeoff)))return false;
 if(!s.flight){s.flight=true;s.landing=false;s.altitude=Math.min(FLIGHT.ceiling,s.y+7);}
 else {s.landing=!s.landing;s.altitude=Math.max(7,s.y);}
 return true;
}
export function adjustFlightAltitude(s,delta){
 if(s.forcedLanding || s.recharging)return false;
 if(!s.flight){if(delta<=0||!toggleFlight(s))return false;}
 s.altitude=clamp(s.altitude+delta,0,FLIGHT.ceiling);
 s.landing=s.altitude===0;
 return true;
}
export function setInfiniteBoosters(s,enabled){
 s.infiniteBoosters=!!enabled;
 if(enabled){if(s.forcedLanding){s.landing=false;s.altitude=Math.max(7,s.y);}s.forcedLanding=false;s.recharging=false;}
 // Finite charge is preserved, not refilled by toggling unlimited mode.
 if(!enabled && s.charge<=0){s.recharging=true;if(s.flight){s.forcedLanding=true;s.landing=true;}}
}
const isSurface=b=>b.surface || (b.bottom<=0 && b.top<=.3);
export function surfaceHeight(x,z,colliders,maxHeight=.3) {
 let height=0;
 for(const b of colliders)if(b.top<=maxHeight && Math.abs(x-b.x)<=b.hx && Math.abs(z-b.z)<=b.hz)height=Math.max(height,b.top);
 return height;
}
// Exact oriented-car / axis-aligned-city SAT. Sweeping these same separating
// axes prevents tunnelling without the empty corner space of a rotated AABB.
function contact(s,b,dx=0,dy=0,dz=0) {
 const sn=Math.sin(s.yaw),cs=Math.cos(s.yaw),halfW=1.001,halfL=2.21;
 const axes=[[1,0,0],[0,0,1],[cs,0,-sn],[sn,0,cs],[0,1,0]];
 const cx=s.x+sn*.055-b.x,cy=s.y+.575-(b.bottom+b.top)/2,cz=s.z+cs*.055-b.z;
 let near=-Infinity,far=Infinity,normal=null,depth=Infinity,overlapNormal=null,overlapping=true;
 for(const [nx,ny,nz] of axes){
  const p=cx*nx+cy*ny+cz*nz;
  const radius=halfW*Math.abs(cs*nx-sn*nz)+halfL*Math.abs(sn*nx+cs*nz)+.575*Math.abs(ny)
    +b.hx*Math.abs(nx)+b.hz*Math.abs(nz)+(b.top-b.bottom)/2*Math.abs(ny);
  const penetration=radius-Math.abs(p);
  if(penetration<=1e-8)overlapping=false;
  if(penetration<depth){depth=penetration;const sign=Math.sign(p)||1;overlapNormal=[nx*sign,ny*sign,nz*sign];}
  const travel=dx*nx+dy*ny+dz*nz;
  if(Math.abs(travel)<1e-10){if(Math.abs(p)>=radius-1e-8)return overlapping?{overlap:true,depth,normal:overlapNormal}:null;continue;}
  let t1=(-radius-p)/travel,t2=(radius-p)/travel;
  if(t1>t2)[t1,t2]=[t2,t1];
  if(t1>near){near=t1;const sign=travel>0?-1:1;normal=[nx*sign,ny*sign,nz*sign];}
  far=Math.min(far,t2);if(near>far)return null;
 }
 if(overlapping)return {overlap:true,depth,normal:overlapNormal};
 if(near>=-1e-8 && near<=1 && far>=0 && normal)return {time:Math.max(0,near),normal};
 return null;
}
function respond(s,normal,restitution=0){
 const [nx,ny,nz]=normal,impact=s.vx*nx+s.vy*ny+s.vz*nz;
 if(impact<0){s.impact=Math.max(s.impact,-impact);s.vx-=(1+restitution)*impact*nx;s.vy-=(1+restitution)*impact*ny;s.vz-=(1+restitution)*impact*nz;}
 if(ny>.5)s.surfaceContact=true;
}
export function moveAndCollide(s,dt,colliders) {
 s.surfaceContact=false;
 for(let pass=0;pass<2;pass++)for(const b of colliders){
  if(isSurface(b))continue;
  const hit=contact(s,b);if(!hit?.overlap)continue;
  const [nx,ny,nz]=hit.normal;s.x+=nx*(hit.depth+.001);s.y+=ny*(hit.depth+.001);s.z+=nz*(hit.depth+.001);respond(s,hit.normal);
 }
 let remaining=dt;
 for(let pass=0;pass<4 && remaining>1e-7;pass++){
  const dx=s.vx*remaining,dy=s.vy*remaining,dz=s.vz*remaining;
  let hit=null;
  for(const b of colliders){
   if(isSurface(b))continue;
   const candidate=contact(s,b,dx,dy,dz);
   if(candidate && !candidate.overlap && (!hit || candidate.time<hit.time))hit=candidate;
  }
  const t=hit?hit.time:1;s.x+=dx*t;s.y+=dy*t;s.z+=dz*t;
  if(!hit)break;
  s.x+=hit.normal[0]*.001;s.y+=hit.normal[1]*.001;s.z+=hit.normal[2]*.001;
  respond(s,hit.normal,.04);remaining*=1-t;
 }
 // Low kerbs are drivable surfaces; each wheel samples its own support height.
 const sn=Math.sin(s.yaw),cs=Math.cos(s.yaw);
 s.wheelHeights=WHEELS.map(w=>surfaceHeight(s.x+cs*w.x+sn*w.z,s.z-sn*w.x+cs*w.z,colliders,Math.max(.3,s.y+.06)));
 s.groundHeight=s.wheelHeights.reduce((a,b)=>a+b,0)/4;
 if(s.y<=s.groundHeight){s.y=s.groundHeight;if(s.vy<0){s.impact=Math.max(s.impact,-s.vy);s.vy=0;}s.surfaceContact=true;}
}
export function wheelKinematics(s,x,z){
 // Twist of a rigid body about its rear axle; Ackermann at the front axle.
 const sideways=s.yawRate*(WHEELBASE/2+z),forward=s.speed-s.yawRate*x;
 const steer=z>0 && Math.abs(s.speed)>.001?Math.atan(sideways/forward):0;
 return {steer,speed:forward*Math.cos(steer)+sideways*Math.sin(steer)};
}
export function stepVehicle(s,input,dt,colliders=[]) {
 if(advanceRamp(s,input,dt))return;
 if(s.rampRecovery){s.rampRecovery.elapsed+=dt;if(s.rampRecovery.elapsed>=s.rampRecovery.duration)s.rampRecovery=null;}
 const oldX=s.x,oldZ=s.z;
 const throttle=input.forward||0,brake=input.back||0,turn=input.turn||0;
 if(input.climb&&!s.flight&&!s.forcedLanding)toggleFlight(s);
 const previousForward=s.vx*Math.sin(s.yaw)+s.vz*Math.cos(s.yaw);
 s.impact*=Math.exp(-5*dt);
 const jets=s.thrusters;Object.keys(jets).forEach(k=>jets[k]=0);
 const boost=!!input.boost && !(s.flight&&s.landing) && (s.infiniteBoosters || (s.charge>0 && !s.recharging && !s.forcedLanding));
 const manualSide=!!input.strafe&&(s.infiniteBoosters||(s.charge>0&&!s.recharging&&!s.forcedLanding));
 const usingCharge=(s.flight&&!s.forcedLanding)||boost||manualSide;
 if(usingCharge&&!s.infiniteBoosters){
  const drain=(s.flight?ENERGY.hoverDrain+((input.climb||(!s.landing&&s.altitude>s.y+1))?.02:0):0)+(boost?ENERGY.boostDrain:0)+(input.strafe?.08:0);
  s.charge=Math.max(0,s.charge-drain*dt);s.rechargeWait=ENERGY.rechargeDelay;
  if(s.charge===0){s.recharging=true;if(s.flight){s.forcedLanding=true;s.landing=true;}}
 }
 const poweredBoost=boost && (s.infiniteBoosters || s.charge>0);
 if(s.flight){
  const oldVx=s.vx,oldVz=s.vz,oldYawRate=s.yawRate;
  s.yawRate=follow(s.yawRate,-turn*(s.forcedLanding?.5:1.12),5,dt);s.yaw+=s.yawRate*dt;
  const targetSpeed=s.landing?0:(throttle-brake)*20;
  const sideSpeed=s.landing?0:(input.strafe||0)*12;
  s.vx=follow(s.vx,Math.sin(s.yaw)*targetSpeed+Math.cos(s.yaw)*sideSpeed,1.7,dt);
  s.vz=follow(s.vz,Math.cos(s.yaw)*targetSpeed-Math.sin(s.yaw)*sideSpeed,1.7,dt);
  if(poweredBoost){s.vx+=Math.sin(s.yaw)*18*dt;s.vz+=Math.cos(s.yaw)*18*dt;}
  if(input.descend&&!input.climb){s.altitude=Math.max(0,s.altitude-FLIGHT.descendRate*dt);if(s.altitude===0)s.landing=true;}
  if(input.climb&&!input.descend&&!s.forcedLanding){s.landing=false;s.altitude=Math.min(FLIGHT.ceiling,s.altitude+FLIGHT.climbRate*dt);}
  const landingSurface=surfaceHeight(s.x,s.z,colliders,s.y+.05);
  const targetY=Math.max(landingSurface,s.landing?0:s.altitude);
  const clearance=Math.max(0,s.y-landingSurface);
  const sinkLimit=Math.min(s.forcedLanding?3.5:FLIGHT.maxDescendSpeed,Math.max(.3,clearance*.85));
  const targetVy=clamp((targetY-s.y)*1.5,-sinkLimit,FLIGHT.maxClimbSpeed);
  const ay=clamp(4*(targetVy-s.vy),-9.81,16);s.vy+=ay*dt;
  // Emergency landing uses a dedicated reserve; main charge cannot cancel descent.
  jets.lift=clamp((9.81+ay)/25.81,0,1);
  const acceleration=((s.vx-oldVx)*Math.sin(s.yaw)+(s.vz-oldVz)*Math.cos(s.yaw))/dt;
  jets.rear=poweredBoost?1:clamp(acceleration/18,0,.65);
  jets.front=clamp(-acceleration/18,0,.65);
  const sideAcceleration=((s.vx-oldVx)*Math.cos(s.yaw)-(s.vz-oldVz)*Math.sin(s.yaw))/dt;
  jets.strafeLeft=clamp(sideAcceleration/20,0,1);jets.strafeRight=clamp(-sideAcceleration/20,0,1);
  const yawTorque=(s.yawRate-oldYawRate)/dt+.8*s.yawRate;
  jets.right=clamp(-yawTorque/6,0,1);jets.left=clamp(yawTorque/6,0,1);
  if(s.forcedLanding){jets.rear=0;jets.front=0;jets.strafeLeft=0;jets.strafeRight=0;}
  s.pitch=follow(s.pitch,clamp(acceleration*.006,-.1,.12),5,dt);
  s.roll=follow(s.roll,-s.yawRate*.12,5,dt);s.steer=follow(s.steer,0,8,dt);
 }else{
  let speed=previousForward;
  const normal=normalAcceleration(speed), tyreLimit=ROADSTER.tyreMu*normal;
  // Tyre force shares a friction circle with cornering; rear gas thrust bypasses tyre grip.
  const lateralDemand=Math.min(tyreLimit,Math.abs(s.yawRate*speed));
  const longitudinalGrip=Math.sqrt(Math.max(0,tyreLimit*tyreLimit-lateralDemand*lateralDemand));
  let drive=throttle*Math.min(motorAcceleration(speed),longitudinalGrip);
  let brakeForce=0;
  if(brake){
   if(speed>0)brakeForce=Math.min(ROADSTER.brakeAcceleration,longitudinalGrip);
   else drive-=4;
  }
  const rear=poweredBoost?ROADSTER.rearThrust/ROADSTER.mass:0;
  const resistance=Math.abs(speed)>.01?resistanceAcceleration(speed):0;
  let accel=drive+rear-brakeForce-Math.sign(speed)*resistance;
  if(!throttle&&!poweredBoost&&!brake&&speed>0)accel-=ROADSTER.regenAcceleration;
  // Smooth speed governor reflects the stated >230 mph lower bound.
  if(accel>0)accel=Math.min(accel,Math.max(0,(ROADSTER.speedGovernor-speed)*4));
  let next=speed+accel*dt;
  if(speed>0 && next<0)next=0; // Brake/coast cannot instantly turn into reverse.
  if(!throttle&&!brake&&!poweredBoost&&Math.abs(next)<.05)next=0;
  speed=Math.max(-ROADSTER.reverseLimit,next);
  const availableLateral=Math.sqrt(Math.max(0,tyreLimit*tyreLimit-Math.min(tyreLimit,Math.abs(drive-brakeForce))**2));
  const gripSteer=Math.atan(availableLateral*WHEELBASE/Math.max(1,speed*speed));
  const targetSteer=clamp(-turn*.5/(1+Math.abs(speed)*.035),-gripSteer,gripSteer);
  s.steer=clamp(follow(s.steer,targetSteer,9,dt),-gripSteer,gripSteer);
  s.yawRate=speed*Math.tan(s.steer)/WHEELBASE;s.yaw+=s.yawRate*dt;
  const lateral=s.yawRate*WHEELBASE/2;
  s.vx=Math.sin(s.yaw)*speed+Math.cos(s.yaw)*lateral;
  s.vz=Math.cos(s.yaw)*speed-Math.sin(s.yaw)*lateral;
  s.vy=s.y>s.groundHeight+.001?s.vy-9.81*dt:0;
  s.pitch=follow(s.pitch,clamp(-accel*.004,-.045,.06),7,dt);
  s.roll=follow(s.roll,clamp(-s.yawRate*speed*.004,-.04,.04),7,dt);
  jets.rear=poweredBoost?1:0;
  if(input.strafe&&(s.infiniteBoosters||s.charge>0)&&!s.recharging){
   jets.strafeLeft=input.strafe>0?.7:0;jets.strafeRight=input.strafe<0?.7:0;
  }
 }
 moveAndCollide(s,dt,colliders);
 const landingHeight=surfaceHeight(s.x,s.z,colliders,s.y+.05);
 const touchdownRequested=s.landing||input.descend||s.altitude<=landingHeight;
 if(s.flight&&touchdownRequested&&s.y-landingHeight<=.06&&s.vy>=-.6&&s.vy<=.2){
  s.y=landingHeight;s.vy=0;s.surfaceContact=true;
 }
 if(s.flight&&touchdownRequested&&s.surfaceContact&&s.vy<=.3){
  s.flight=false;s.landing=false;s.forcedLanding=false;s.vy=0;s.pitch=0;s.roll=0;
  jets.lift=0;jets.left=0;jets.right=0;jets.strafeLeft=0;jets.strafeRight=0;
 }
 if(!s.infiniteBoosters&&!s.flight&&s.surfaceContact&&!poweredBoost){
  s.rechargeWait=Math.max(0,s.rechargeWait-dt);
  if(s.rechargeWait===0){s.charge=Math.min(1,s.charge+ENERGY.rechargeRate*dt);if(s.charge>=1)s.recharging=false;}
 }
 s.speed=s.vx*Math.sin(s.yaw)+s.vz*Math.cos(s.yaw);
 s.acceleration=(s.speed-previousForward)/dt;
 s.travelled+=Math.hypot(s.x-oldX,s.z-oldZ);
 recordLaunch(s,input,dt,previousForward);
 if(!s.flight)WHEELS.forEach((w,i)=>s.wheelTravel[i]+=wheelKinematics(s,w.x,w.z).speed*dt);
}
