function cutCake() {
  const img = document.getElementById("cakeImg");
  const btnArea = document.getElementById("cakeBtnArea");

  // swap to cut image
  if (window.CAKE && window.CAKE.cut) {
    img.src = window.CAKE.cut;
  }

  // confetti burst (optional)
  if (window.confetti) {
    const end = Date.now() + 1000;
    (function frame() {
      confetti({ particleCount: 16, spread: 70, origin: { y: 0.3 } });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();
  }

  // reveal Next Page
  btnArea.style.display = "block";
}
