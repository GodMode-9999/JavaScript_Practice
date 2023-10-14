const accountId = 123456
let accountEmail = 'rathodvikas250@gmail.com' 
var accountPassword = 'vikas@123'
accountCity = 'vapi'
let accountState ;

// accountId = 3 ;  not allowed 

console.log(accountId)

console.table([accountId , accountEmail , accountPassword , accountCity , accountState]) 

/* 
Prefer not to use var because of issue in block scope and functional scope */