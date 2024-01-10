// const tinderUser = new Object()  //singelton object

const tinderUser = {}  // non singleton object

tinderUser.Id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

//object in object
const regularUser ={
    email: "some@google.com",
    fullname: {
        userfullname: {
            firstname: "Dilip",
            lastname: "Vishwakarma"
        }
    }
}
//acces values
// console.log(regularUser.fullname.userfullname.firstname);




const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign(obj1,obj2)
// const obj4 = Object.assign({},obj1,obj2,obj3)

//spredout methode
const obj4 = {...obj1,...obj2,...obj3}

// console.log(obj4)



const user = [
    {
        id: 1,
        email: "h@gmail.com",
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

user[1].email

console.log(tinderUser);
console.log(Object.keys(tinderUser)); // output value data type will be array
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged')); // to ask for property