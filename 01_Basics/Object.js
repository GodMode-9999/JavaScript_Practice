// objects ko declare karne ke 2 tarike hain ek literal ek constructor ki taraha 

// singleton  if object constructor se bana hain to ooh singleton object bana hain
// agar literal se declare karege to singlton nahi banega 

// object literals
// Object.create        yese banta hain singleton

const mySymbol = Symbol("Key1")

const JsUser = {            // keys are stored as string
    name : "vikas",
    "full name" : "vikas rathod" ,
    [mySymbol] : "myKey1" ,
    age : 18 ,
    location : 'vapi',
    email : "viky@123.com",
    isLoggedIn :  false ,
    lastLoginDays : ['Monday', 'Saturday']

}      

// console.log(JsUser.email);
// console.log(JsUser['email']);                
// console.log(JsUser["full name"]);         // I cannot write it this thing JsUser.full name ;
// console.log(JsUser[mySymbol]);        

// console.log(typeof mySymbol)

// console.log(JsUser);
// Object.freeze(JsUser) ;            // if you freexze the object you can not change it's value or modify the obj
JsUser.age = 25 


// JsUser.greeting = function() {
//     console.log(`Hello JsUser ${JsUser.name}`);
// }
// console.log(JsUser); 
// console.log(JsUser.greeting());

const tinderUser = new Object() 
const  tinderUser1 = {}        

console.log(tinderUser);

