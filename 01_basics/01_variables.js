const accountId = 143242;
let accountEmail = "rmgunjal72@gmail.com"
var accountPassword = "535232"

//don't use var now, as javascript don't support block scope
accountCity = "Pune"

let accountState; 
// if you didn't assign then it shows undefined

//accountId = 2 // not allowed, you can't change constant

accountEmail = "rmgoogle.com"
accountPassword = "10000"
accountCity = "Mumbai"

console.table([accountId, accountEmail, accountPassword, accountState, accountCity])