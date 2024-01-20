/* for of loop 
["", "", ""]
[{}, {}, {}]

    object or array
    ( not js object here its mean kis chij pe loop lagana hai)
    for (const iterator of object) {  
        work
    }
*/

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

// const greetings = "Hello World!"
// for (const greet of greetings) {
   
//     console.log(`Each Char is ${greet}`)
// }

/*with continue */
// for (const greet of greetings) {
//     if (greet == " ") {
//         continue
//     }
//     console.log(`Each Char is ${greet}`)
// }


/* Map */

const map = new Map()
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("Fr", "France")
map.set("IN", "India")

// console.log(map);

for (const [key, value] of map) {
    console.log(key, ":-", value);
}

for (const key in map) {
    console.log(key);
}


const myObject = {
    game1 : "NFS",
    game2 : "Spiderman"
}

// for (const [key,value] of myObject) {
//     console.log(key, ':-', value);
// }