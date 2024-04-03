let myArr = [1,2,3,4,5,6]

let mixArr = ["harsh" , 1,5, true] // in JS array is resizeable and can have elements of different datatypes

let newArr = new Array(2, 4,96)

// console.log(mixArr[0]);

//Arrays methods :-

myArr.push(10);
myArr.push(11,12);
// console.log(myArr);
myArr.pop();
myArr.pop();


myArr.unshift(100); // add element at starting position
// console.log(myArr);
myArr.shift();
// console.log(myArr); // deletes the elements fron the start

// console.log(myArr.includes(6));
// console.log(myArr.indexOf(6));

const newarr = myArr.join()

// console.log(myArr);
// console.log(newarr); // converet array into string


//slice and splice

let anyArr = myArr.slice(1,5); // gives the elements of startIndex to finalIndex -1; 
console.log(anyArr); // 2, 3, 4, 5

console.log("original Array :" , myArr);

let myNewarr = myArr.splice(1,5); // it actually remove the elements of the given range from the original array and the changes also refelct in the original array 
console.log(myNewarr);
console.log(myArr);





