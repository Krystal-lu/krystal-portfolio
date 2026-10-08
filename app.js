const works = [
  { id:'one', title:'AIGER Kitchen', line:'AI Kitchen · UX & Interaction Design', text:'A connected-kitchen concept informed by interviews and questionnaire research with older adults. A working browser simulation makes proposed appliance coordination, reminders and assistance visible through a central-control interface. My work covers research, kitchen concept design, UI and the AI-assisted browser prototype.', role:'User Research · Kitchen Concept & UI Design · Simulated Usability Testing · AI-Assisted Prototyping', year:'2025–2026', tone:'a' },
  { id:'two', title:'EmoBox', line:'Emotional Companion · Product & Interaction Design', text:'A tangible emotional companion and mobile experience for check-ins, optional activities and reflection. EmoBox explores how gentle prompts, expressive feedback and flexible choices can make AI support feel approachable while keeping the user in control.', role:'User Experience Design · Product Design · Interaction Design · UI Design · Physical Prototyping', year:'2025', tone:'b' },
  { id:'three', title:'Fitsole', line:'Adaptive Footwear · Product & Interaction Design', text:'A wearable concept exploring adjustable arch support across running, walking and sitting. Fitsole connects pressure sensing, an inflatable support module and a proposed mobile interface, bringing everyday context into the design of a physical product.', role:'Product Design · User Experience Design · Interaction Design · Physical Prototyping', year:'2025', tone:'c' },
  { id:'four', title:'Food Time', line:'Immersive Experience · AI & Spatial Storytelling', text:'An immersive cultural experience concept that invites visitors to share a spring feast with the people of Hemudu. The concept film shows how picking up different objects would connect the dining table to fishing, animal keeping and rice cultivation through coordinated screen and tabletop responses. My contributions included LoRA model training, scene modeling and rendering, character illustration, and animation.', role:'LoRA Model Training · Scene Modeling & Rendering · Character Illustration · Animation', year:'2025', tone:'d' },
  { id:'five', title:'Little Atlas', line:'Travel Memory Archive · AI-Assisted Trip Planning', text:'A personal travel archive that connects places with photos, dates and memories. Little Atlas brings an illustrated globe, a journey timeline and postcards together, then uses AI to help shape the next trip. Built as a working web prototype through iterative design and AI-assisted development.', role:'Product Design · Interaction Design · AI-Assisted Development', year:'2026', tone:'e' },
  { id:'six', title:'Re-Natured Nature', line:'Gesture Interaction · Experimental Installation', text:'A gesture-based installation exploring how humans reconstruct nature through cultivation, industrial power and digital information. I implemented camera-based recognition in TouchDesigner: a half-clenched hand, clenched fist and open palm switch between three visual interpretations of the same tree in real time.', role:'Interaction Design · TouchDesigner Implementation · Installation Design', year:'2025', tone:'f' }
];
works.sort((a,b)=>['one','two','five','three','four','six'].indexOf(a.id)-['one','two','five','three','four','six'].indexOf(b.id));

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
    <div class="cover-meta"><span class="type-label">${String(index+1).padStart(2,'0')}</span><b>${work.title}</b><small class="type-caption">${work.line}</small></div>
  </section>`;
}

function aboutBlock(){
  return `<section class="about-block" id="about">
    <h2 class="display type-section">ABOUT</h2>
    <div class="about-copy type-body">
      <p><b>KRYSTAL (XINRU) LU</b><br>UX & Product Designer · San Francisco Bay Area</p>
      <p>I design connected products and interfaces that make technology easier to understand and use. My work brings together user research, interaction design and physical prototyping, with a focus on accessible everyday experiences and human-AI interaction.</p>
      <p><b>EDUCATION</b><br>University of California, Berkeley · Master of Design<br>Aug 2026 – Dec 2027 (expected)<br><br>China Academy of Art · B.A. in Product Design<br>Sep 2022 – Jun 2026</p>
      <p><b>EXPERIENCE</b><br>Fotile Group · UX/UI Design Intern<br>Jun 2025 – Jun 2026<br><br>Free Coffee · Product Design Consultant<br>Sep 2025 – Oct 2025<br><br>Alibaba Cloud · AI Creator & Interaction Designer<br>Mar 2025 – May 2025<br><br>MYbank (Ant Group) · Design Lead, Intern<br>Nov 2024 – Jan 2025<br><br>Ningbo Ruika Electric · Product Design Assistant<br>Jun 2023 – Sep 2023</p>
      <p><b>TOOLS</b><br>Figma · Adobe Creative Cloud · Rhino · KeyShot · Blender · Arduino · TouchDesigner · Python</p>
      <p><b>CONTACT</b><br><a href="mailto:xinru_lu@berkeley.edu">xinru_lu@berkeley.edu</a><br><a href="tel:+13412133503">+1 341-213-3503</a><br><a href="assets/resume/Krystal-Lu-UX-Resume.pdf?v=20261008" download="Krystal-Lu-UX-Design-Resume.pdf">DOWNLOAD CV ↗</a></p>
      <p><a href="#one">EXPLORE SELECTED WORKS ↓</a></p>
    </div>
  </section>`;
}

function emoboxHero(){return `<img class="emobox-cover-image" src="assets/emobox/cover.png" alt="EmoBox with Momo and personalized emotion cards in an everyday living room">`;}
function galleryItem(work, n){
  if(work.id==='six'){
    const content=n===1?`<a href="re-natured-nature.html"><img src="assets/re-natured-nature/scene-original.png" alt="Re-Natured Nature installation overview"></a>`:`<video controls playsinline preload="metadata" poster="assets/re-natured-nature/scene-original.png" aria-label="Re-Natured Nature project demonstration"><source src="assets/re-natured-nature/demo.mp4" type="video/mp4"></video>`;
    return `<figure class="gallery-item renature-gallery">${content}<figcaption>Re-Natured Nature · ${n===1?'Installation overview':'Project video'} · ${n} / 2 · <a href="re-natured-nature.html">CASE STUDY ↗</a></figcaption></figure>`;
  }
  if(work.id==='five'){
    if(n===1) return `<figure class="gallery-item atlas-gallery atlas-video-slide"><video controls playsinline preload="metadata" aria-label="Little Atlas complete usage demonstration"><source src="assets/little-atlas/use-demo.mp4" type="video/mp4"></video><figcaption>Little Atlas · Complete usage demo · 1 / 2 · <a href="little-atlas.html">CASE STUDY ↗</a></figcaption></figure>`;
    const media='planner';
    return `<figure class="gallery-item atlas-gallery"><a href="little-atlas.html"><div class="atlas-image"><img src="assets/little-atlas/${media}-original.png" alt="Little Atlas ${n===1?'globe and saved memories':'trip planning preferences'}" loading="lazy"></div></a><figcaption>Little Atlas · ${n===1?'A personal memory atlas':'Plan the next journey'} · ${n} / 2 · <a href="little-atlas.html">CASE STUDY ↗</a></figcaption></figure>`;
  }
  if(work.id==='four'){
    const content=n===1?`<a href="food-time.html"><img src="assets/food-time/cover.png" alt="Food Time immersive installation concept"></a>`:`<video controls playsinline preload="metadata" poster="assets/food-time/cover.png" aria-label="Food Time concept film"><source src="assets/food-time/demo-en.mp4" type="video/mp4"></video>`;
    return `<figure class="gallery-item food-gallery">${content}<figcaption>Food Time · ${n===1?'Immersive experience concept':'Concept film'} · ${n} / 2 · <a href="food-time.html">CASE STUDY ↗</a></figcaption></figure>`;
  }

  if(work.id==='three'){
    const content=n===1?`<a href="fitsole.html"><img src="assets/fitsole/walking.png" alt="Fitsole walking scenario from the original project"></a>`:`<video controls playsinline preload="metadata" poster="assets/fitsole/walking.png" aria-label="Fitsole project demonstration"><source src="assets/fitsole/use-demo-v2.mp4" type="video/mp4"></video>`;
    return `<figure class="gallery-item fitsole-gallery ${n===2?'fitsole-video-slide':''}">${content}<figcaption>Fitsole · ${n===1?'Everyday walking scenario':'Project demo'} · ${n} / 2 · <a href="fitsole.html">CASE STUDY ↗</a></figcaption></figure>`;
  }

  if(work.id==='two'){
    const content=n===1?`<a class="emobox-full-cover" href="emobox.html">${emoboxHero()}</a>`:`<video class="emobox-home-video" controls playsinline preload="none" poster="assets/emobox/cover.png" aria-label="EmoBox usage demonstration"><source src="assets/emobox/use-demo-web.mp4"></video>`;
    return `<figure class="gallery-item emobox-gallery ${n===2?'emobox-video-slide':''}">${content}<figcaption class="type-caption">EmoBox · ${n===1?'Momo in everyday life':'Usage demonstration'} · ${n} / 2 · <a href="emobox.html">CASE STUDY ↗</a></figcaption></figure>`;
  }

  if(work.id==='one') {
    const scenes=[{name:'front',label:'Front view',quad:[[1251,445],[1347,445],[1347,512],[1251,512]]},{name:'angle',label:'Angled view',quad:[[1028,405],[1112,401],[1112,460],[1028,465]]},{name:'low',label:'Lower view',quad:[[1037,462],[1136,465],[1136,530],[1037,527]]}];
    const scene=scenes[n-1];
    return `<figure class="gallery-item"><a class="aiger-hero-link" href="aiger-notes.html"><div class="kitchen-scene" data-quad='${JSON.stringify(scene.quad)}'><img class="kitchen-render" src="assets/aiger-scenes/${scene.name}.jpg" alt="AIGER Kitchen overall spatial concept — ${scene.label}" loading="eager"><img class="screen-ui" src="assets/aiger-scenes/ui-normal.jpg" alt="" aria-hidden="true"></div></a><figcaption class="type-caption">AIGER Kitchen · ${scene.label} · ${n} / 3 · <a href="aiger-notes.html">EXPLORE UI & SCENARIOS ↗</a></figcaption></figure>`;
  }
  return `<figure class="gallery-item">
    ${visual({...work, title:`${work.title} / ${String(n).padStart(2,'0')}`})}
    <figcaption class="type-caption">${work.line} · Slide ${String(n).padStart(2,'0')}</figcaption>
  </figure>`;
}

function workRow(work, index){
  return `<section class="work-row" id="${work.id}" data-work="${index}">
    <div class="work-name"><span class="type-label">${String(index+1).padStart(2,'0')}</span><h2 class="display type-project-title">${work.title}</h2></div>
    <div class="work-copy type-body">
      <p>${work.text}</p>
      <p><b>ROLE</b> ${work.role}</p>
      <p><b>YEAR</b> ${work.year}</p>
      <p><b>VISIT</b> ${work.id==='one' ? '<a href="aiger-notes.html">CASE STUDY ↗</a> · <a href="aiger.html">LIVE PROTOTYPE ↗</a>' : work.id==='two' ? '<a href="emobox.html">CASE STUDY ↗</a> · <a href="emobox.html#demo">USAGE VIDEO ↗</a>' : work.id==='three' ? '<a href="fitsole.html">CASE STUDY ↗</a> · <a href="fitsole.html#demo">PROJECT DEMO ↗</a>' : work.id==='four' ? '<a href="food-time.html">CASE STUDY ↗</a> · <a href="food-time.html#demo">CONCEPT FILM ↗</a>' : work.id==='five' ? '<a href="little-atlas.html">CASE STUDY ↗</a> · <a href="https://little-atlas-9tcl.vercel.app/" target="_blank" rel="noopener">LIVE PROTOTYPE ↗</a>' : work.id==='six' ? '<a href="re-natured-nature.html">CASE STUDY ↗</a> · <a href="re-natured-nature.html#demo">PROJECT VIDEO ↗</a>' : 'project link / case study link'}</p>
    </div>
    <div class="gallery" data-gallery="${work.id}">
      <div class="gallery-track">${(['two','three','four','five','six'].includes(work.id)?[1,2]:[1,2,3]).map(n => galleryItem(work,n)).join('')}</div>
      <button class="gallery-prev" type="button" aria-label="Previous media">←</button>
      <button class="gallery-next" type="button" aria-label="Next media">→</button>
    </div>
  </section>`;
}

function render(){
  document.querySelector('#content').innerHTML = `<div class="cover-stage">${works.map(heroSlide).join('')}</div>${aboutBlock()}<section class="work-feed">${works.map(workRow).join('')}</section><footer class="end"><a href="mailto:xinru_lu@berkeley.edu">CONTACT XINRU_LU@BERKELEY.EDU</a><a href="#top">BACK TO TOP</a><span>©2026 KRYSTAL LU</span></footer>`;
  document.querySelector('.index-grid').innerHTML = works.map((work, index) => `<a href="#${work.id}" data-index-link><small>${String(index+1).padStart(2,'0')}</small>${visual(work,true)}<b>${work.title}</b></a>`).join('');
}

function setupInteractions(){
  let active = 0;
  const slides = document.querySelectorAll('.cover-slide');
  const timer = setInterval(() => {
    if (document.body.classList.contains('index-open')) return;
    active = (active + 1) % slides.length;
    slides.forEach((slide, i) => slide.classList.toggle('active', i === active));
  }, 3200);

  slides.forEach((slide, i) => slide.addEventListener('click', () => {
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
    const update = () => {
      track.style.transform = `translateX(${-current * 100}%)`;
      items.forEach((item,index)=>{const video=item.querySelector('video');if(video&&index!==current)video.pause();});
      gallery.classList.toggle('showing-video',!!items[current].querySelector('video,iframe'));
    };
    gallery.querySelector('.gallery-next').addEventListener('click', () => { current = (current + 1) % items.length; update(); });
    gallery.querySelector('.gallery-prev').addEventListener('click', () => { current = (current - 1 + items.length) % items.length; update(); });
  });
}

render();
setupInteractions();
