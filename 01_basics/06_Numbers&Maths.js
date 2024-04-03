const score = 100
console.log(score);

let newScore = new Number(40); //Number as non-primitive(dynamically allocation)

// let num = newScore
// num = 200
// console.log(newScore);

// do not create Number object

//Methods of Number :-

// console.log(score.toString().length); // after conerting to string we use all string methods to it

// console.log(score.toFixed(3)); // numbers after decimal (returns string)

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(5));

const hundreds = 100000000 // maximum 15 digits tak ka number hi lega
console.log(hundreds.toLocaleString('en-IN'));  // wants to make i any big nuberinto readable form 10000 => 10,000




//++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++

console.log(Math); // ye bhi ek object hai jiske andar bahut sari properties hai

// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

//Important :-


console.log(Math.random()); // generates random number b/w 0-1

// if we want random number atleat 1 digit before the decimal

console.log(Math.random() * 10); 

// number should be always >= 1 and only integer

console.log(Math.floor(Math.random() * 10 )+ 1);

let min = 10;
let max = 30;
//want generate numbers b/w min and max value

console.log(Math.floor(Math.random() * (max - min + 1) + min));

