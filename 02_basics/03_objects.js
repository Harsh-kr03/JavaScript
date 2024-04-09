// objects literals

const mySym = Symbol("myfavfile")

//objects will always have key value pair
const userOne = {
    mysym : "elephant", // here the reassignment of this variable(symbol) will change its datatype 
    name : "Harsh",
    email : "harsh@microsoft.com",
    isLoggedIn : false,
    age : 19
}

//access object
console.log(userOne.name); //1-way
console.log(userOne["name"]); //2-way here the access as key value pair [name of the key with datatype]

console.log(userOne["age"]); // see here key is of string so ["age"] not [age]

