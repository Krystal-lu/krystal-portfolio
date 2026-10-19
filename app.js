const works = [
  { id:'one', title:'AIGER Kitchen', line:'Aging in Place · Kitchen Experience & Interaction', text:'Older adults reported forgetting to start the extractor hood and going back to check whether appliances were off. AIGER links the hood to ignition and puts appliance states in one place, within a kitchen layout designed around their cooking routines.', role:'User Research · Kitchen Concept & UI Design · Simulated Usability Testing · AI-Assisted Prototyping', year:'2025–2026', tone:'a' },
  { id:'five', title:'Little Atlas', line:'Digital Product · UX & AI Interaction', text:'Photos from different visits to the same city can get mixed together, losing the dates and stories behind them. Little Atlas keeps each visit separate and connects its photos and notes through a globe and timeline. AI trip plans have their own space.', role:'Product Design · Interaction Design · AI-Assisted Development', year:'2026', tone:'e' },
  { id:'two', title:'EmoBox', line:'Emotional Support · UX & Interaction Design', text:'Testing feedback showed that a phone pop-up could make a bad mood feel worse, and card drawing could feel too rigid. EmoBox proposes a quieter first invitation and gives people clear choices to try, redraw or stop.', role:'User Experience Design · Product Design · Interaction Design · UI Design · Physical Prototyping', year:'2025', tone:'b' },
  { id:'three', title:'Fitsole', line:'Wearable Experience · Interaction Concept', text:'Fixed arch support leaves little room to adjust between sitting, walking and running. Fitsole explores an inflatable support module and activity-based phone controls; the pressure sensor and pump worked, while the app connection remains a proposal.', role:'Product Design · User Experience Design · Interaction Design · Physical Prototyping', year:'2025', tone:'c' },
  { id:'four', title:'Food Time', line:'Spatial Interaction · Cultural Storytelling', text:'What if visitors could learn about Hemudu food culture by joining a meal? Food Time proposes a table where picking up an object opens a story on the screens and tabletop.', role:'LoRA Model Training · Scene Modeling & Rendering · Character Illustration · Animation', year:'2025', tone:'d' },
  { id:'six', title:'Re-Natured Nature', line:'Gesture Interaction · TouchDesigner', text:'We shape nature by growing it, building with it and turning it into information. Here, three hand gestures change the same tree in real time, making those relationships visible.', role:'Interaction Design · TouchDesigner Implementation · Installation Design', year:'2025', tone:'f' }
];

function visual(work, compact=false){
  if(work.id==='six') return `<div class="renature-cover"><img src="assets/re-natured-nature/scene-original.png" alt="Re-Natured Nature final installation scene"></div>`;
  if(work.id==='five') return `<div class="atlas-index atlas-image"><img src="assets/little-atlas/atlas-original.png" alt="Little Atlas illustrated globe and travel memories"></div>`;
  if(work.id==='four') return `<div class="food-cover"><img src="assets/food-time/cover.png" alt="Food Time immersive spring feast concept"></div>`;
  if(work.id==='three') return `<div class="fitsole-cover"><img src="assets/fitsole/walking.png" alt="Fitsole everyday walking scenario"></div>`;
  if(work.id==='two') return `<div class="visual emobox-cover ${compact ? 'compact' : ''}">${emoboxHero()}</div>`;
  return `<div class="visual visual-${work.tone} ${compact ? 'compact' : ''}"><span class="visual-word">${work.title}</span><i class="visual-caption">${work.line}</i></div>`;
}

function heroSlide(work, index){
  return `<section class="cover-slide ${index === 0 ? 'active' : ''}" data-slide="${index}" data-target="${work.id}">
    <div class="cover-shade"></div>
    <div class="cover-title display type-hero">SELECTED WORKS BY<br>KRYSTAL LU ©</div>
    <div class="cover-positioning"><p>UX &amp; INTERACTION DESIGN</p><a href="#one">01 / AIGER Kitchen ↗</a><a href="#five">02 / Little Atlas ↗</a></div><div class="cover-meta"><span class="type-label">${String(index+1).padStart(2,'0')}</span><b>${work.title}</b><small class="type-caption">${work.line}</small></div>
  </section>`;
}

function aboutBlock(){
  return `<section class="about-block" id="about">
    <h2 class="display type-section">ABOUT</h2>
    <div class="about-copy type-body">
      <p><b>KRYSTAL (XINRU) LU</b><br>UX & Product Designer · San Francisco Bay Area</p>
      <p>I’m a UX and product designer studying at UC Berkeley. I’m interested in the moments when technology asks too much of people: a kitchen with too many steps to remember, a check-in that interrupts, or an archive that loses the story behind a photo. I use research and working prototypes to work through those problems.</p>
      <p><b>EDUCATION</b><br>University of California, Berkeley · Master of Design<br>Aug 2026 – Dec 2027 (expected)<br><br>China Academy of Art · B.A. in Product Design<br>Sep 2022 – Jun 2026</p>
      <p><b>EXPERIENCE</b><br>Fotile Group · UX/UI Design Intern<br>Older-adult kitchen experience · Appliance interaction &amp; control UI<br>Jun 2025 – Jun 2026<br><br>Free Coffee · Product Design Consultant<br>Sep 2025 – Oct 2025<br><br>Alibaba Cloud · AI Creator & Interaction Designer<br>Mar 2025 – May 2025<br><br>MYbank (Ant Group) · Design Lead, Intern<br>Nov 2024 – Jan 2025<br><br>Ningbo Ruika Electric · Product Design Assistant<br>Jun 2023 – Sep 2023</p>
      <p><b>TOOLS</b><br>Figma · Adobe Creative Cloud · Rhino · KeyShot · Blender · Arduino · TouchDesigner · Python</p>
      <p><b>CONTACT</b><br><a href="mailto:xinru_lu@berkeley.edu">xinru_lu@berkeley.edu</a><br><a href="tel:+13412133503">+1 341-213-3503</a><br><a href="assets/resume/Krystal-Lu-UX-Resume.pdf?v=20261015" download="Krystal-Lu-UX-Design-Resume.pdf">DOWNLOAD CV ↗</a></p>
      <p><a href="#one">EXPLORE SELECTED WORKS ↓</a></p>
    </div>
  </section>`;
}

function emoboxHero(){return `<img class="emobox-cover-image" src="assets/emobox/cover.png" alt="EmoBox with Momo and personalized emotion cards in an everyday living room">`;}
function galleryItem(work, n){
  if(work.id==='six'){
    const content=n===1?`<a href="re-natured-nature.html"><img src="assets/re-natured-nature/scene-original.png" alt="Re-Natured Nature installation overview"></a>`:`<video controls playsinline preload="metadata" poster="assets/re-natured-nature/scene-original.png" aria-label="Re-Natured Nature project demonstration"><source src="assets/re-natured-nature/demo.mp4" type="video/mp4"></video>`;
    return `<figure class="gallery-item renature-gallery">${content}<figcaption>Re-Natured Nature · ${n===1?'Installation overview':'Project video'} · ${n} / 2</figcaption></figure>`;
  }
  if(work.id==='five'){
    return `<figure class="gallery-item atlas-gallery atlas-video-slide"><video controls playsinline preload="metadata" aria-label="Little Atlas complete usage demonstration"><source src="assets/little-atlas/use-demo.mp4" type="video/mp4"></video><figcaption>Little Atlas · Complete usage demo</figcaption></figure>`;
  }
  if(work.id==='four'){
    const content=n===1?`<a href="food-time.html"><img src="assets/food-time/cover.png" alt="Food Time immersive installation concept"></a>`:`<video controls playsinline preload="metadata" poster="assets/food-time/cover.png" aria-label="Food Time concept film"><source src="assets/food-time/demo-en.mp4" type="video/mp4"></video>`;
    return `<figure class="gallery-item food-gallery">${content}<figcaption>Food Time · ${n===1?'Immersive experience concept':'Concept film'} · ${n} / 2</figcaption></figure>`;
  }

  if(work.id==='three'){
    const content=n===1?`<a href="fitsole.html"><img src="assets/fitsole/walking.png" alt="Fitsole walking scenario from the original project"></a>`:`<video controls playsinline preload="metadata" poster="assets/fitsole/walking.png" aria-label="Fitsole project demonstration"><source src="assets/fitsole/use-demo-v2.mp4" type="video/mp4"></video>`;
    return `<figure class="gallery-item fitsole-gallery ${n===2?'fitsole-video-slide':''}">${content}<figcaption>Fitsole · ${n===1?'Everyday walking scenario':'Project demo'} · ${n} / 2</figcaption></figure>`;
  }

  if(work.id==='two'){
    const content=n===1?`<a class="emobox-full-cover" href="emobox.html">${emoboxHero()}</a>`:`<video class="emobox-home-video" controls playsinline preload="none" poster="assets/emobox/cover.png" aria-label="EmoBox usage demonstration"><source src="assets/emobox/use-demo-web.mp4"></video>`;
    return `<figure class="gallery-item emobox-gallery ${n===2?'emobox-video-slide':''}">${content}<figcaption class="type-caption">EmoBox · ${n===1?'Momo in everyday life':'Usage demonstration'} · ${n} / 2</figcaption></figure>`;
  }

  if(work.id==='one') {
    const scenes=[{name:'front',label:'Front view',quad:[[1251,445],[1347,445],[1347,512],[1251,512]]},{name:'angle',label:'Angled view',quad:[[1028,405],[1112,401],[1112,460],[1028,465]]},{name:'low',label:'Lower view',quad:[[1037,462],[1136,465],[1136,530],[1037,527]]}];
    const scene=scenes[n-1];
    return `<figure class="gallery-item"><a class="aiger-hero-link" href="aiger-notes.html"><div class="kitchen-scene" data-quad='${JSON.stringify(scene.quad)}'><img class="kitchen-render" src="assets/aiger-scenes/${scene.name}.jpg" alt="AIGER Kitchen overall spatial concept — ${scene.label}" loading="eager"><img class="screen-ui" src="assets/aiger-scenes/ui-normal.jpg" alt="" aria-hidden="true"></div></a><figcaption class="type-caption">AIGER Kitchen · ${scene.label} · ${n} / 3</figcaption></figure>`;
  }
  return `<figure class="gallery-item">
    ${visual({...work, title:`${work.title} / ${String(n).padStart(2,'0')}`})}
    <figcaption class="type-caption">${work.line} · Slide ${String(n).padStart(2,'0')}</figcaption>
  </figure>`;
}


const projectLinks = {
  one: {case:'aiger-notes.html', secondary:'aiger-notes.html#prototype', label:'Try the kitchen demo', hint:'Interactive appliance controls'},
  five: {case:'little-atlas.html', secondary:'https://little-atlas-9tcl.vercel.app/', label:'Try Little Atlas', hint:'Opens the working app', external:true},
  two: {case:'emobox.html', secondary:'emobox.html#demo', label:'Watch the demo', hint:'See the companion and app in use'},
  three: {case:'fitsole.html', secondary:'fitsole.html#demo', label:'Watch the demo', hint:'See the physical prototype'},
  four: {case:'food-time.html', secondary:'food-time.html#demo', label:'Watch the concept film', hint:'See the proposed experience'},
  six: {case:'re-natured-nature.html', secondary:'re-natured-nature.html#demo', label:'Watch the demo', hint:'See gestures change the visuals'}
};
function projectActions(work){const link=projectLinks[work.id];return `<nav class="project-actions" aria-label="Explore ${work.title}"><a class="project-entry primary" href="${link.case}"><span>View case study</span><span aria-hidden="true">↗</span></a><a class="project-entry secondary" href="${link.secondary}" ${link.external?'target="_blank" rel="noopener"':''}><span>${link.label}</span><span aria-hidden="true">${link.external?'↗':'→'}</span></a><span class="entry-description">Case study: the problem, design decisions and outcome.</span></nav>`;}

function workRow(work, index){
  return `<section class="work-row" id="${work.id}" data-work="${index}">
    <div class="work-name"><span class="type-label">${String(index+1).padStart(2,'0')}</span><h2 class="display type-project-title">${work.title}</h2></div>
    <div class="work-copy type-body">
      <p>${work.text}</p>
      ${projectActions(work)}
      <p><b>ROLE</b> ${work.role}</p>
      <p><b>YEAR</b> ${work.year}</p>
    </div>
    <div class="gallery" data-gallery="${work.id}">
      <div class="gallery-track">${(work.id==='five'?[1]:['two','three','four','six'].includes(work.id)?[1,2]:[1,2,3]).map(n => galleryItem(work,n)).join('')}</div>
      <div class="gallery-navigation"><div class="media-browser"><button class="media-previous" type="button" aria-label="Previous preview for ${work.title}">← <span>Previous</span></button><span class="media-position" role="status" aria-live="polite"></span><button class="media-next" type="button" aria-label="Next preview for ${work.title}"><span>Next</span> →</button></div><a class="gallery-open-case" href="${projectLinks[work.id].case}">View ${work.title} case study <span aria-hidden="true">↗</span></a></div>
    </div>
  </section>`;
}

function render(){
  document.querySelector('#content').innerHTML = `<div class="cover-stage">${works.slice(0,1).map(heroSlide).join('')}</div><section class="work-feed">${works.map(workRow).join('')}</section>${aboutBlock()}<footer class="end"><a href="mailto:xinru_lu@berkeley.edu">CONTACT XINRU_LU@BERKELEY.EDU</a><a href="#top">BACK TO TOP</a><span>©2026 KRYSTAL LU</span></footer>`;
  document.querySelector('.index-grid').innerHTML = works.map((work, index) => `<a href="#${work.id}" data-index-link><small>${String(index+1).padStart(2,'0')}</small>${visual(work,true)}<b>${work.title}</b></a>`).join('');
}

function setupInteractions(){
  let active = 0;
  const slides = document.querySelectorAll('.cover-slide');


  slides.forEach((slide, i) => slide.addEventListener('click', (event) => {
    if(event.target.closest('a,button')) return;
    active = i;
    document.querySelector(`#${slide.dataset.target}`)?.scrollIntoView({behavior:'smooth'});
  }));

  const toggle = document.querySelector('.index-toggle');
  const layer = document.querySelector('.index-layer');
  const close = () => {
    document.body.classList.remove('index-open');
    toggle.setAttribute('aria-expanded','false');
    layer.setAttribute('aria-hidden','true');
  };
  toggle.addEventListener('click', () => {
    document.body.classList.add('index-open');
    toggle.setAttribute('aria-expanded','true');
    layer.setAttribute('aria-hidden','false');
  });
  document.querySelector('.index-close').addEventListener('click', close);
  document.querySelectorAll('[data-index-link]').forEach(link => link.addEventListener('click', close));
  window.addEventListener('keydown', event => { if (event.key === 'Escape') close(); });

  document.querySelectorAll('.gallery').forEach(gallery => {
    let current = 0;
    const track = gallery.querySelector('.gallery-track');
    const items = gallery.querySelectorAll('.gallery-item');
    const row=gallery.closest('.work-row');
    const title=row.querySelector('h2').textContent;
    items.forEach(item=>{
      const imageLink=item.querySelector('a:has(img)');
      if(imageLink){
        imageLink.classList.add('media-entry');
        imageLink.setAttribute('aria-label','View '+title+' case study');
        imageLink.insertAdjacentHTML('beforeend','<span class="image-entry-label">View case study <span aria-hidden="true">↗</span></span>');
      }
    });
    if(items.length===1) gallery.classList.add('single-preview');
    const update = () => {
      track.style.transform = `translateX(${-current * 100}%)`;
      items.forEach((item,index)=>{const video=item.querySelector('video');if(video&&index!==current)video.pause();});
      gallery.classList.toggle('showing-video',!!items[current].querySelector('video,iframe'));
      gallery.querySelector('.media-position').textContent=(items[current].querySelector('video')?'Video':'Image')+' '+(current+1)+' / '+items.length;
      items.forEach((item,index)=>{item.inert=index!==current;});
    };
    gallery.querySelector('.media-next').addEventListener('click', () => { current = (current + 1) % items.length; update(); });
    gallery.querySelector('.media-previous').addEventListener('click', () => { current = (current - 1 + items.length) % items.length; update(); });
    update();
  });
}

render();
setupInteractions();
