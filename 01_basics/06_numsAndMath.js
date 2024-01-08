const score = 400
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2)); // decimal value digit

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4))


const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));


//++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));// make only in positive value
// console.log(Math.round(4.6));// take roundof value
// console.log(Math.ceil(4.1)); // take high value
// console.log(Math.floor(4.9)); // take low value
// console.log(Math.min(4, 5, 8, 4, 12, 3)); // choose lowest value in array
// console.log(Math.max(4, 5, 8, 4, 12, 3)); // choose highest value in array

// console.log(Math.random());
// console.log(Math.random()*10);

// let n = Math.random()
// console.log(n)
// let m = (n * 10) + 1
// console.log(m)

// console.log((Math.random()*10)+ 1);
// console.log(Math.floor(Math.random()*10)+ 1);


const min = 10
const max = 20

// const rand = Math.random()
// console.log(rand);
// console.log(Math.floor(rand * (max - min + 1)+ min));

console.log(Math.floor(Math.random()*(max - min + 1) + min)); // to understand this line please uncomment line 43 to 45.