const user = {
    username: "Dilip",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} ,  welcome to website`)
        console.log(this);
    }
}
/* "this" means current context( here means value)*/

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);  

// function chai(){
//     let username = "dilip"
//     console.log(this.username);
// }

// chai()

// const chai = function() {
//     let username = "dilip"
//     console.log(this.username);
// }

const chai = () => {
    let username = "dilip"
    console.log(this);
}

// chai()

// arrow function

/*explicite return*/

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

/* Implicit return */

// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({username: "DIlip"}) // return an object use paranthises (kosthak)

console.log(addTwo(3, 4))