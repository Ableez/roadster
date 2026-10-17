const PRESETS=[
 {name:'Golden hour',sun:[-.38,.24,.9],sunColor:0xffd2a0,intensity:3.5,sky:0x718fa7,horizon:0xe9c79d,fog:0xb5b4a0,ambient:1.55,exposure:1.03},
 {name:'Clear day',sun:[-.35,.76,.55],sunColor:0xfff2d9,intensity:3.1,sky:0x598cb2,horizon:0xcbdde0,fog:0xaebfbd,ambient:1.65,exposure:.95},
 {name:'Dusk',sun:[.55,.12,.82],sunColor:0xffa66f,intensity:2.2,sky:0x485d7b,horizon:0xd5a88d,fog:0x8f939f,ambient:1.2,exposure:1.05}
];
export function createAtmosphere(T,scene,renderer,composer,camera,refresh){
 const {Mesh,Sphere,Shader,Color,Vector,Hemi,Sun,Fog,Pass}=T;
 const direction=new Vector(),ambient=new Hemi(0xd8e9ef,0x7c8068,1),sun=new Sun();scene.add(ambient,sun,sun.target);
 sun.castShadow=true;sun.shadow.mapSize.set(2048,2048);sun.shadow.camera.left=-80;sun.shadow.camera.right=80;sun.shadow.camera.top=80;sun.shadow.camera.bottom=-80;sun.shadow.camera.near=1;sun.shadow.camera.far=350;sun.shadow.bias=-.00015;sun.shadow.normalBias=.03;sun.shadow.radius=3;
 const skyMaterial=new Shader({side:1,depthWrite:false,uniforms:{sunDir:{value:direction},zenith:{value:new Color()},horizon:{value:new Color()},sunTint:{value:new Color()}},
 vertexShader:'varying vec3 direction; void main(){direction=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}',
 fragmentShader:`varying vec3 direction;uniform vec3 sunDir,zenith,horizon,sunTint;
 void main(){vec3 d=normalize(direction);float elevation=max(d.y,0.0);vec3 c=mix(horizon,zenith,pow(elevation,.48));float alignment=dot(d,sunDir);float halo=pow(max(alignment,0.0),28.0);float disk=smoothstep(.99988,.99997,alignment);c+=sunTint*(halo*.45+disk*12.0);float cloud=sin(d.x*9.0+d.z*6.0)*sin(d.z*13.0-d.x*5.0);c+=vec3(.09)*smoothstep(.55,.95,cloud)*smoothstep(.45,.1,d.y);gl_FragColor=vec4(c,1.0);}`});
 const sky=new Mesh(new Sphere(1400,32,16),skyMaterial);sky.renderOrder=-100;sky.frustumCulled=false;scene.add(sky);
 const glare=new Pass({uniforms:{tDiffuse:{value:null},sunUV:{value:{x:-1,y:-1}},strength:{value:0}},
 vertexShader:'varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}',
 fragmentShader:`uniform sampler2D tDiffuse;uniform vec2 sunUV;uniform float strength;varying vec2 vUv;
 void main(){vec3 c=texture2D(tDiffuse,vUv).rgb;vec2 d=vUv-sunUV;d.x*=1.65;float glow=exp(-dot(d,d)*55.0);vec2 ghost=sunUV*.35+vec2(.5)*.65;float lens=exp(-length(vUv-ghost)*45.0)*.06;float vignette=1.0-.13*smoothstep(.25,.8,length(vUv-.5));c=c*vignette+vec3(1.,.77,.44)*strength*(glow*.13+lens);gl_FragColor=vec4(c,1.0);}`});
 composer.addPass(glare);let preset=0,visibility=0,lastOcclusion=-1,blocked=false,changed=true;
 function setPreset(index){
  preset=(index+PRESETS.length)%PRESETS.length;const p=PRESETS[preset];direction.set(...p.sun).normalize();sun.color.set(p.sunColor);sun.intensity=p.intensity;ambient.intensity=p.ambient;ambient.color.set(preset===2?0x9daac4:0xc5d3dc);renderer.toneMappingExposure=p.exposure;
  skyMaterial.uniforms.zenith.value.set(p.sky);skyMaterial.uniforms.horizon.value.set(p.horizon);skyMaterial.uniforms.sunTint.value.set(p.sunColor);scene.fog=new Fog(p.fog,.00165);scene.background=new Color(p.horizon);changed=true;refresh();
 }
 function obstructed(eye,colliders,origin){
  for(const b of colliders){
   if(b.top<2)continue;let near=0,far=2000;
   for(const [a,min,max] of [['x',b.x-b.hx,b.x+b.hx],['y',b.bottom,b.top],['z',b.z-b.hz-origin,b.z+b.hz-origin]]){
    if(Math.abs(direction[a])<1e-8){if(eye[a]<min||eye[a]>max){far=-1;break;}}
    else{let t1=(min-eye[a])/direction[a],t2=(max-eye[a])/direction[a];if(t1>t2)[t1,t2]=[t2,t1];near=Math.max(near,t1);far=Math.min(far,t2);}
   }if(near<=far&&far>.05)return true;
  }return false;
 }
 function update(dt,vehicle,origin,colliders){
  sky.position.copy(camera.position);const localZ=vehicle.z-origin;
  if(changed||Math.hypot(sun.target.position.x-vehicle.x,sun.target.position.z-localZ)>12||Math.abs(sun.target.position.y-vehicle.y)>12){
   const y=Math.max(0,vehicle.y-20);sun.target.position.set(vehicle.x,y,localZ);sun.position.copy(sun.target.position).addScaledVector(direction,160);refresh();changed=false;
  }
  lastOcclusion-=dt;if(lastOcclusion<=0){blocked=obstructed(camera.position,colliders,origin);lastOcclusion=.1;}
  const facing=new Vector(0,0,-1).applyQuaternion(camera.quaternion).dot(direction);
  const screen=camera.position.clone().addScaledVector(direction,1000).project(camera);
  const target=!blocked&&facing>.1&&Math.abs(screen.x)<1.4&&Math.abs(screen.y)<1.4?Math.min(1,(facing-.1)*1.6):0;
  const prior=visibility;visibility+=(target-visibility)*(1-Math.exp(-dt*8));
  glare.uniforms.sunUV.value.x=screen.x*.5+.5;glare.uniforms.sunUV.value.y=screen.y*.5+.5;glare.uniforms.strength.value=visibility;
  return Math.abs(prior-visibility)>.0001;
 }
 setPreset(0);addEventListener('keydown',event=>{if(event.code==='KeyN'&&!event.repeat)setPreset(preset+1);});
 return {sun,update,setPreset,get name(){return PRESETS[preset].name},get glare(){return visibility}};
}
