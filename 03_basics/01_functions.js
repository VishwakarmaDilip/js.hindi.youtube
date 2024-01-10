function sayMyName() {
    console.log("D");
    console.log("I");
    console.log("L");
    console.log("I");
    console.log("P");
}

// sayMyName()  // sayMyName[reference]()[exacution]


// function addTwoNumbers(number1,number2){ 
//     console.log(number1 + number2);
// }
/*function addTwoNumbers(parameters){ 
    console.log(parameters);
 }
*/

// addTwoNumbers(5,5)
// addTwoNumbers(5,"5")
// addTwoNumbers(5,"a")
// addTwoNumbers(5,null)
/*addTwoNumbers(arguments)*/

//make variable
// const result = addTwoNumbers(3,5)

// console.log("Result: ", result) // not work!!

function reAddTwoNumbers(number1, number2) {
    // let result = number1 + number2
    // return result
    //other way
    return number1 + number2
}

const result = reAddTwoNumbers(3, 5)
// console.log("Result: ", result)

function loginUserMessage(username = "Sam"){
    if (!username) {
        console.log("Please Enter Your Name");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Dilip"))
console.log(loginUserMessage("Dilip"))