import {RAMP_COURSE,RAMP_WIDTH} from './ramp-course.mjs';
export function buildRampScene(T,scene,forest,refresh){
 const {Group,Mesh,Box,Cylinder,Material,TextureLoader,Geometry,Attribute,Instanced,Matrix,Vector,Quaternion,Hemi}=T;
 const group=new Group();group.name='Original ramp test ground';group.visible=false;scene.add(group);const colliders=[];
 let textureLoaded,textureFailed;const textureReady=new Promise((resolve,reject)=>{textureLoaded=resolve;textureFailed=reject;});
 const texture=new TextureLoader().load('assets/textures/asphalt.jpg',()=>{refresh();textureLoaded();},undefined,textureFailed);texture.wrapS=texture.wrapT=1000;texture.repeat.set(65,45);texture.colorSpace='srgb';texture.anisotropy=8;
 const asphalt=new Material({map:texture,color:0x929694,roughness:.94});
 const concrete=new Material({color:0xc0c2b6,roughness:.9}),steel=new Material({color:0x667879,metalness:.65,roughness:.4}),grass=new Material({color:0x637558,roughness:1});
 const white=new Material({color:0xe1dfca,roughness:.8}),cube=new Box(1,1,1);
 const box=(mat,x,y,z,w,h,d)=>{const m=new Mesh(cube,mat);m.position.set(x,y,z);m.scale.set(w,h,d);m.castShadow=m.receiveShadow=true;group.add(m);return m;};
 box(asphalt,0,-.15,0,200,.3,130);box(grass,0,-.4,0,480,.3,360);
 const addCollider=(x,z,w,h,d)=>colliders.push({x,z,hx:w/2,hz:d/2,bottom:0,top:h});
 for(const side of [-1,1]){
  box(concrete,side*100,.65,0,1,1.3,131);addCollider(side*100,0,1,1.3,131);
  box(concrete,0,.65,side*65,200,1.3,1);addCollider(0,side*65,200,1.3,1);
  box(white,side*98,.018,0,.12,.03,128);box(white,0,.018,side*63,196,.03,.12);
 }
 // The original 3 m / R5 90° / 5.8 m / R5.3 72° / 9 m profile.
 const deckMap=texture.clone();deckMap.repeat.set(1,1);deckMap.needsUpdate=true;
 const deck=new Material({map:deckMap,color:0x929694,roughness:.9,side:2});
 const underside=new Material({color:0x8f9a98,metalness:.15,roughness:.65});
 const positions=[],uvs=[],indices=[];
 RAMP_COURSE.samples.forEach((p,i)=>{
  positions.push(p.x,p.y,-RAMP_WIDTH/2,p.x,p.y,RAMP_WIDTH/2);uvs.push(0,p.distance/3,RAMP_WIDTH/3,p.distance/3);
  if(i){const j=2*(i-1);indices.push(j,j+1,j+2,j+1,j+3,j+2);}
 });const geometry=new Geometry();geometry.setAttribute('position',new Attribute(positions,3));geometry.setAttribute('uv',new Attribute(uvs,2));geometry.setIndex(indices);geometry.computeVertexNormals();
 const surface=new Mesh(geometry,deck);surface.receiveShadow=true;surface.castShadow=true;group.add(surface);
 const lower=geometry.clone();const a=lower.attributes.position;for(let i=0;i<RAMP_COURSE.samples.length;i++){const p=RAMP_COURSE.samples[i];for(let side=0;side<2;side++){const n=i*2+side;a.setXYZ(n,a.getX(n)+Math.sin(p.angle)*.35,a.getY(n)-Math.cos(p.angle)*.35,a.getZ(n));}}lower.computeVertexNormals();group.add(new Mesh(lower,underside));
 function beam(start,end,radius=.06){
  const from=new Vector(...start),to=new Vector(...end),dir=to.clone().sub(from),m=new Mesh(new Cylinder(radius,radius,dir.length(),8),steel);m.position.copy(from).add(to).multiplyScalar(.5);m.quaternion.setFromUnitVectors(new Vector(0,1,0),dir.normalize());m.castShadow=m.receiveShadow=true;group.add(m);
 }
 for(const side of [-1,1]){
  const z=side*2.9;
  beam([7.6,0,z],[7.6,17.5,z],.13);beam([5.2,0,z],[5.2,17.5,z],.13);
  for(let y=0;y<17;y+=2){beam([5.2,y,z],[7.6,y+2,z]);beam([7.6,y,z],[5.2,y+2,z]);beam([5.2,y,z],[7.6,y,z]);}
  for(let i=45;i<RAMP_COURSE.samples.length;i+=20){const p=RAMP_COURSE.samples[i];beam([p.x,p.y-.38,side*2.1],[7.6,Math.max(.4,p.y-.5),z],.055);}
  addCollider(7.6,z,.3,17.5,.3);addCollider(5.2,z,.3,17.5,.3);
 }
 for(let x=-85;x<-5;x+=6){box(white,x,.018,-2.3,3,.025,.1);box(white,x,.018,2.3,3,.025,.1);}
 // Bright apron with roadside bollards; no black void around the ramp.
 for(const side of [-1,1])for(let x=-90;x<95;x+=12){box(concrete,x,.35,side*58,.3,.7,.3);box(white,x,.72,side*58,.32,.08,.32);}
 const fill=new Hemi(0xe0eff0,0x7a8069,.6);group.add(fill);
 const sceneryReady=forest.assets.then(()=>{
  const placements=[];for(const side of [-1,1])for(let i=0;i<25;i++)placements.push({x:-125+i*10,z:side*(78+(i%3)*11),height:9+(i%5)*2,angle:i*1.73});
  for(const part of forest.treeParts){const mesh=new Instanced(part.geometry,part.material,placements.length),matrix=new Matrix(),quat=new Quaternion();placements.forEach((p,i)=>{quat.setFromAxisAngle(new Vector(0,1,0),p.angle);matrix.compose(new Vector(p.x,0,p.z),quat,new Vector(p.height,p.height,p.height));mesh.setMatrixAt(i,matrix);});mesh.castShadow=mesh.receiveShadow=true;mesh.computeBoundingSphere();group.add(mesh);}refresh();
 });
 return {group,colliders,fill,ready:Promise.all([textureReady,sceneryReady]),course:RAMP_COURSE};
}
