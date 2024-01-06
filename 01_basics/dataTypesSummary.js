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
// */      const name = "Dilip"
//         const score = 100
//         const isLoggedIn = false
//         const outsidetemp = null
//         let userEmail;
//          const id = Symbol('123')
//         //or
//         const anotherId = Symbol('123')
//             console.log(id === anotherId)

//         const bigNumber = 3421545655665455565n
/*
Refference (Non Primitive)
    types
        1> Array
        2> Objects
        3> Function
    Example
*/      //const heros = ["shaktiman", "naagraj", "doga"];
        // let myObj ={
        //     name : "Dilip",
        //     age :22,
        // }
        // const myFunction = function() {
        //     console.log("Helllo world");
        // }
        // console.log(myFunction());




//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/* 
Memory
    1> Stack
        use in primitive data type
        copy
    2>Heap
        use in non primitive data type
        reference
*/
// example
    // 1> stack
    let myYoutubeName = "just Nonsense Talk"
    let anathoreName = myYoutubeName

    anathoreName = "Cine Story"

    console.log(myYoutubeName);
    console.log(anathoreName);
    
    // 2> Heap
    let userOne = {
        email : "user@gmail.com",
        upi : "user@paytm",
    }

    let userTwo = userOne

    userTwo.email = "Dilip@gmail.com"

    console.log(userOne)
    console.log(userTwo)

