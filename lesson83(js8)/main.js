/*const user = {
    name : 'Demid',
    age : 16,
    hobby : 'Guitar',
    sayHello(name){
        console.log(`Hello ${name}`)
    }
}
user.sayHello('Demid')*/

const ordinaryUsers = 0
const users = [
    {
        name : 'Ivan',
        age : 43,
        isAdmin : false
    },
    {
        name : 'Radion',
        age : 56,
        isAdmin : true
    },
    {
        name : 'Dasha',
        age : 33,
        isAdmin : false
    },
    {
        name : 'Sergay',
        age : 45,
        isAdmin : true
    },
    {
        name : 'Ivan',
        age : 43,
        isAdmin : false
    },
    {
        name : 'Radion',
        age : 56,
        isAdmin : true
    },
    {
        name : 'Dasha',
        age : 33,
        isAdmin : false
    },
    {
        name : 'Sergay',
        age : 45,
        isAdmin : false
    }
]
function searchOrdinaryUsers(array, auxiliaryVariable){
    for(i = 0; i < array.length; i++){
        if(array[i].isAdmin == false){
            auxiliaryVariable++
        }
    }
    return auxiliaryVariable
}
const result = searchOrdinaryUsers(users, ordinaryUsers)
console.log(`There are ${result} ordinary users in the database`)

