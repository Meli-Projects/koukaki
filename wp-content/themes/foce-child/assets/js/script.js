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
console.log("script.js chargé");