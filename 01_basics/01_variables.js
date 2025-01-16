const accountId = 144553
let accountEmail = "princeagrawal1013@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 2 // not allowed

accountEmail = "prince@prince.com"
accountPassword = "212122"
accountCity = "Bengaluru"

let accountState

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
