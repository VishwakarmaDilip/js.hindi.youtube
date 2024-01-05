/*
Primitive
    There are 7 types
        1> String
        2> Number
        3> Boolean
        4> Null
        5> Undefined
        6> Symbol (to make any value unique)
        7> BigInt
    Example
*/      const name = "Dilip"
        const score = 100
        const isLoggedIn = false
        const outsidetemp = null
        let userEmail;
         const id = Symbol('123')
        //or
        const anotherId = Symbol('123')
            console.log(id === anotherId)

        const bigNumber = 3421545655665455565n
/*
Refference (Non Primitive)
    types
        1> Array
        2> Objects
        3> Function
    Example
*/      const heros = ["shaktiman", "naagraj", "doga"];
        let myObj ={
            name : "Dilip",
            age :22,
        }
        const myFunction = function() {
            console.log("Helllo world");
        }


