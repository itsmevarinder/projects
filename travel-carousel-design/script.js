var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true
  },
  keyboard: {
    enabled: true
  },
  mousewheel: {
    thresholdDelta: 70
  },
  spaceBetween: 60,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});

document.querySelector(".swiper").addEventListener("mouseenter", function () {
  swiper.autoplay.stop();
});

document.querySelector(".swiper").addEventListener("mouseleave", function () {
  swiper.autoplay.start();
});
