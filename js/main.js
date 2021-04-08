const swiper = new Swiper('.channel-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 6,
    spaceBetween: 40,

    // Navigation arrows
    navigation: {
      nextEl: '.channel-button-next',
      prevEl: '.channel-button-prev',
    },
});

const swiperRec = new Swiper('.channel-slider-rec', {
    // Optional parameters
    loop: true,
    slidesPerView: 3,
    spaceBetween: 40,
    // Navigation arrows
    navigation: {
      nextEl: '.channel-rec-button-next',
      prevEl: '.channel-rec-button-prev',
    },
});

const swiperFood = new Swiper('.channel-slider-food', {
    // Optional parameters
    loop: true,
    slidesPerView: 6,
    spaceBetween: 40,
    // Navigation arrows
    navigation: {
      nextEl: '.channel-food-button-next',
      prevEl: '.channel-food-button-prev',
    },
});
