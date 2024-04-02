//Classification of datatype in js on basis of how data is stored in the memeory ans how it is accessed i) primitive  ii)non-primitive(reference type)

//  Primitive


//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

// JS is a dynamically typed language. It automatically get datatypes of variable during the runtime of the program

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);