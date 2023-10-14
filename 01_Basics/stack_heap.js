/*  memory concept in javascpit */

// Stack(Primitive)  Heap (Non-Primitive)
// In case of stack (primitive) we get copy of that 
// In case of Heap we get reference of that memory location 

// let youTubeChannel = 'vikas'
// console.log(youTubeChannel);
// let anotherName =  youTubeChannel
// console.log(anotherName); 
// anotherName = 'harshu'
// console.log("A" , anotherName);

const useOne = {
    email : "rathodvikas250@gmail.com" ,
    password : "one@123"
}
console.log(useOne);
const useTwo = useOne
console.log(useTwo)

useTwo.email = 'harshu@1234'
console.log(useTwo);



