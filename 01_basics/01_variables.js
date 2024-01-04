const accoountId = 144553
let accountEmail = "dilip@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur" //it work but don't use this methode
let accountState;
// accoountId = 2 //not allowed, because const values are non changeble

accountEmail = "pilid@gmail.com"
accountPassword = "54321"
accountCity = "Mumbai"




/* 
Prefer not to use var 
because of issue in block scope and functional scope
*/


console.log(accoountId);

console.table([accoountId, accountEmail, accountPassword, accountCity, accountState])
