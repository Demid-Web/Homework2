const swiper = new Swiper('.swiper', {

    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});
const burgerControll = document.querySelector('.burger__control')
const burger = document.querySelector('.burger__menu')
const body = document.querySelector('.body')
burgerControll.addEventListener('click', () => {
    burger.classList.toggle('burger__menu--active')
    body.classList.toggle('body--dont-scrolling')
    burgerControll.classList.toggle('burger__control--active')
})