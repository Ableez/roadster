import {ROADSTER,motorAcceleration,resistanceAcceleration,createLaunch} from './roadster-spec.mjs';
export const RAMP_WIDTH=4.6;
export function createRampCourse(){
 const segments=[{length:3},{radius:5,angle:Math.PI/2},{length:5.8},{radius:5.3,angle:72*Math.PI/180},{length:9}];
 const samples=[];let x=-3,y=.02,angle=0,distance=0;
 samples.push({x,y,angle,distance,curvature:0});
 for(const part of segments){
  const length=part.length??part.radius*part.angle,curvature=part.radius?1/part.radius:0;
  const steps=Math.ceil(length/.08),ds=length/steps;
  for(let i=0;i<steps;i++){
   if(curvature){const next=angle+curvature*ds;x+=(Math.sin(next)-Math.sin(angle))/curvature;y+=(-Math.cos(next)+Math.cos(angle))/curvature;angle=next;}
   else{x+=Math.cos(angle)*ds;y+=Math.sin(angle)*ds;}
   distance+=ds;samples.push({x,y,angle,distance,curvature});
  }
 }
 return {samples,length:distance,startX:-3,width:RAMP_WIDTH};
}
export const RAMP_COURSE=createRampCourse();
export function sampleRamp(distance,course=RAMP_COURSE){
 const values=course.samples;
 if(distance<=0)return {...values[0],x:values[0].x+distance,distance};
 if(distance>=course.length){const end=values.at(-1),d=distance-course.length;return {...end,x:end.x+Math.cos(end.angle)*d,y:end.y+Math.sin(end.angle)*d,distance};}
 let lo=0,hi=values.length-1;
 while(hi-lo>1){const mid=(lo+hi)>>1;if(values[mid].distance<=distance)lo=mid;else hi=mid;}
 const a=values[lo],b=values[hi],t=(distance-a.distance)/(b.distance-a.distance);
 return {x:a.x+(b.x-a.x)*t,y:a.y+(b.y-a.y)*t,angle:a.angle+(b.angle-a.angle)*t,distance,curvature:b.curvature};
}
export function attachRamp(s){
 const speed=s.vx*Math.sin(s.yaw)+s.vz*Math.cos(s.yaw);
 s.ramp={distance:Math.max(0,s.x-RAMP_COURSE.startX),lateral:s.z,heading:Math.PI/2-s.yaw};
 s.speed=speed;s.flight=false;s.landing=false;s.launch=createLaunch();s.launchArmed=false;
}
export function leaveRamp(s,land=true){
 s.rampRecovery=s.rampFrame?{frame:s.rampFrame,elapsed:0,duration:1.35}:null;
 s.ramp=null;s.rampFrame=null;
 if(land){s.flight=true;s.landing=true;s.altitude=Math.max(7,s.y);if(s.charge<=0&&!s.infiniteBoosters){s.forcedLanding=true;s.recharging=true;}}
}
export function advanceRamp(s,input,dt){
 if(!s.ramp)return false;
 if(s.flight||input.climb){leaveRamp(s,false);return false;}
 const r=s.ramp,p=sampleRamp(r.distance),g=ROADSTER.gravity;
 const boost=!!input.boost&&(s.infiniteBoosters||(s.charge>0&&!s.recharging));
 if(boost&&!s.infiniteBoosters){s.charge=Math.max(0,s.charge-.22*dt);s.rechargeWait=1.5;if(s.charge===0)s.recharging=true;}
 const poweredBoost=boost&&(s.infiniteBoosters||s.charge>0);
 const forward=s.speed*Math.cos(r.heading);
 const normal=Math.max(0,g*Math.cos(p.angle)+ROADSTER.fanAcceleration+forward*forward*p.curvature);
 let accel=(input.forward?Math.min(motorAcceleration(s.speed),ROADSTER.tyreMu*normal):0)+(poweredBoost?ROADSTER.rearThrust/ROADSTER.mass:0)-g*Math.sin(p.angle)*Math.cos(r.heading);
 if(input.back)accel-=s.speed>.1?Math.min(ROADSTER.brakeAcceleration,ROADSTER.tyreMu*normal):4;
 accel-=Math.sign(s.speed)*(Math.abs(s.speed)>.01?resistanceAcceleration(s.speed):0);
 const oldSpeed=s.speed;s.speed=Math.max(-9,Math.min(ROADSTER.speedGovernor,s.speed+accel*dt));
 const gripAngle=Math.atan(Math.max(3,normal)*2.7688/Math.max(1,s.speed*s.speed));
 const desired=Math.max(-gripAngle,Math.min(gripAngle,-(input.turn||0)*.5));s.steer+=(desired-s.steer)*(1-Math.exp(-dt*9));
 s.yawRate=s.speed*Math.tan(s.steer)/2.7688;r.heading-=s.yawRate*dt;
 r.distance+=s.speed*Math.cos(r.heading)*dt;r.lateral+=s.speed*Math.sin(r.heading)*dt;
 const center=sampleRamp(r.distance),front=sampleRamp(r.distance+1.3844*Math.cos(r.heading)),rear=sampleRamp(r.distance-1.3844*Math.cos(r.heading));
 const pitch=Math.atan2(front.y-rear.y,front.x-rear.x);
 const tangent=[Math.cos(pitch),Math.sin(pitch),0],up=[-Math.sin(pitch),Math.cos(pitch),0];
 const heading=r.heading,worldForward=[tangent[0]*Math.cos(heading),tangent[1]*Math.cos(heading),Math.sin(heading)];
 s.x=(front.x+rear.x)/2;s.y=(front.y+rear.y)/2;s.z=r.lateral;
 s.vx=worldForward[0]*s.speed;s.vy=worldForward[1]*s.speed;s.vz=worldForward[2]*s.speed;
 s.yaw=Math.atan2(worldForward[0],worldForward[2]);s.rampFrame={forward:worldForward,up};
 s.acceleration=dt>0?(s.speed-oldSpeed)/dt:0;s.pitch=0;s.roll=0;s.groundHeight=s.y;s.surfaceContact=true;
 Object.keys(s.thrusters).forEach(k=>s.thrusters[k]=0);s.thrusters.rear=poweredBoost?1:0;
 s.wheelTravel.forEach((_,i)=>s.wheelTravel[i]+=s.speed*dt);s.travelled+=Math.abs(s.speed)*dt;
 if(!poweredBoost&&!s.infiniteBoosters){s.rechargeWait=Math.max(0,s.rechargeWait-dt);if(!s.rechargeWait){s.charge=Math.min(1,s.charge+.125*dt);if(s.charge===1)s.recharging=false;}}
 if(r.distance<0){s.ramp=null;s.rampFrame=null;s.y=0;s.vy=0;}
 else if(r.distance>=RAMP_COURSE.length||Math.abs(r.lateral)>RAMP_WIDTH/2-.4||normal<=.001)leaveRamp(s,true);
 return true;
}
