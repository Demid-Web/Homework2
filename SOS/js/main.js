const swiper = new Swiper('.header__swiper', {

    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
const burgerCell = document.querySelector('.burger__cell')
const burgerControll = document.querySelector('.burger__control')
const burger = document.querySelector('.burger__menu')
const body = document.querySelector('.body')
burgerCell.addEventListener('click', () => {
    burger.classList.toggle('burger__menu--active')
    body.classList.toggle('body--dont-scrolling')
    burgerControll.classList.toggle('burger__control--active')
})
const swiperAbout = new Swiper(".about-swiper", {
    effect: "cards",
    grabCursor: true,

    pagination: {
        el: ".swiper-pagination-about",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next-about",
        prevEl: ".swiper-button-prev-about",
    },
});