/*titre au scroll*/
document.addEventListener("DOMContentLoaded", () => {
  const titles = document.querySelectorAll(".title-scroll");

  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  titles.forEach((title) => observer.observe(title));
});


/*parallaxe logo bannière*/
const bannerLogo = document.querySelector('.banner_logo_wrapper');

if (bannerLogo && window.innerWidth > 768) {
  window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;

    bannerLogo.style.transform = `translateY(${scrollPosition * 0.3}px)`;
  });
}


/*parallaxe nuage */
document.addEventListener("DOMContentLoaded", function () {
  const placeSection = document.querySelector("#place");
  const bigCloud = document.querySelector(".big_cloud");
  const littleCloud = document.querySelector(".little_cloud");

  if (!placeSection || !bigCloud || !littleCloud) return;

  function moveClouds() {
    const sectionPosition = placeSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    let scrollProgress = (windowHeight - sectionPosition.top) / (windowHeight + sectionPosition.height);

    scrollProgress = Math.max(0, Math.min(scrollProgress, 1));

    const cloudPosition = scrollProgress * -300;

    bigCloud.style.transform = `translateX(${cloudPosition}px)`;
    littleCloud.style.transform = `translateX(${cloudPosition}px)`;
  }

  window.addEventListener("scroll", moveClouds);
  window.addEventListener("resize", moveClouds);

  moveClouds();
});


/*menu*/
document.addEventListener('DOMContentLoaded', function () {

  const menuToggle = document.querySelector('.menu-toggle');
  const menuOverlay = document.querySelector('#menu-overlay');
  const menuClose = document.querySelector('.menu-close');
  const menuLinks = document.querySelectorAll('.menu a');

  menuToggle.addEventListener('click', function () {
    menuOverlay.classList.add('active');
    document.body.classList.add('no-scroll');
  });

  menuClose.addEventListener('click', function () {
    menuOverlay.classList.remove('active');
    document.body.classList.remove('no-scroll');
  });

  menuLinks.forEach(link => {
    link.addEventListener('click', function () {
      menuOverlay.classList.remove('active');
      document.body.classList.remove('no-scroll');
    });
  });

});