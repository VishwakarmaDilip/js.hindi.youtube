//singleton
// Object.create

// object literals\

const mySym = Symbol("key1")

const jsUser = {
    // key: value
    name: "Dilip",
    "full name": "Dilip Vishwakarma",
    [mySym]: "mykey1",
    age: 22,
    location: "Mumbai",
    email: "dilip@gmail.com",
    isLoggedIn: false,
    lastLaggedInDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym])

// jsUser.email = "dilip@google.com"
// Object.freeze(jsUser)                    // to freez object 
jsUser.email = "2106dilip@gmail.com"


// console.log(jsUser)

jsUser.greetig = function(){
    console.log("Hello JS user");
}
jsUser.greetigTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(jsUser.greetig())
console.log(jsUser.greetigTwo())