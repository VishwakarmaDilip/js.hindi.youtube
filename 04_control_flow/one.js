/*control flow / logic flow

    if
        if(condition){
            scope
        }

        condition should be true

    comparision operator
       1> "<" (greater than)
       2> ">" (less tahn)
       3> "<=" (greater than and equals to)
       4> ">=" (less than and equals to)
       5> "==" (single equals to is asign value)
       6> "!=" (not equals to (eg., 3!=2))
       7> "===" (check type also)
       8> "!==" 
*/

// if (2 != 3){
//     console.log("Executed");
// }

// const temprature = 41

// if (temprature < 50) {
//     console.log("Temprature is less than 50");
// }else{
//     console.log("Temprature is More than 50");
// }

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`);

/* short hand notation */

const balance = 900

// if (balance > 500) console.log("test"); // implicit scope (should be in one line)

/* two line */
// if (balance >500) console.log("test"),
// console.log("test2"); // don't use this method 

/* multiple conditions */

// if (balance < 500) {
//     console.log("less than 500");
// }else if (balance < 750) {
//     console.log("less than 750");
// }else if (balance < 900) {
//     console.log("less than 900");
// }else {
//     console.log("less than 1100");   
// }

/* multiple statement in one condition */

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("Allow to buy Course");
}
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User Logged In");
}

