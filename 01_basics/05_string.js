const name = "Dilip"
const repoCount = 50

console.log(name + repoCount + " value");

//better way of code 

//string interpolation
    // console.log(`hello my name is ${} and my repo count is ${}`);

console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`);

const gameName = new String('Dilip-vish-com')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(name[0]);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(1)); //to find letter at position
console.log(gameName.indexOf('D')); //to find position of latter

const newString = gameName.substring(0,4)// you can't use negative value in substring
console.log(newString);

const anotherString = gameName.slice(-10, 4) //(-) means reverse start
console.log(anotherString);

const newStringOne = "   Dilip   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://dilip.com/dilip%20vishwakarma";

console.log(url.replace('%20','-'))

console.log(url.includes('jitesh'));

console.log(gameName.split("-"));