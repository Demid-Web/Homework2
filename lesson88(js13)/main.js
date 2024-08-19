const element = document.querySelector('.firstBlock')
let isBlue = false
element.addEventListener('click', () => {
    if(isBlue){
        element.style.backgroundColor = 'blue'
        isBlue = false
    } else{
        element.style.backgroundColor = 'pink'
        isBlue = true
    }
})

function reColor(){
    console.log('re-color')
}
element.addEventListener('click', reColor)