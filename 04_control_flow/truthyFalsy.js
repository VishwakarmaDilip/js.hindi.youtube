const userEmail = []

if (userEmail) {
    console.log("Got User Email");
}else{
    console.log("Don't have User Email");
}

/* falsy values 
    1> false
    2> 0
    3> -0
    4> BigInt 0n
    5> ""
    6> null
    7> undefined
    8> NaN
other than these values, all values are truthy values
some surprises of truthy values
    1> "0"
    2> "false"
    3> " "
    4> []
    5> {}
    6> function () {}
*/

/* check empty array */

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

/* check empty Object */
// const emptyObj = {}

// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is Empty");
// }


/* Nullish Coalescing Operator (??): null & undefined */

let val1;
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);

/* Tarniary Operator (?)
    syntax
        condition ? trure statement: false statement
*/
const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("less than 80"): console.log("more than 80");

