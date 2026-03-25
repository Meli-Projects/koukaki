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

    bigCloud.style.transform = `translateX(${translateValue}px)`;
    littleCloud.style.transform = `translateX(${translateValue}px)`;
  }

  window.addEventListener("scroll", moveClouds);
  window.addEventListener("resize", moveClouds);

  moveClouds();
});