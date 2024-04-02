// console.log(2 < 1);
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);

// console.log("02" < 1);

// Here js automaticallyy converted the data type int number
// BUT we should always do comparision between same datatype

console.log(null > 0);  // false
console.log(null == 0); //false bcz == treat null as undefined
console.log(null >= 0); // true (unpredictable result)
                           //    bcz <, >, <=, >= these operator  
                           //    treat the null as 0

console.log(undefined == 0);
console.log(undefined >= 0);
console.log(undefined < 0);

// yaha undefined ke sath koi bhi comparision operator use kar lo hamesha false hi dega


// strict check :- ===
 
// (===) :- check not only the values but also the datatypes  

console.log("2" === 2); // both the values are of different datatypes so they are not same