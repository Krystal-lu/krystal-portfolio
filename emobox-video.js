const video=document.querySelector('#emobox-video');
const status=document.querySelector('.status');
let requestedTime=null;
async function playChapter(){
  if(requestedTime!==null){video.currentTime=requestedTime;requestedTime=null;}
  try{await video.play();status.textContent='Playing the edited EmoBox usage demonstration.';}
  catch{status.textContent='Press play in the video to continue.';}
}
video.addEventListener('loadedmetadata',()=>{if(requestedTime!==null)playChapter();});
document.querySelectorAll('[data-time]').forEach(button=>button.addEventListener('click',()=>{
  document.querySelectorAll('[data-time]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
  requestedTime=Number(button.dataset.time);
  status.textContent=`Opening ${button.textContent.toLowerCase()}…`;
  if(video.readyState>=1)playChapter();else video.load();
}));
video.addEventListener('error',()=>{status.textContent='This browser could not play the edited MP4. Use the full-video link below.';});
