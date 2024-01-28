const purple = document.createElement('span')
purple.className = "button"
purple.id = "purple"
purple.style.backgroundColor = "purple"
document.querySelector('.canvas').append(purple)

purple.style.position = "absolute"
purple.style.bottom = "15rem"
purple.style.left = "20rem"

const body = document.querySelector("body")
const buttons = document.querySelectorAll('.button')

buttons.forEach((button) => {
  button.addEventListener('click',function(e){
    console.log(e);
    console.log(e.target)

    /*with switch*/
    // switch (e.target.id) {
    //     case "grey":
    //         body.style.backgroundColor = e.target.id;
    //         break;
    //     case "white":
    //         body.style.backgroundColor = e.target.id;
    //         break;
    //     case "blue":
    //         body.style.backgroundColor = e.target.id;
    //         break;
    //     case "yellow":
    //         body.style.backgroundColor = e.target.id;
    //         break;
    
    //     default:
    //         break;
    // }

    /*with if */
    // if (e.target.id === "grey") {
    //     body.style.backgroundColor = e.target.id
    // }
    // if (e.target.id === "white") {
    //     body.style.backgroundColor = e.target.id
    // }
    // if (e.target.id === "blue") {
    //     body.style.backgroundColor = e.target.id
    // }
    // if (e.target.id === "yellow") {
    //     body.style.backgroundColor = e.target.id
    // }
    // if (e.target.id === "purple") {
    //     body.style.backgroundColor = e.target.id
    // }

    /* without any control flow */
    body.style.backgroundColor = button.id;
  })
})
