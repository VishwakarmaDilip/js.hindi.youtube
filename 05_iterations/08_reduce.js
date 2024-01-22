/*Reduce
    // const array1 = [1, 2, 3, 4];

    // 0 + 1 + 2 + 3 + 4
    const initialValue = 0;
    const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
    );

    console.log(sumWithInitial);
    // Expected output: 10
*/


const mereAnk = [1, 2, 3];

/* function */
// const meraKul = mereAnk.reduce(function (acc, currVal) {
//     console.log(`acc: ${acc} and curr.Value:${currVal}`);
//     return acc + currVal
// },0 )

/* arrow function */
// const meraKul = mereAnk.reduce( (acc, currVal) => {
//     console.log(`acc: ${acc} and curr.Value:${currVal}`);
//     return acc + currVal
// },0)
const meraKul = mereAnk.reduce((acc, currVal) => acc + currVal, 0,)
// console.log(meraKul);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course ",
        price: 12999
    },
]

const totalprice = shoppingCart.reduce(
    (prar, utpad) => prar + utpad.price,
    0 
)

console.log(`Total Amount: ${totalprice.toLocaleString('en-IN')}`);