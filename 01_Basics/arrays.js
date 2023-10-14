const myArr = [1,2,3,4,5,6,7,8] 
// console.log(myArr); 

let find = 4

// console.log(myArr.length);

// methods of array 
// myArr.push(100)  // add a element at last 
// console.log(myArr);
// myArr.pop() // it does'nt take any parameter and remove last element 

// myArr.unshift(9) // takes parameter and add that para to starting index
// myArr.shift()  // does'nt take any para and remove starting element
// console.log(myArr); 
// console.log(myArr.includes(4)) // find the elements in array and return boolean values true/false
// console.log(myArr.indexOf(99))
  /* find the index given para if element is present then return the index else return -1 */

const myArr1 = [0,1,2,3,4,5] 
console.log("Original" , myArr1); 

const myn1 = myArr1.slice(1,3)
console.log("A" , myn1);
console.log(myArr1);

const myn2 = myArr1.splice(1,3) 
console.log("B", myn2); 
console.log(myArr1);           // splice method effect the original array



