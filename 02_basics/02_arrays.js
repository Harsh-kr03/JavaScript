const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] // this is spread method used as same as concat but this is the preffered way

console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // extract all the arrays and store in a single array(infinity: depth till extract)
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting
// gives empty array [] bcz to convert we need to specify the which value to be converted either key or value;



let score1 = 100
let score2 = 200
let score3 = 300

//converts variables into array
console.log(Array.of(score1, score2, score3));
let scoreArr = Array.of(score1,score2,score3);
console.log(scoreArr);


