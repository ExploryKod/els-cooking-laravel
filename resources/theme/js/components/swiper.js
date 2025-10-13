export const getSwiperJs = () => {
    const elsProjectSlides = document.querySelectorAll('.els-swiper-projects .swiper-slide')
    const slideNumber = elsProjectSlides.length;

    // Don't initialize if no slides found
    if (slideNumber === 0) {
        console.warn('No swiper slides found. Waiting for content to load...');
        return null;
    }

    console.log('Initializing Swiper with', slideNumber, 'slides');

    // Determine if we should enable loop mode
    // Loop mode needs at least double the number of slidesPerView
    const maxSlidesPerView = 3;
    const enableLoop = slideNumber >= (maxSlidesPerView * 2);

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
        loop: enableLoop,
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

    return swiper;
}
