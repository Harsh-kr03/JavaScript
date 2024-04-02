https://www.w3schools.com/js/js_string_methods.asp


const name = "harsh"
const place = "collage"

console.log(name + 1 + "javascript"); // this is old method

// now to concatenate we use modern syntex

console.log(`my name is ${name} and i am in ${place}`); //modern syntex     

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
const newString = new String('anything');

// we can use many in-built method(function) in string

console.log(newString.length);
console.log(newString.toUpperCase());

console.log(newString.charAt(2)); // char at 2nd index
console.log(newString.indexOf('t'));  // index of t

// remove extra space 

const value = " xyz  "
console.log(value.trim());

//substring

const newString2 = newString.substring(0, 4)
console.log(newString2);

const anotherString = newString.slice(-8, 4)
console.log(anotherString);

//replace

const email = "abcd@12344"
console.log(email.replace('@', '#'));

// any string is present or not ?

console.log(email.includes('123'));

// want to convert the string into string of array from any spacific char

const arrayString = gameName.split('-');
console.log(arrayString);















