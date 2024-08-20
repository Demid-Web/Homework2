/*const btns = document.querySelectorAll('.btn')

btns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        console.log(index+1)
    })
})*/

const btn = document.querySelector('.btn')

btn.addEventListener('click', (event) => {
    event.target.classList.toggle('red')
})
