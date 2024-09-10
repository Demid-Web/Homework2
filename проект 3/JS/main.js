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
burgerMenu.addEventListener('keydown', event=>{
    if(event.code === 'Escape' && body.classList.contains('body-opened-burger')){
        body.classList.remove('body-opened-burger')
        body.classList.remove('body-dont-scrolling')
    }
})
for(i = 0; i < headerLink.length; i++){
    headerLink[i].addEventListener('click', ()=> {
        if(body.classList.contains('body-opened-burger')){
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

