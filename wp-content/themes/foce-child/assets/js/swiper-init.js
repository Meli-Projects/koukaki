document.addEventListener('DOMContentLoaded', function () {

const swiper = new Swiper('.characters-swiper', {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: false,
      slidesPerView: "3",
      spaceBetween: 30, //ajout non fourni avec swiper
      loop: true, //ajout non fourni avec swiper
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 1,
        slideShadows: false,
      },
    });
});