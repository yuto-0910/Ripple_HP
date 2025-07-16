// Intro animation for hair design space Ripple
window.addEventListener('DOMContentLoaded', () => {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const title = document.querySelector('.store-name');
  const card = document.querySelector('.card');
  const logo = document.querySelector('.logo');

  function runAnimation() {
    if (prefersReduced) {
      card.style.opacity = 1;
      card.style.filter = 'none';
      title.style.opacity = 1;
      title.style.filter = 'none';
      return;
    }

    document.querySelectorAll('.drop, .ripple').forEach(el => el.remove());

    card.style.opacity = 0;
    card.style.filter = 'blur(10px)';

    const drop = document.createElement('div');
    drop.className = 'drop';
    document.body.appendChild(drop);

    const ripple = document.createElement('div');
    ripple.className = 'ripple';
    document.body.appendChild(ripple);

    anime.timeline()
      .add({
        targets: drop,
        translateY: ['-220', '50vh'],
        duration: 1600,
        easing: 'easeOutBounce'
      })
      .add({
        targets: drop,
        opacity: [1, 0],
        duration: 400,
        easing: 'linear'
      })
      .add({
        targets: ripple,

        scale: [0, 60],
        opacity: [0.6, 0],
        duration: 1500,
        easing: 'easeOutQuad',
        offset: '-=1200'
      })
      .add({
        targets: card,
        opacity: [0, 1],
        filter: ['blur(10px)', 'blur(0px)'],
        duration: 800,
        easing: 'easeOutQuad',
        offset: '-=300'
      })
      .add({
        targets: title,
        opacity: [0, 1],
        filter: ['blur(10px)', 'blur(0px)'],
        duration: 800,
        easing: 'easeOutQuad',
        offset: '-=300'

      });
  }

  runAnimation();
  logo.addEventListener('click', runAnimation);
});
