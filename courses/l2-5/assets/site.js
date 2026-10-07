(() => {
 'use strict';
 const prefix=document.body.dataset.storagePrefix||'comp2711:l2-5:';
 const siteLastKey='comp2711:site:lastLesson';
 const read=key=>{try{return JSON.parse(localStorage.getItem(key));}catch{return null;}};
 const write=(key,value)=>{try{localStorage.setItem(key,JSON.stringify(value));}catch{/* The pages remain readable without storage. */}};
 const get=key=>read(prefix+key);
 const set=(key,value)=>write(prefix+key,value);
 const words=value=>(value||'').split(' ').filter(Boolean);
 const sitePath=()=>{
  const brand=document.querySelector('a.brand');
  if(!brand)return null;
  const home=new URL(brand.getAttribute('href'),location.href).href;
  const directory=home.slice(0,home.lastIndexOf('/')+1);
  const current=location.href.split(/[?#]/)[0];
  return current.startsWith(directory)?decodeURI(current.slice(directory.length)):null;
 };
 function update(){
  document.querySelectorAll('[data-topic-id]').forEach(card=>{
   const status=card.querySelector('[data-status]');
   if(status)status.textContent=get('lesson-complete:'+card.dataset.topicId)?'已学完':'未学完';
  });
  document.querySelectorAll('[data-completion-key], [data-complete-key]').forEach(card=>{
   const status=card.querySelector('[data-status]');
   if(status)status.textContent=read(card.dataset.completionKey||card.dataset.completeKey)?'已学完':'未学完';
  });
  document.querySelectorAll('[data-progress-keys], [data-progress-topics]').forEach(note=>{
   const keys=note.hasAttribute('data-progress-keys')?words(note.dataset.progressKeys):words(note.dataset.progressTopics).map(id=>prefix+'lesson-complete:'+id);
   const completed=keys.filter(key=>read(key)).length;
   note.textContent=`已学完 ${completed} / ${keys.length} 课`;
  });
  document.querySelectorAll('[data-resume]').forEach(resume=>{
   if(resume.hasAttribute('data-resume-paths')){
    const paths=words(resume.dataset.resumePaths);
    const globalLast=read(siteLastKey);
    const oldLast=read('comp2711:l2-5:lastLesson');
    const last=[globalLast,oldLast].find(value=>paths.includes(value));
    const target=last||resume.dataset.resumeDefault||paths[0]||resume.dataset.resumeFallback;
    resume.href=(document.body.dataset.siteRoot||'')+target;
    resume.textContent=last?'继续学习':'开始学习';
   }else{
    const paths=words(resume.dataset.resumeTopics).map(id=>`lessons/${id}.html`);
    const last=get('lastLesson');
    if(paths.includes(last)){resume.href=last;resume.textContent='继续学习';}
    else if(paths.length){resume.href=paths[0];resume.textContent='开始学习';}
   }
  });
 }
 document.querySelectorAll('[data-lesson-complete]').forEach(input=>{
  input.checked=!!get('lesson-complete:'+input.dataset.lessonComplete);
  input.addEventListener('change',()=>{set('lesson-complete:'+input.dataset.lessonComplete,input.checked);update();});
 });
 window.addEventListener('pageshow',update);
 window.addEventListener('storage',update);
 document.querySelectorAll('[data-attempt]').forEach(input=>{
  input.value=get('attempt:'+input.dataset.attempt)||'';
  input.addEventListener('input',()=>set('attempt:'+input.dataset.attempt,input.value));
 });
 document.querySelectorAll('[data-question-id]').forEach(q=>{
  const saved=get('answer:'+q.dataset.questionId);
  const feedback=value=>{const box=q.querySelector('[data-feedback]');if(box)box.textContent=value===q.dataset.correct?'回答正确。':'已提交，请展开解析核对。';};
  q.querySelectorAll('input[type=radio]').forEach(input=>{
   input.checked=saved===input.value;
   input.addEventListener('change',()=>{set('answer:'+q.dataset.questionId,input.value);feedback(input.value);});
  });
  if(saved!==null)feedback(saved);
 });
 if(document.body.dataset.lesson){
  set('lastLesson',document.body.dataset.lesson);
  const current=sitePath();
  if(current)write(siteLastKey,current);
 }
 update();
})();
