(()=>{
 const d=window.__dbg,check=(ok,msg)=>{if(!ok)throw Error(msg)};
 d.renderer.setAnimationLoop(null);d.selectScene('ramp');
 check(d.ramp.group.visible&&!d.city.group.visible&&!d.forest.root.visible,'scene visibility');
 check(document.querySelector('[data-scene="ramp"]').getAttribute('aria-pressed')==='true','menu selection');
 check(d.atmosphere.name==='Clear day','daylight');
 dispatchEvent(new KeyboardEvent('keydown',{code:'KeyW'}));let contact=false,height=0;
 for(let i=0;i<600;i++){d.step(1/120);contact ||= !!d.vehicle.ramp;height=Math.max(height,d.vehicle.y);}
 dispatchEvent(new KeyboardEvent('keyup',{code:'KeyW'}));check(contact&&height>18,'ramp ascent');
 d.reset();Object.assign(d.vehicle,{x:96,z:30,vx:40,yaw:Math.PI/2});for(let i=0;i<120;i++)d.step(1/120);check(d.vehicle.x<99,'perimeter collision');
 d.selectScene('city');check(d.city.group.visible&&d.forest.root.visible&&!d.ramp.group.visible,'city restored');
 check(d.drive.chase&&d.vehicle.x===4&&d.vehicle.z===-24,'default camera and spawn');
 return {passed:7};
})()
