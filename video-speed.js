(() => {
  function enhance(video) {
    if (video.dataset.speedControl) return;
    video.dataset.speedControl = 'true';
    const bar = document.createElement('div');
    bar.className = 'video-speed-control';
    const label = document.createElement('label');
    label.textContent = 'Speed ';
    const select = document.createElement('select');
    select.setAttribute('aria-label', (video.getAttribute('aria-label') || 'Video') + ' playback speed');
    for (const rate of [1, 1.5, 2]) {
      const option = document.createElement('option');
      option.value = rate; option.textContent = rate + '×'; select.append(option);
    }
    select.addEventListener('change', () => {video.playbackRate = Number(select.value);});
    video.addEventListener('ratechange', () => {select.value = String(video.playbackRate);});
    label.append(select); bar.append(label); video.insertAdjacentElement('afterend', bar);
  }
  const scan = () => document.querySelectorAll('video[controls]').forEach(enhance);
  scan(); new MutationObserver(scan).observe(document.body, {childList:true, subtree:true});
})();
