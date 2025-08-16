(function () {
  const root = document.querySelector('.celebrate-root');
  const lightsScreen = document.getElementById('lightsScreen');
  const holdScreen = document.getElementById('holdScreen');
  const finalScene = document.getElementById('finalScene');
  const btn = document.getElementById('lightsBtn');

  if (!root || !lightsScreen || !holdScreen || !finalScene || !btn) return;

  // helper: start confetti DOM (CSS-based)
  function launchConfetti() {
    const wrap = document.getElementById('confettiWrap');
    if (!wrap) return;

    const pieces = 140; // adjust density
    for (let i = 0; i < pieces; i++) {
      const s = document.createElement('span');
      s.className = 'confetti';
      s.style.left = Math.random() * 100 + 'vw';
      s.style.animationDelay = (Math.random() * 2) + 's';
      s.style.animationDuration = (3 + Math.random() * 3) + 's';
      wrap.appendChild(s);
    }
  }

  btn.addEventListener('click', () => {
    // Hide the button immediately, keep the title
    btn.style.display = 'none';

    // Fade from lightsScreen to holdScreen with background change
    lightsScreen.classList.add('fade-out');
    holdScreen.classList.add('show');

    // After 1 second, reveal the final celebration scene
    setTimeout(() => {
      holdScreen.classList.remove('show');
      holdScreen.classList.add('fade-out');

      finalScene.classList.add('show');
      launchConfetti();
    }, 1000);
  });
})();
