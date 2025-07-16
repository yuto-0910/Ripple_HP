// Intro animation for hair design space Ripple
window.addEventListener('DOMContentLoaded', () => {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const title = document.querySelector('.store-name');
  const logo = document.querySelector('.logo');

  function runAnimation() {
    if (prefersReduced) {
      title.style.opacity = 1;
      title.style.filter = 'none';
      return;
    }

    document.querySelectorAll('.drop, .ripple').forEach(el => el.remove());

    const drop = document.createElement('div');
    drop.className = 'drop';
    document.body.appendChild(drop);

    const ripple = document.createElement('div');
    ripple.className = 'ripple';
    document.body.appendChild(ripple);

    anime.timeline()
      .add({
        targets: drop,
        translateY: ['-220', '65vh'],
        duration: 800,
        easing: 'easeOutBounce'
      })
      .add({
        targets: title,
        opacity: [0, 1],
        filter: ['blur(10px)', 'blur(0px)'],
        duration: 800,
        easing: 'easeOutQuad',
        offset: '-=200'
      })
      .add({
        targets: drop,
        opacity: [1, 0],
        duration: 200,
        easing: 'linear'
      })
      .add({
        targets: ripple,
        scale: [0, 20],
        opacity: [0.6, 0],
        duration: 1000,
        easing: 'easeOutQuad',
        offset: '-=600'
      });
  }

  runAnimation();
  logo.addEventListener('click', runAnimation);
});
