let myDate = new Date()

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// console.log(myDate.getTimezoneOffset());

// console.log(typeof myDate);

// let myCreatedDate = new Date(2024,0,5)
// let myCreatedDate = new Date(2024,0,5,21,45)
// let myCreatedDate = new Date("2024-01-14")
let myCreatedDate = new Date("01-01-2024")
// console.log(myCreatedDate.toLocaleString());



let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()

console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDate());
console.log(newDate.getDay());

newDate = newDate.toLocaleString('default', {
    weekday: "long",
})
console.log(newDate)
