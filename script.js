/* ==========================================================================
   Ақ Отау RestoBar — только кнопка «наверх». Больше на странице ничего нет.
   ========================================================================== */
(function () {
  'use strict';

  var toTop = document.getElementById('toTop');

  if (!toTop) return;

  toTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  var ticking = false;

  function onScroll() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () {
      toTop.classList.toggle('is-visible', window.scrollY > 600);
      ticking = false;
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();