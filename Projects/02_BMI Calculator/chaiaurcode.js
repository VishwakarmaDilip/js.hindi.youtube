const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const result = document.querySelector("#results")
    console.log(height);
    console.log(weight);
    

    if (height === '' || height < 0 || isNaN(height)) {
        
        result.innerHTML = "Please Give Valid Height";
        result.style.color = "red"
    }else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = "Please Give Valid Weight";
        result.style.color = "red"
    }else {
        const bmi = (((weight) / (height*height))*10000).toFixed(2)
        result.innerHTML = `<span>BMI = ${bmi}</span>`;

        const comment = document.querySelector(".comment")
        // comment.style.
        if(bmi <= 18.6){
            comment.innerHTML = "You are Under Weight"
            comment.style.color = "red"
            comment.style.textShadow = "2px 2px #710e0e"
        }else if(bmi >= 18.6 && bmi <= 24.9){
            comment.innerHTML = "You are Healthy"
            comment.style.color = "#0ae50a"
            comment.style.textShadow = "2px 2px #710e0e"
            comment.style.marginLeft = "70px"
        }else{
            comment.innerHTML = "You are Over Weight"
            comment.style.color = "red"
            comment.style.textShadow = "2px 2px #710e0e"
            comment.style.marginLeft = "35px"
        }
    }
})



/* without creating element in html file
const form = document.querySelector('form')

form.addEventListener('submit', (jama) => {
  jama.preventDefault();

  const unchai = parseInt(document.querySelector('#height').value)
  const vajan = parseInt(document.querySelector('#weight').value)
  const parinam = document.querySelector('#results')
  
  
  
  if (unchai === '' || unchai <= 0 || isNaN(unchai)) {
    parinam.innerHTML = 'Kripya Sahi Unchai Pradan Kare !'
    parinam.style.color = "red"
    parinam.style.fontSize = "20px"
  }else if (vajan === '' || vajan < 0 || isNaN(vajan)) {
    parinam.innerHTML = 'Kripya Sahi vajan Pradan Kare !'
    parinam.style.color = "red"
    parinam.style.fontSize = "20px"
  }else {
    const heightInMeter = unchai / 100
    const bmi = (vajan / (heightInMeter * heightInMeter)).toFixed(2)

    parinam.innerHTML = `<div>${bmi}</div>`
    const comment = document.createElement('div')
    
    if (bmi < 18.6 ) {
      parinam.appendChild(comment.appendChild(document.createTextNode("You are Underweight")))
      parinam.style.color = "red"
    }else if (bmi >= 18.6 && bmi <= 24.9 ) {
      parinam.appendChild(comment.appendChild(document.createTextNode("You are Healthy")))
      parinam.style.color = "green"
    }else {
      parinam.appendChild(comment.appendChild(document.createTextNode("You are Overweight")))
      parinam.style.color = "red"
    }
  }
})
*/