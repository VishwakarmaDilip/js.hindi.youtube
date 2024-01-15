/* {} ====> this means scope but not in object */

// var c = 300
let a = 300
if(true) {
    let a = 10
    const b = 20 
    // console.log("INNER: ", a);
}


// console.log(a);
// console.log(b);
// console.log(c);


function one() {
    const username = "Dilip"

    function two(){
        const website = "Youtube"
        console.log(username);
    }
    console.log(website)

    two()
}


// one()

if(true) {
    const username = "Dilip"
    if(username === "Dilip") {
        const website = " Youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


//  +++++++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++++++++

console.log(addone(5))

function addone(num) {
    return num + 1
}


addTwo(5) //error

const addTwo = function(num) {   //different way to write function
    return num + 2
    
}
