const tabControls = document.querySelector('.programm__tabs')
tabControls.addEventListener('click', switchTab)
function switchTab(event) {
    const tabControl = event.target.closest('.tab__control')
    if (!tabControl) return
    event.preventDefault()
    if (tabControl.classList.contains('tab__control--focus')) return
    const tabID = tabControl.getAttribute('id')
    const tabContent = document.querySelector(tabID)
    const tabLink = document.querySelector('.tab__control--focus')
    const tabShowContent = document.querySelector('.tab__info--show')
    if (tabLink) {
        tabLink.classList.remove('tab__control--focus')
    }
    if (tabShowContent) {
        tabShowContent.classList.remove('tab__info--show')
    }
    tabControl.classList.add('tab__control--focus')
    tabContent.classList.add('tab__info--show')
}




const accordian = document.querySelectorAll('.accordian')
for (i = 0; i < accordian.length; i++) {
    accordian[i].addEventListener('click', accordianContentShow)
}
function accordianContentShow(event) {
    const accordianControl = event.target.closest('.accordian__list-item')
    const accordianContent = accordianControl.children[1]
    console.log(accordianContent)
    if (!accordianControl) return
    accordianControl.classList.toggle('accordian__control--focus')
    accordianContent.classList.toggle('accordian__content--show')
    if (accordianContent.classList.contains('accordian__content--show')) {
        accordianContent.style.maxHeight = accordianContent.scrollHeight + 'px'
    } else {
        accordianContent.style.maxHeight = null
    }
}

const swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
});