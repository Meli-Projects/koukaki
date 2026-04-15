document.addEventListener('DOMContentLoaded', function () {

const swiper = new Swiper('.characters-swiper', {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: false,
      slidesPerView: "3",
      spaceBetween: 30, 
      loop: true, 
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 1,
        slideShadows: false,
      },
    });
});