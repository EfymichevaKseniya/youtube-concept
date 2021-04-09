const swiper = new Swiper('.channel-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      1900: {
        slidesPerView: 6
      },
      1600: {
        slidesPerView: 5
      },
      1300: {
        slidesPerView: 4
      },
      1100: {
        slidesPerView: 3
      },
      760: {
        slidesPerView: 2
      },

    },

    // Navigation arrows
    navigation: {
      nextEl: '.channel-button-next',
      prevEl: '.channel-button-prev',
    },
});

const swiperRec = new Swiper('.channel-slider-rec', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
      1600: {
        slidesPerView: 3
      },
      1100: {
        slidesPerView: 2
      },
    },
    // Navigation arrows
    navigation: {
      nextEl: '.channel-rec-button-next',
      prevEl: '.channel-rec-button-prev',
    },
});

const swiperFood = new Swiper('.channel-slider-food', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      1900: {
        slidesPerView: 6
      },
      1600: {
        slidesPerView: 5
      },
      1300: {
        slidesPerView: 4
      },
      1100: {
        slidesPerView: 3
      },
      760: {
        slidesPerView: 2
      },

    },
    // Navigation arrows
    navigation: {
      nextEl: '.channel-food-button-next',
      prevEl: '.channel-food-button-prev',
    },
});

const searchBtn = document.querySelector('.mobile-search');
const mobileSearch = document.querySelector('.input-group');

searchBtn.addEventListener('click', () => {
  mobileSearch.classList.toggle('is-open');
});

if(document.documentElement.scrollWidth <= 640) {
  swiper.destroy();
  swiperRec.destroy();
  swiperFood.destroy();
}