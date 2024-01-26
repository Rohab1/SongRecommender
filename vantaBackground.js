document.addEventListener('DOMContentLoaded', () => {
  const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  let minHeight = 700.00;
  let minWidth = 500.00;

  if (windowWidth < minWidth) {
    minWidth = windowWidth;
  }
  if (windowHeight < minHeight) {
    minHeight = windowHeight;
  }

  // eslint-disable-next-line no-undef
  VANTA.NET({
    el: 'body',
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight,
    minWidth,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x20b2aa,
    backgroundColor: 0x0,
    points: 20.00,
    maxDistance: 14.00,
    spacing: 10.00
  });
});
