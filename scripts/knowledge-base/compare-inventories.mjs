#!/usr/bin/env node
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

// Character counts are extraction diagnostics, not document identity. Requiring
// their exact equality would conflate extractor-version drift with PDF changes.
// Every other source field (including pages, low-text flags and aliases) is strict.
export function compareInventories(stored,recomputed){
 assert.equal(recomputed.schema_version,stored.schema_version,'inventory schema changed');
 const index=rows=>{
  const map=new Map(rows.map(r=>[r.source_pdf,r]));
  assert.equal(map.size,rows.length,'duplicate source filename');return map;
 };
 const a=index(stored.sources),b=index(recomputed.sources);
 assert.deepEqual([...b.keys()].sort(),[...a.keys()].sort(),'source filenames changed');
 const diagnosticChanges=[];
 for(const [path,old] of a){
  const current=b.get(path),{text_char_count:before,...identity}=old,{text_char_count:after,...live}=current;
  assert.deepEqual(live,identity,path+' identity, pages, classification or alias changed');
  assert.ok(Number.isInteger(after)&&after>=0,path+' invalid extracted-character diagnostic');
  if(before!==after)diagnosticChanges.push({source_pdf:path,stored:before,recomputed:after});
 }
 return {verified_sources:a.size,diagnostic_changes:diagnosticChanges};
}

if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 const [stored,recomputed]=process.argv.slice(2);
 if(!stored||!recomputed)throw new Error('Usage: node scripts/knowledge-base/compare-inventories.mjs STORED.json RECOMPUTED.json');
 console.log(JSON.stringify(compareInventories(JSON.parse(readFileSync(stored,'utf8')),JSON.parse(readFileSync(recomputed,'utf8'))),null,2));
}
