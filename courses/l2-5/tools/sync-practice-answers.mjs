import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {root} from './render.mjs';
import {answerFields,answerBlock} from './practice-answers.mjs';
import {parseFrontmatter} from '../../../scripts/knowledge-base/schema.mjs';

const repo=path.resolve(root,'../..');
const kb=path.join(repo,'knowledge_base/04-Questions');
const sha=value=>createHash('sha256').update(value).digest('hex');
const index=new Map();
for(const file of fs.readdirSync(kb).filter(n=>n.startsWith('Q-')&&n.endsWith('.md'))){
  const id=file.split(' - ')[0];
  assert.ok(!index.has(id),'Duplicate knowledge-base ID '+id);
  index.set(id,path.join(kb,file));
}
export const practiceFiles=[path.join(root,'practice.json'),...fs.readdirSync(path.join(root,'chapters'))
  .map(id=>path.join(root,'chapters',id,'practice.json')).filter(fs.existsSync).sort()];
const write=process.argv.includes('--write');
const changes=new Map(),audit=[];
let stale=0,occurrences=0,partsCount=0;
function stage(file,bytes){
  if(!fs.existsSync(file)||!fs.readFileSync(file).equals(Buffer.from(bytes))){
    changes.set(file,bytes);
  }
}
function source(id,directory,sourceNote){
  assert.ok(index.has(id),'Missing current source '+id);
  const file=index.get(id),bytes=fs.readFileSync(file),text=bytes.toString('utf8');
  const meta=parseFrontmatter(text).properties;
  assert.equal(meta.verification_status,'verified',id);
  const target=sourceNote||'sources/notes/'+path.basename(file);
  stage(path.join(directory,target),bytes);
  const fields={id,sourceNote:target,sourceNoteSha256:sha(bytes),answerSource:meta.answer_source,...answerFields(text)};
  // Every reference in either retained answer must resolve to the exact local PDF.
  const refs=new Set([meta.source_pdf,...[...text.matchAll(/\[\[(knowledge_base\/past_paper\/[^#\]]+\.pdf)#page=/g)].map(m=>m[1])]);
  for(const reference of refs){
    const original=path.join(repo,reference);
    assert.ok(fs.existsSync(original),'Missing PDF '+original);
    const local=path.join(directory,'sources/papers',path.basename(reference));
    if(fs.existsSync(local))assert.equal(sha(fs.readFileSync(local)),sha(fs.readFileSync(original)),'PDF snapshot differs '+local);
    else stage(local,fs.readFileSync(original));
  }
  partsCount++;
  return {fields,meta};
}
for(const file of practiceFiles){
  const directory=path.dirname(file);
  const before=JSON.parse(fs.readFileSync(file,'utf8'));
  const after=before.map(old=>{
    const q={...old};
    const primary=source(q.id,directory,q.sourceNote);
    Object.assign(q,primary.fields,{verificationStatus:primary.meta.verification_status});
    q.pdfSha256=sha(fs.readFileSync(path.join(repo,primary.meta.source_pdf)));
    delete q.mistakesMarkdown;
    delete q.verificationNote;
    delete q.answerParts;
    if(q.companionNotes?.length){
      q.answerParts=[{...primary.fields}];
      for(const companion of q.companionNotes){
        const id=path.basename(companion).split(' - ')[0];
        q.answerParts.push(source(id,directory,companion).fields);
      }
    }
    const changed=JSON.stringify(q)!==JSON.stringify(old);
    if(changed)stale++;
    audit.push({id:q.id,practiceFile:path.relative(repo,file),changed,
      oldOfficialPresent:!!old.officialMarkdown,oldExtraBlocks:!!old.mistakesMarkdown||!!old.verificationNote,
      primarySource:q.sourceNote,sourceSha256:q.sourceNoteSha256,
      officialSourceSha256:q.officialSourceSha256,supplementarySourceSha256:q.supplementarySourceSha256,
      parts:(q.answerParts||[q]).map(p=>p.id)});
    occurrences++;
    return q;
  });
  stage(file,JSON.stringify(after,null,2)+'\n');
  const config=JSON.parse(fs.readFileSync(path.join(directory,'course.config.json'),'utf8'));
  for(const topic of config.topics){
    const lessonFile=path.join(directory,'lessons',topic.slug+'.html');
    const original=fs.readFileSync(lessonFile,'utf8');
    // Exactly replace answer details inside each exercise; preserve lecture/details/IDs.
    let matched=0;
    const updated=original.replace(/(<article\b[^>]*data-question-id="([^"]+)"[^>]*>)([\s\S]*?)(<\/article>)/g,
      (whole,start,id,inside,end)=>{
        const q=after.find(q=>q.id===id&&q.topic===topic.slug);
        assert.ok(q,'Unexpected exercise '+id+' in '+lessonFile);
        const answers=[...inside.matchAll(/<details\b[^>]*class="answer"[^>]*>[\s\S]*?<\/details>/g)];
        assert.equal(answers.length,1,'Expected one exercise answer '+id);
        matched++;
        return start+inside.replace(answers[0][0],answerBlock(q))+end;
      });
    assert.equal(matched,topic.questions.length,'Rendered question coverage mismatch '+lessonFile);
    const outdatedCopy='原题保留英文，解析含中文。';
    const finalHtml=updated.replaceAll(outdatedCopy,'原题、官方答案与补充解析保留英文。');
    stage(lessonFile,finalHtml);
  }
}
const result={mode:write?'write':'check',exerciseOccurrences:occurrences,answerParts:partsCount,
  uniquePrimaryIds:new Set(audit.map(q=>q.id)).size,staleExercises:stale,filesToUpdate:changes.size,audit};
if(write){
  for(const [file,bytes]of changes){
    fs.mkdirSync(path.dirname(file),{recursive:true});
    const temporary=file+'.answer-sync.tmp';fs.writeFileSync(temporary,bytes);fs.renameSync(temporary,file);
  }
  const out=path.join(repo,'output/website-practice-answers-20261009');
  fs.mkdirSync(out,{recursive:true});
  fs.writeFileSync(path.join(out,'sync-report.json'),JSON.stringify(result,null,2)+'\n');
}
console.log(JSON.stringify({...result,audit:undefined},null,2));
if(!write&&changes.size)process.exitCode=1;
