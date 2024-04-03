
let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());

// console.log(typeof (myDate));

// declare date

// let myNewDate = new Date(2024, 4, 3)
// let myNewDate = new Date(2024, 4, 3, 2,5);
// let myNewDate = new Date("2024-9-24") // YY-MM-DD
let myNewDate = new Date("01-9-2002") //DD-MM-YY
// console.log(myNewDate.toLocaleString());


let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "narrow",
    month :"numeric"
    
})
// console.log(newDate.myLocaleString());