const works = [
  { id:'one', title:'PROJECT ONE', line:'Brand & Digital Experience', text:'A short project description sits here. The layout keeps the writing compact so the image and title carry the first impression.', role:'Identity · Web · Art Direction · Motion', year:'2026', tone:'a' },
  { id:'two', title:'PROJECT TWO', line:'Product & Creative Direction', text:'This section follows the reference rhythm: a large project name on the left, a concise explanation on the right, then a wide media carousel below.', role:'Product · UI/UX · Design System', year:'2026', tone:'b' },
  { id:'three', title:'PROJECT THREE', line:'Spatial Experience', text:'The page behaves like a selected-works archive rather than a traditional multi-page portfolio. Each project can be scanned quickly while scrolling.', role:'Experience · Installation · Interaction', year:'2026', tone:'c' },
  { id:'four', title:'PROJECT FOUR', line:'Object & System Design', text:'Use this row for a physical or connected product. The same structure can hold renders, videos, process images, and final outcome shots.', role:'Industrial Design · CMF · Prototype', year:'2026', tone:'d' },
  { id:'five', title:'PROJECT FIVE', line:'Typography / Tool / Experiment', text:'Smaller explorations can live in the same feed. They feel consistent because the title, meta, gallery, and spacing repeat.', role:'Type · Code · Visual System', year:'2026', tone:'e' },
  { id:'six', title:'PROJECT SIX', line:'Research & Future System', text:'The final entries can be more conceptual. The template leaves enough room for a short system explanation without making the page text-heavy.', role:'Research · Systems · Concept', year:'2026', tone:'f' }
];

function visual(work, compact=false){
  return `<div class="visual visual-${work.tone} ${compact ? 'compact' : ''}"><span class="visual-word">${work.title}</span><i class="visual-caption">${work.line}</i></div>`;
}

function heroSlide(work, index){
  return `<section class="cover-slide ${index === 0 ? 'active' : ''}" data-slide="${index}" data-target="${work.id}">
    ${visual(work)}
    <div class="cover-shade"></div>
    <div class="cover-title display type-hero">SELECTED WORKS BY<br>NAME SURNAME ©</div>
    <div class="cover-meta"><span class="type-label">${String(index+1).padStart(2,'0')}</span><b>${work.title}</b><small class="type-caption">${work.line}</small></div>
  </section>`;
}

function aboutBlock(){
  return `<section class="about-block" id="about">
    <h2 class="display type-section">ABOUT</h2>
    <div class="about-copy type-body">
      <p><b>POSITION</b><br>Creative / product / interaction designer. Current role, location, or short positioning statement goes here.</p>
      <p><b>EXPERIENCE</b><br>2024–2026 Studio / Company<br>2022–2024 Studio / Company<br>2020–2022 School / Lab</p>
      <p><b>CONTACT</b><br>email@example.com<br>linkedin.com/example<br>portfolio index available below</p>
      <p><a href="#one">SCROLL TO WORKS</a></p>
    </div>
  </section>`;
}

function galleryItem(work, n){
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
      <p><b>VISIT</b> project link / case study link</p>
    </div>
    <div class="gallery" data-gallery="${work.id}">
      <div class="gallery-track">${[1,2,3].map(n => galleryItem(work,n)).join('')}</div>
      <button class="gallery-prev" type="button" aria-label="Previous media">←</button>
      <button class="gallery-next" type="button" aria-label="Next media">→</button>
    </div>
  </section>`;
}

function render(){
  document.querySelector('#content').innerHTML = `<div class="cover-stage">${works.map(heroSlide).join('')}</div>${aboutBlock()}<section class="work-feed">${works.map(workRow).join('')}</section><footer class="end"><a href="mailto:email@example.com">CONTACT EMAIL@EXAMPLE.COM</a><a href="#top">BACK TO TOP</a><span>©2026 NAME SURNAME</span></footer>`;
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
    const update = () => track.style.transform = `translateX(${-current * 100}%)`;
    gallery.querySelector('.gallery-next').addEventListener('click', () => { current = (current + 1) % items.length; update(); });
    gallery.querySelector('.gallery-prev').addEventListener('click', () => { current = (current - 1 + items.length) % items.length; update(); });
  });
}

render();
setupInteractions();
