/*function returnMeName(name){
    return name
}
const result = returnMeName('Demid')
console.log(`Hello ${result}`)*/

/*const numbers = [1, 2, 3, 4, 6, 11, 10, 13, 24]
function searchNum(array){
    for(i = 0; i < array.length; i++){
        if(array[i] > 10){
            console.log(array[i])
        }
    }
} 
searchNum(numbers)*/

function calculate(firstNum, secondNum, action){
    if(action === 'minus'){
        return firstNum - secondNum
    } else if(action === 'plus'){
        return firstNum + secondNum
    } else if(action === 'multiplication'){
        return firstNum * secondNum
    } else if(action === 'division'){
        return firstNum / secondNum
    }
}
console.log(calculate(50,100,'division'))