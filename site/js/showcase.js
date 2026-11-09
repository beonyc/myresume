(function () {
  var track = document.getElementById("showcase-track");
  var prev = document.getElementById("showcase-prev");
  var next = document.getElementById("showcase-next");
  var count = document.getElementById("showcase-count");
  if (!track || !prev || !next) return;

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

  function slides() {
    return Array.prototype.slice.call(track.children);
  }

  function labelSlides() {
    var all = slides();
    all.forEach(function (slide, i) {
      slide.setAttribute("aria-label", i + 1 + " of " + all.length);
    });
  }

  function currentIndex() {
    var w = track.clientWidth || 1;
    return Math.min(slides().length - 1, Math.max(0, Math.round(track.scrollLeft / w)));
  }

  function update() {
    var i = currentIndex();
    var total = slides().length;
    count.textContent = i + 1 + " / " + total;
    prev.disabled = i === 0;
    next.disabled = i === total - 1;
  }

  function go(i) {
    i = Math.min(slides().length - 1, Math.max(0, i));
    track.scrollTo({ left: i * track.clientWidth, behavior: reduce.matches ? "auto" : "smooth" });
  }

  prev.addEventListener("click", function () { go(currentIndex() - 1); });
  next.addEventListener("click", function () { go(currentIndex() + 1); });
  track.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  track.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") { e.preventDefault(); go(currentIndex() - 1); }
    if (e.key === "ArrowRight") { e.preventDefault(); go(currentIndex() + 1); }
  });

  labelSlides();
  update();
})();
