// Primitive(stack)          Reference-type(heap)

let myName = "harsh"
let otherName = "xyz"

console.log(myName); // harsh
console.log(otherName); // xyz

otherName = "abc"
console.log(myName); // harsh
console.log(otherName); // abc , bcz a copy of harsh is assigned to other name so any changes in otherName does not changes the original value


let userOne = {
    email : "harsh@microsoft.com",
    id : 27904
}

let userTwo = userOne;

userTwo.email = "xyz@google.com"

console.log(userTwo.email);
console.log(userOne.email);

// Here changes in userTwo dirctly changes the original value bcz of the function,array,object these all are reference type 







