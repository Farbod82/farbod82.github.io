(() => {
  const toggle = document.querySelector('.animation-toggle');
  const demos = [...document.querySelectorAll('.animated-demo')];
  const pipeline = document.querySelector('.pipeline');
  const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  let playing = !motionPreference.matches;

  function updateAnimations() {
    for (const demo of demos) {
      const visible = !demo.closest('details') || pipeline.open;
      const source = playing && visible ? demo.dataset.animation : demo.dataset.poster;
      if (demo.getAttribute('src') !== source) demo.setAttribute('src', source);
    }
    toggle.textContent = playing ? 'Pause animations' : 'Play animations';
    toggle.setAttribute('aria-pressed', String(playing));
  }

  toggle.hidden = false;
  toggle.addEventListener('click', () => {
    playing = !playing;
    updateAnimations();
  });
  pipeline.addEventListener('toggle', updateAnimations);
  motionPreference.addEventListener('change', (event) => {
    playing = !event.matches;
    updateAnimations();
  });
  updateAnimations();
})();
