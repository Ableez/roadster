(()=>{
 const d=__dbg;d.renderer.setAnimationLoop(null);d.selectScene('ramp');
 dispatchEvent(new KeyboardEvent('keydown',{code:'KeyW'}));
 let previous=d.drive.quat.clone(),maxStep=0,released=false,framesAfterRelease=0;
 for(let i=0;i<720;i++){
  const attached=!!d.vehicle.ramp;d.step(1/120);
  if(attached&&!d.vehicle.ramp)released=true;
  if(released&&framesAfterRelease++<180)maxStep=Math.max(maxStep,previous.angleTo(d.drive.quat));
  previous.copy(d.drive.quat);
 }
 dispatchEvent(new KeyboardEvent('keyup',{code:'KeyW'}));
 if(!released)throw Error('Ramp lip was not reached');
 if(maxStep>.08)throw Error(`Ramp release snapped ${(maxStep*180/Math.PI).toFixed(1)} degrees in one tick`);
 return {released,maxStepDegrees:maxStep*180/Math.PI};
})()
