import {test} from 'node:test';
import assert from 'node:assert/strict';
import {desiredChunks,chunkLayout,ROAD_START,CHUNK_LENGTH} from '../assets/forest-layout.mjs';
test('streamed sections are bounded and continuous over arbitrarily long drives',()=>{
 for(const z of [0,280,535,536,10000,1000000]){
  const ids=desiredChunks(z);assert.ok(ids.length<=8);assert.ok(ids.every(i=>i>=0));
  ids.slice(1).forEach((id,i)=>assert.equal(id,ids[i]+1));
  const center=Math.max(0,Math.floor((z-ROAD_START)/CHUNK_LENGTH));assert.ok(ids.includes(center));
 }
});
test('forest sections are deterministic, varied, and leave the road clear',()=>{
 const a=chunkLayout(12);assert.deepEqual(a,chunkLayout(12));assert.notDeepEqual(a.trees,chunkLayout(13).trees);
 assert.ok(a.trees.every(t=>Math.abs(t.x)>=18&&t.z>=0&&t.z<256));
 assert.ok(a.rocks.every(r=>Math.abs(r.x)>=15));
 assert.equal(chunkLayout(13).start-a.start,256);
});
