const userId = 10;
let userEmail = "harsh@code.com"
var userCity = "jaipur"
userPassword = "124134"

let userState; // on  only declaration js gives undefined as output

// useId = 5  // not allowed bcz of const


userEmail = "abc@google.com"
userCity = "delhi"
userPassword = "1124"

console.log(userId); // can only print one thing at a time

console.table([userId, userEmail, userCity, userPassword, userState]);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

