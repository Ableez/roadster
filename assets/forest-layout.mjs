export const ROAD_START=280, CHUNK_LENGTH=256, BACK_CHUNKS=2, AHEAD_CHUNKS=5;
export function desiredChunks(z){
 const center=Math.max(0,Math.floor((z-ROAD_START)/CHUNK_LENGTH));
 return Array.from({length:BACK_CHUNKS+AHEAD_CHUNKS+1},(_,i)=>center-BACK_CHUNKS+i).filter(i=>i>=0);
}
export function chunkLayout(index){
 let seed=(index*374761393+73513)>>>0;
 const rand=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
 const trees=[],rocks=[];
 for(const side of [-1,1]){
  // Clear shoulder, dense near treeline, and irregular woodland behind it.
  for(let row=0;row<6;row++)for(let n=0;n<14;n++){
   const x=side*(18+row*15+rand()*12),z=8+n*18+rand()*10;
   trees.push({x,z,height:11+rand()*12,rotation:rand()*Math.PI*2,near:row===0&&n%2===0});
  }
  for(let n=0;n<8;n++)rocks.push({x:side*(15+rand()*20),z:10+rand()*236,scale:.5+rand(),rotation:rand()*Math.PI*2});
 }
 return {index,start:ROAD_START+index*CHUNK_LENGTH,trees,rocks};
}
