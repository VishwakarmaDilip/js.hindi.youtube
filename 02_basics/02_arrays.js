const marvel_heros = ["Thor", "Ironman", "Spiderman"];
const DC_heros = ["Superman", "Flash", "Batman"]

// marvel_heros.push(DC_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

//concat operator
// const allHeros = marvel_heros.concat(DC_heros)
// console.log(allHeros);

//spred operator
const allNewHeros = [...marvel_heros, ...DC_heros] //easy way
// console.log(allNewHeros);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// const new_another_array = another_array.flat(Infinity)
// console.log(another_array);
// console.log(new_another_array);


console.log(Array.isArray("dilip"));
console.log(Array.from("dilip"));
console.log(Array.from({name:"dilip"})); //interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));