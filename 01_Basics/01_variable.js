const accountId = 745867 
let accountEmail = "Raj@gmail.com"
var accountPassword = "4158587"
accountCity = "Mumabi"
//if someone tell us that he want to add account state but there is no default state then
let accountState;

/*we cannot change the const value for eg.
accountId = 4
prefer to not use var
Because od issue in block scope and functional scope
*/
console.log(accountId)
console.log(accountEmail);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
