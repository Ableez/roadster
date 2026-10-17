import {CHUNK_LENGTH,ROAD_START,desiredChunks,chunkLayout} from './forest-layout.mjs';
export function buildForestRoad(T,scene,refresh){
 const {Group,Mesh,Box,Plane,Cylinder,Material,Texture,TextureLoader,Instanced,Matrix,Vector,Quaternion,Loader,Renderer,Scene,Camera,Hemi,Sun,Attribute,BasicMaterial}=T;
 const root=new Group();root.name='Endless Poly Haven forest';scene.add(root);
 const chunks=new Map(),roadColliders=[];let treeParts=[],rockParts=[],treeSprite=null,ready=false,revision=0;
 const cube=new Box(1,1,1),plane=new Plane(1,1);
 const dark=new Material({color:0x41433c,roughness:.95}),grass=new Material({color:0xced6ba,roughness:1});
 const edge=new Material({color:0x9b9d80,roughness:1}),paint=new Material({color:0xd4d3b5,roughness:1});
 const yellow=new Material({color:0xbab281,roughness:1}),barrier=new Material({color:0x717c78,metalness:.55,roughness:.55});
 const asphaltMap=new TextureLoader().load('assets/textures/asphalt.jpg',refresh);asphaltMap.wrapS=asphaltMap.wrapT=1000;asphaltMap.repeat.set(7,80);asphaltMap.colorSpace='srgb';asphaltMap.anisotropy=8;
 const asphalt=new Material({map:asphaltMap,color:0x8b8f8b,roughness:.96});
 const groundMap=new TextureLoader().load('assets/forest/forest-ground.jpg',refresh);groundMap.wrapS=groundMap.wrapT=1000;groundMap.repeat.set(45,22);groundMap.colorSpace='srgb';groundMap.anisotropy=4;grass.map=groundMap;
 function box(parent,mat,x,y,z,w,h,d){const mesh=new Mesh(cube,mat);mesh.position.set(x,y,z);mesh.scale.set(w,h,d);mesh.receiveShadow=true;parent.add(mesh);return mesh;}
 function batch(parent,geo,mat,placements,shadow=true){
  if(!placements.length)return;
  const mesh=new Instanced(geo,mat,placements.length),m=new Matrix(),q=new Quaternion(),v=new Vector(),scale=new Vector();
  placements.forEach((p,i)=>{q.setFromAxisAngle(new Vector(0,1,0),p.rotation||0);m.compose(v.set(p.x,p.y||0,p.z),q,scale.set(p.sx||p.scale||1,p.sy||p.scale||1,p.sz||p.scale||1));mesh.setMatrixAt(i,m);});
  mesh.castShadow=shadow;mesh.receiveShadow=true;mesh.computeBoundingSphere();parent.add(mesh);return mesh;
 }
 function normalizedParts(gltf){
  const parts=[];let minX=Infinity,minY=Infinity,minZ=Infinity,maxX=-Infinity,maxY=-Infinity,maxZ=-Infinity;
  gltf.scene.updateMatrixWorld(true);gltf.scene.traverse(mesh=>{
   if(!mesh.isMesh)return;const geometry=mesh.geometry.clone();
   for(const name of ['position','normal']){const source=geometry.attributes[name];if(!source)continue;const values=[];for(let i=0;i<source.count;i++)values.push(source.getX(i),source.getY(i),source.getZ(i));geometry.setAttribute(name,new Attribute(values,3));}
   geometry.applyMatrix4(mesh.matrixWorld);geometry.computeBoundingBox();
   const b=geometry.boundingBox;minX=Math.min(minX,b.min.x);minY=Math.min(minY,b.min.y);minZ=Math.min(minZ,b.min.z);maxX=Math.max(maxX,b.max.x);maxY=Math.max(maxY,b.max.y);maxZ=Math.max(maxZ,b.max.z);
   const material=mesh.material.clone();material.roughness=.9;material.metalness=0;material.side=2;
   parts.push({geometry,material});
  });const height=maxY-minY;
  for(const p of parts){p.geometry.translate(-(minX+maxX)/2,-minY,-(minZ+maxZ)/2);p.geometry.scale(1/height,1/height,1/height);}
  return parts;
 }
 function bakeSprite(parts){
  const renderer=new Renderer({alpha:true,antialias:true});renderer.setSize(512,768);renderer.setClearColor(0x000000,0);renderer.toneMapping=0;
  const bakeScene=new Scene();bakeScene.add(new Hemi(0xd5e4dd,0x39492d,2));const light=new Sun(0xffe2ae,2.1);light.position.set(-2,4,3);bakeScene.add(light);
  for(const p of parts)bakeScene.add(new Mesh(p.geometry,p.material));
  const cam=new Camera(30,512/768,.01,10);cam.position.set(0,.52,2);cam.lookAt(0,.5,0);renderer.render(bakeScene,cam);
  const canvas=document.createElement('canvas');canvas.width=512;canvas.height=768;canvas.getContext('2d').drawImage(renderer.domElement,0,0);
  const texture=new Texture(canvas);texture.colorSpace='srgb';texture.anisotropy=4;renderer.dispose();
  return new BasicMaterial({map:texture,alphaTest:.4,side:2,color:0xb9cba8});
 }
 const assets=Promise.all([
  new Loader().loadAsync('assets/forest/pine.glb').then(g=>{treeParts=normalizedParts(g);treeSprite=bakeSprite(treeParts);}),
  new Loader().loadAsync('assets/forest/rocks.glb').then(g=>{rockParts=normalizedParts(g);})
 ]).then(()=>{ready=true;revision++;refresh();}).catch(error=>{console.error('Forest asset load failed',error);throw error;});
 function create(index){
  const layout=chunkLayout(index),group=new Group();group.name='Forest section '+index;root.add(group);
  box(group,grass,0,-.25,CHUNK_LENGTH/2,600,.3,CHUNK_LENGTH);
  box(group,edge,0,-.09,CHUNK_LENGTH/2,30,.1,CHUNK_LENGTH);
  box(group,asphalt,0,-.06,CHUNK_LENGTH/2,24,.1,CHUNK_LENGTH);
  const marks=[];
  for(let z=4;z<CHUNK_LENGTH;z+=16)for(const side of [-1,1])marks.push({x:side*5.4,y:.014,z,sx:.13,sy:.018,sz:5});
  batch(group,cube,paint,marks,false);
  for(const side of [-1,1]){
   box(group,paint,side*11,.01,CHUNK_LENGTH/2,.13,.018,CHUNK_LENGTH);
   box(group,yellow,side*.16,.012,CHUNK_LENGTH/2,.1,.018,CHUNK_LENGTH);
   box(group,barrier,side*13,.65,CHUNK_LENGTH/2,.14,.22,CHUNK_LENGTH);
  }
  const posts=[];for(let z=8;z<CHUNK_LENGTH;z+=16)for(const side of [-1,1])posts.push({x:side*13,y:.38,z,sx:.12,sy:.76,sz:.12});batch(group,cube,barrier,posts);
  const centerTrees=layout.trees.filter(t=>t.near);
  for(const part of treeParts)batch(group,part.geometry,part.material,centerTrees.map(t=>({...t,scale:t.height})));
  if(treeSprite){
   const cards=layout.trees.filter(t=>!t.near).flatMap(t=>[0,Math.PI/2].map(angle=>({...t,y:t.height/2,sx:t.height*2/3,sy:t.height,sz:1,rotation:t.rotation+angle})));
   batch(group,plane,treeSprite,cards,true);
  }
  for(const part of rockParts)batch(group,part.geometry,part.material,layout.rocks);
  const colliders=[];
  for(const t of centerTrees)colliders.push({x:t.x,z:layout.start+t.z,hx:.22,hz:.22,bottom:0,top:t.height*.75});
  for(const r of layout.rocks)colliders.push({x:r.x,z:layout.start+r.z,hx:r.scale*.45,hz:r.scale*.45,bottom:0,top:r.scale});
  for(const side of [-1,1])colliders.push({x:side*13,z:layout.start+128,hx:.12,hz:128,bottom:0,top:.76});
  return {group,colliders,layout,revision};
 }
 function update(z,origin=0){
  const wanted=new Set(desiredChunks(z));let changed=false;
  for(const [index,chunk] of chunks)if(!wanted.has(index)||chunk.revision!==revision){chunk.group.removeFromParent();chunk.group.traverse(m=>{if(m.isInstancedMesh)m.dispose();});chunks.delete(index);changed=true;}
  for(const index of wanted)if(!chunks.has(index)){chunks.set(index,create(index));changed=true;}
  for(const chunk of chunks.values())chunk.group.position.z=chunk.layout.start-origin;
  if(changed){roadColliders.length=0;for(const chunk of chunks.values())roadColliders.push(...chunk.colliders);refresh();}
  return changed;
 }
 update(0);return {root,update,colliders:roadColliders,assets,get treeParts(){return treeParts},get ready(){return ready},get sectionCount(){return chunks.size},get indices(){return [...chunks.keys()]}};
}
