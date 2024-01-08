// arrays

const myArray = [0, 1, 2, 3, 4, 5];
const myHero = ["shaktimaan", "naagraj"];

const myArray2 = new Array(1, 2, 3, 4);
// console.log(myArray[1]);ṇ

// Array methods

// myArray.push(6)
// myArray.push(7)
// myArray.pop()
// myArray.pop()


// myArray.unshift(9)
// myArray.shift()

// console.log(myArray.includes(9))
// console.log(myArray.indexOf(3))

// const newArray = myArray.join() // convert to string

// console.log(myArray);
// console.log(newArray)


//sllice, splice

console.log("A", myArray);
const myn1 = myArray.slice(1,3)
console.log(myn1);

console.log("B", myArray);
const myn2 = myArray.splice(1,3)
console.log("C", myArray);

console.log(myn2)