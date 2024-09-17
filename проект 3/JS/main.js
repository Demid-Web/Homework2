const burgerMenu = document.querySelector('.burger-menu')
const body = document.querySelector('.body')
const headerLink = document.querySelectorAll('.nav__item')
const modalButton = document.querySelector('.about__img-control')
const modal = document.querySelector('.modal-window')
const cansel = document.querySelector('.cansel')
burgerMenu.addEventListener('click', event => {
    body.classList.toggle('body-opened-burger')
    body.classList.toggle('body-dont-scrolling')
    event.preventDefault()
})
burgerMenu.addEventListener('keydown', event => {
    if (event.code === 'Escape' && body.classList.contains('body-opened-burger')) {
        body.classList.remove('body-opened-burger')
        body.classList.remove('body-dont-scrolling')
    }
})
for (i = 0; i < headerLink.length; i++) {
    headerLink[i].addEventListener('click', () => {
        if (body.classList.contains('body-opened-burger')) {
            body.classList.remove('body-opened-burger')
            body.classList.remove('body-dont-scrolling')
        }
    })
}
modalButton.addEventListener('click', () => {
    modal.classList.add('modal-window--open')
    body.classList.toggle('body-dont-scrolling')
})
cansel.addEventListener('click', () => {
    modal.classList.remove('modal-window--open')
    body.classList.remove('body-dont-scrolling')
})

/*============================================*/

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
/*=========================================*/
/*const programmInner = document.querySelector('.programm__inner')
programmInner.addEventListener('click', tabs)
function tabs(event){
    const tabsInfo = event.target.closest('.tab__info')
    console.log(tabsInfo)
    tabsInfo.addEventListener('click', searchAccordian)
}
function searchAccordian(event){
    const accordian = event.target.closest('.accordian')
    console.log(accordian)
    accordian.addEventListener('click', accordianContentShow)
}
function accordianContentShow(event){
    const accordianControl = event.target.closest('.accordian__list-item')
    const accordianContent = accordianControl.children[1]
    console.log(accordianContent)
    if(!accordianControl) return
    accordianControl.classList.toggle('accordian__control--focus')
    accordianContent.classList.toggle('accordian__content--show')
}*/

const accordian = document.querySelectorAll('.accordian')
for(i = 0; i < accordian.length; i++){
    accordian[i].addEventListener('click', accordianContentShow)
}
function accordianContentShow(event){
    const accordianControl = event.target.closest('.accordian__list-item')
    const accordianContent = accordianControl.children[1]
    console.log(accordianContent)
    if(!accordianControl) return
    accordianControl.classList.toggle('accordian__control--focus')
    accordianContent.classList.toggle('accordian__content--show')
}




/*const accordian = document.querySelector('.accordian')
    accordian.addEventListener('click', accordianContentShow)
function accordianContentShow(event){
    const accordianControl = event.target.closest('.accordian__list-item')
    const accordianContent = accordianControl.children[1]
    console.log(accordianContent)
    if(!accordianControl) return
    accordianControl.classList.toggle('accordian__control--focus')
    accordianContent.classList.toggle('accordian__content--show')
}*/




