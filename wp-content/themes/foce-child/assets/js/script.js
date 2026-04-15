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

/* ===== paralaxe ===== */
  const logoWrapper = document.querySelector('.banner_logo_wrapper');
// On vérifie si présent + désactive sur tablette
if (logoWrapper && window.innerWidth > 768) {
  window.addEventListener('scroll', function () {
    let scrollY = window.scrollY;

    logoWrapper.style.transform = `translateY(${scrollY * 0.3}px)`;
  });
}

/* ===== paralaxe nuages section lieu ===== */
document.addEventListener("DOMContentLoaded", function () {
  const placeSection = document.querySelector("#place");
  const bigCloud = document.querySelector(".big_cloud");
  const littleCloud = document.querySelector(".little_cloud");

  if (!placeSection || !bigCloud || !littleCloud) return;

  function moveClouds() {
    const rect = placeSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    let progress = (windowHeight - rect.top) / (windowHeight + rect.height);

    progress = Math.max(0, Math.min(progress, 1));

    const translateValue = progress * -300;
console.log(translateValue);

    bigCloud.style.transform = `translateX(${translateValue}px)`;
    littleCloud.style.transform = `translateX(${translateValue}px)`;
  }

  window.addEventListener("scroll", moveClouds);
  window.addEventListener("resize", moveClouds);

  moveClouds();
});

/* ===== menu ===== */
document.addEventListener('DOMContentLoaded', function () {

  const menuToggle = document.querySelector('.menu-toggle');
  const menuOverlay = document.querySelector('#menu-overlay');
  const menuClose = document.querySelector('.menu-close');
  const menuLinks = document.querySelectorAll('.menu a');

  // OUVRIR MENU
  menuToggle.addEventListener('click', function () {
    menuOverlay.classList.add('active');
    document.body.classList.add('no-scroll');
  });

  // FERMER AVEC CROIX
  menuClose.addEventListener('click', function () {
    menuOverlay.classList.remove('active');
    document.body.classList.remove('no-scroll');
  });

  // FERMER EN CLIQUANT SUR UN LIEN
  menuLinks.forEach(link => {
    link.addEventListener('click', function () {
      menuOverlay.classList.remove('active');
      document.body.classList.remove('no-scroll');
    });
  });

});