const marvel_heroes = ['thor' , 'Ironman' ,'spiderman'] 
const dc_heroes = ['superman' , 'batman' , 'flash'] 

// marvel_heroes.push(dc_heroes) 

// const allHeroes = marvel_heroes.concat(dc_heroes)
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][2]);
// console.log(marvel_heroes[3][0]);
// console.log(allHeroes);

// const all_new_heroes = [...marvel_heroes , ...dc_heroes] 
// console.log(all_new_heroes);

const arr = [1,2,3,[4,5,6],7,[6,7,[4,5]]] 
const real_arr = arr.flat(Infinity) 
// console.log(real_arr);

// console.log(Array.isArray("vikas"));
// console.log(Array.from("vikas"))
// console.log(Array.from({name:"hitesh"})); 

let score1 = 100 
let score2 = 200
let score3 = 300 

console.log(Array.of(score1,score2,score3));
