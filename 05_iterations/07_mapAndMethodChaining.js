/* map 
    obj./arr./variable.map( () => {} )
*/
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (ank) => ank + 10 )         //✅
// const newNums = myNumbers.map( (ank) => (ank + 10) )       //✅
// const newNums = myNumbers.map( (ank) => {ank + 10} )       //❌
// const newNums = myNumbers.map( (ank) => {return ank + 10} )//✅

// const newNums = []

// myNumbers.forEach( (ank) => {
//     if (ank > 0) {
//         newNums.push(ank + 10)
//     }
// } )

/* chaining */

const newNums = myNumbers
                .map( (ank) => ank * 10 )
                .map( (ank) => ank + 1 )
                .filter( (ank) => ank >= 40 )


console.log(newNums);