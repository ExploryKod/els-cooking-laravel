export const getSwiperJs = () => {
    const elsProjectSlides = document.querySelectorAll('.els-swiper-projects .swiper-slide')
    const slideNumber = elsProjectSlides.length;

    var swiper = new Swiper(".swiper", {
        effect: "coverflow",
        grabCursor: true,
        spaceBetween: 20,
        centeredSlides: false,
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 1,
          slideShadows: false
        },
        loop: true,
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        keyboard: {
          enabled: true
        },
        mousewheel: {
          thresholdDelta: 70
        },

        breakpoints: {
          576: {
            slidesPerView: 1
          },
          768: {
            slidesPerView: 1
          },
          992: {
           slidesPerView:  (slideNumber > 3) ? 2 : 1
          },
          1200: {
            slidesPerView: (slideNumber > 3) ? 2 : 1
          },
          1440 : {
            slidesPerView: (slideNumber > 3) ? 3 : 1
          },
          1700: {
            slidesPerView: (slideNumber > 3) ? 3 : 1
          }
        }
      });
}
