/* for 
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
*/
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best number");
    }
    // console.log(element);
}

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`inner loop value ${j} and inner loop ${i}`);
        // console.log(i + "*" + j + " = " + i*j); 
    }
}

let myArray = ["flash", "Batman", "Superman"]
// console.log(myArray.length);

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);  
}

/* break and continue */
    /* break */

// for (let i = 1; i <= 20; i++) {
//     if (i == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//     console.log(`Value of i is ${i}`);
    
// }

    /* continue */
for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log(`Detected 5`);
        continue
    }
    // console.log(`Value of i is ${i}`);
    
}