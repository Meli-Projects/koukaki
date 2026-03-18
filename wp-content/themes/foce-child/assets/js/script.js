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

  /* paralaxe */
  const logoWrapper = document.querySelector('.banner_logo_wrapper');
// On vérifie si présent + désactive sur tablette
if (logoWrapper && window.innerWidth > 768) {
  window.addEventListener('scroll', function () {
    let scrollY = window.scrollY;

    logoWrapper.style.transform = `translateY(${scrollY * 0.3}px)`;
  });
}


