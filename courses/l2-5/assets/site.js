(() => {
 'use strict';
 const prefix='comp2711:l2-5:';
 const get=(key)=>{try{return JSON.parse(localStorage.getItem(prefix+key));}catch{return null;}};
 const set=(key,value)=>{try{localStorage.setItem(prefix+key,JSON.stringify(value));}catch{/* Reading remains available without storage. */}};
 function update(){
  const cards=[...document.querySelectorAll('[data-topic-id]')];
  cards.forEach(card=>{card.querySelector('[data-status]').textContent=get('lesson-complete:'+card.dataset.topicId)?'已学完':'未学完';});
  document.querySelectorAll('[data-progress-topics]').forEach(note=>{
   const topics=note.dataset.progressTopics.split(' ').filter(Boolean);
   const n=topics.filter(id=>get('lesson-complete:'+id)).length;
   note.textContent=`已学完 ${n} / ${topics.length} 课`;
  });
  document.querySelectorAll('[data-resume]').forEach(resume=>{
   const last=get('lastLesson');
   const paths=resume.dataset.resumeTopics.split(' ').map(id=>`lessons/${id}.html`);
   if(paths.includes(last)){resume.href=last;resume.textContent='继续学习';}
   else {resume.href=paths[0];resume.textContent='开始学习';}
  });
 }
 document.querySelectorAll('[data-lesson-complete]').forEach(input=>{input.checked=!!get('lesson-complete:'+input.dataset.lessonComplete);input.addEventListener('change',()=>{set('lesson-complete:'+input.dataset.lessonComplete,input.checked);update();});});
 window.addEventListener('pageshow',update);
 window.addEventListener('storage',update);
 document.querySelectorAll('[data-attempt]').forEach(input=>{input.value=get('attempt:'+input.dataset.attempt)||'';input.addEventListener('input',()=>set('attempt:'+input.dataset.attempt,input.value));});
 document.querySelectorAll('[data-question-id]').forEach(q=>{
  const saved=get('answer:'+q.dataset.questionId);
  const feedback=value=>{const box=q.querySelector('[data-feedback]');if(box)box.textContent=value===q.dataset.correct?'回答正确。':'已提交，请展开解析核对。';};
  q.querySelectorAll('input[type=radio]').forEach(input=>{input.checked=saved===input.value;input.addEventListener('change',()=>{set('answer:'+q.dataset.questionId,input.value);feedback(input.value);});});
  if(saved!==null)feedback(saved);
 });
 if(document.body.dataset.lesson){set('lastLesson',document.body.dataset.lesson);}
 update();
})();
