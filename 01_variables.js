const accountId = 1122
let accountEmail = "baberibrar@gmail.com"
var accountPassword = "123456"
let accountCity = "Lahore"
let accountState;

// console.log(typeof accountEmail);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

// accountEmail = "baber@gmail.com"
// accountPassword = "119900"
// accountCity = "Karachi"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])