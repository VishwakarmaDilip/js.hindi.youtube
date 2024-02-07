// generate a random color

const randomColor = function () {
    const hex = '0123456ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 10)];
    }
    return color
}
console.log(randomColor())

/*Approach 1*/
startChangingColor = () => {
    document.querySelector('body').style.backgroundColor = randomColor()
}

let start
document.querySelector('#start').addEventListener('click', () => {
    if (start == null){
        start = setInterval(startChangingColor, 1000)
    }
}, false)

document.querySelector('#stop').addEventListener('click', () => {
    clearInterval(start)
    start = null
}, false)



/*Approach 2*/
// let start;
// const startChangingColor = () => {
//     if (!start){
//         start = setInterval(changeBgColor, 1000)
//     }

//     function changeBgColor() {
//         document.querySelector('body').style.backgroundColor = randomColor()
//     }
// }

// const stopChangingColor = () => {
//     clearInterval(start)
//     start = null
// }

// document.querySelector('#start').addEventListener('click',startChangingColor);

// document.querySelector('#stop').addEventListener('click',stopChangingColor);