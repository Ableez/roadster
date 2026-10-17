(async()=>{
 const d=window.__dbg,results=[],control=document.getElementById('infinite-boosters');
 const assert=(ok,text)=>{if(!ok)throw Error(text);results.push(text);};
 const key=(code,type='keydown')=>dispatchEvent(new KeyboardEvent(type,{code}));
 const tap=code=>{key(code);key(code,'keyup');};
 const step=seconds=>{for(let i=0;i<seconds*120;i++)d.step(1/120);};
 const frame=()=>new Promise(resolve=>{let count=0;const tick=()=>{if(++count>=10)resolve();else requestAnimationFrame(tick);};requestAnimationFrame(tick);});
 if(control.checked)control.click();d.reset();
 assert(!d.vehicle.infiniteBoosters,'Infinite boosters defaults off');
 key('KeyW');step(2);key('KeyW','keyup');await frame();
 assert(d.vehicle.launch.sixtyMph>1.57&&d.vehicle.launch.sixtyMph<1.6,'City motor launch meets sub-1.6 s target');
 assert(document.querySelector('.launch-readout').textContent.includes('1.59'),'HUD displays measured 0–60 time');
 d.reset();key('KeyW');key('KeyB');step(1);key('KeyW','keyup');key('KeyB','keyup');
 assert(d.vehicle.launch.sixtyMph<.59,'Rocket launch meets sub-0.59 s target');
 d.reset();key('KeyW');step(30);key('KeyW','keyup');
 assert(d.vehicle.speed*3.6>370&&d.vehicle.z>2400&&d.vehicle.impact<.01,'Connected causeway reaches >230 mph without collision');
 key('KeyS');for(let i=0;i<1200&&d.vehicle.speed>.1;i++)d.step(1/120);key('KeyS','keyup');assert(Math.abs(d.vehicle.speed)<1&&d.vehicle.z<4000,'Car can brake to a stop before the causeway end');
 d.reset();d.vehicle.charge=.1;control.click();assert(d.vehicle.infiniteBoosters,'Options checkbox enables infinite boosters');
 tap('KeyE');key('KeyB');step(35);key('KeyB','keyup');
 assert(d.vehicle.flight&&!d.vehicle.forcedLanding&&d.vehicle.charge===.1,'Infinite mode sustains flight and preserves finite charge');
 await frame();assert(document.querySelector('#charge-value').textContent==='∞','HUD shows unlimited charge');
 control.click();step(4);assert(d.vehicle.forcedLanding,'Switching infinite off restores charge exhaustion');
 control.click();assert(!d.vehicle.forcedLanding&&!d.vehicle.landing,'Infinite mode can cancel reserve landing');
 tap('KeyR');assert(d.vehicle.infiniteBoosters&&control.checked,'Reset preserves the selected infinite setting');
 control.click();d.reset();return results;
})()
