(async()=>{
 const d=window.__dbg,results=[],control=document.getElementById('infinite-boosters');
 const assert=(ok,text)=>{if(!ok)throw Error(text);results.push(text);};
 const key=(code,type='keydown')=>dispatchEvent(new KeyboardEvent(type,{code}));
 const step=seconds=>{for(let i=0;i<seconds*120;i++)d.step(1/120);};
 const release=()=>dispatchEvent(new Event('blur'));
 d.reset();if(!control.checked)control.click();
 key('ShiftLeft');key('ArrowDown');step(2);release();
 assert(d.vehicle.flight&&d.vehicle.y>7,'Shift + Down fires bottom thrusters and lifts');
 assert(d.drive.firing.level.slice(4,8).every(v=>v>0),'All bottom nozzle outputs respond to lift');
 key('ShiftLeft');key('ArrowLeft');step(.5);release();
 assert(d.vehicle.vx>0&&Math.abs(d.vehicle.yaw)<.01,'Shift + Left translates without ordinary steering');
 assert(d.drive.firing.level[9]>0&&d.drive.firing.level[11]>0,'Front and rear left nozzles fire together');
 key('ShiftLeft');key('ArrowRight');step(1);release();
 assert(d.vehicle.vx<0,'Shift + Right reverses the sideways thrust');
 assert(d.drive.firing.level[8]>0&&d.drive.firing.level[10]>0,'Front and rear right nozzles fire together');
 key('ShiftLeft');key('ArrowUp');step(.5);release();
 assert(d.drive.firing.level[0]===1&&d.vehicle.vz>0,'Shift + Up fires the rear boosters');
 key('KeyE');key('KeyE','keyup');let touchdownSpeed=null;
 for(let i=0;i<3600&&d.vehicle.flight;i++){const vy=d.vehicle.vy;d.step(1/120);if(!d.vehicle.flight)touchdownSpeed=Math.abs(vy);}
 assert(!d.vehicle.flight&&touchdownSpeed<.6,'Landing settles softly after manual thruster movement');
 control.click();d.reset();return results;
})()
