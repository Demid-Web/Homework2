const btn = document.querySelector('.btn')
const modal = document.querySelector('.modal')
const closeBtn = document.querySelector('.modal__btn-close')
const body = document.body
const closeModal = () => {
    modal.classList.remove('modal--opened')
    btn.classList.remove('btn--blur')
    body.classList.remove('body--dont-scrolling')
}
const openModal = () => {
    modal.classList.toggle('modal--opened')
    btn.classList.toggle('btn--blur')
    body.classList.toggle('body--dont-scrolling')
}
btn.addEventListener('click', openModal)
/*closeBtn.addEventListener('click', () => {
    modal.classList.remove('modal--opened')
    btn.classList.remove('btn--blur')
})*/
modal.addEventListener('click', (event) => {
    const target = event.target
    if (target && target.classList.contains('modal') || target.classList.contains('modal__btn-close')) {
        closeModal()
    }
})
document.addEventListener('keydown', event => {
    if(event.code === 'Escape' && modal.classList.contains('modal--opened')){
        closeModal()
    }
})
