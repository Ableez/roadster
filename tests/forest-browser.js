(async()=>{
 const d=window.__dbg,results=[];
 const assert=(ok,text)=>{if(!ok)throw Error(text);results.push(text);};
 const frame=()=>new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)));
 await d.forest.assets;d.reset();
 assert(d.forest.ready,'Optimised Poly Haven pine and rock assets loaded');
 assert(d.scene.children.includes(d.forest.root),'Forest route is attached to the live scene');
 for(const z of [300,535,536,792,4225,10010,50010,100010]){
  d.vehicle.z=z;d.vehicle.x=4;d.vehicle.vx=0;d.vehicle.vz=0;d.step(1/120);await frame();
  assert(Math.abs(d.vehicle.z-z)<.1,'Road clear at '+z+' m');
  assert(d.forest.sectionCount<=8,'Bounded forest section count at '+z+' m');
 }
 assert(d.origin>90000,'Floating origin rebases after long-distance travel');
 assert(Math.abs(d.car.position.z)<8192,'Rendered car remains near the floating origin');
 assert(Number.isFinite(d.vehicle.travelled),'Distance counter remains finite');
 const start=d.vehicle.z;dispatchEvent(new KeyboardEvent('keydown',{code:'KeyW'}));
 for(let i=0;i<240;i++)d.step(1/120);dispatchEvent(new KeyboardEvent('keyup',{code:'KeyW'}));
 assert(d.vehicle.z>start+25,'Driving continues beyond 100 km');
 d.atmosphere.setPreset(1);assert(d.atmosphere.name==='Clear day','Daylight preset changes');
 d.atmosphere.setPreset(2);assert(d.atmosphere.name==='Dusk','Dusk preset changes');
 d.atmosphere.setPreset(0);d.reset();await frame();assert(d.origin===0&&d.vehicle.z===-24,'Reset returns to city after rebasing');
 return results;
})()
