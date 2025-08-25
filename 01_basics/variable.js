const accountId = 893056;
let accountEmail = "naveen@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 3. // not allowed - you can't change a const

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


accountEmail = "nvn@gmail.com"
accountPassword = "8030"
accountCity = "madras"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);



