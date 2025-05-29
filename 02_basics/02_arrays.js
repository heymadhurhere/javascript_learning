const marvelHeros = ["thor", "ironMan", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//marvelHeros.push(dc_heros); // dc heroes treated as element on whole for marvelHeros
console.log(marvelHeros);

const all_heros = marvelHeros.concat(dc_heros) // now taken separately
console.log(all_heros); 

const all_new_heros = [...marvelHeros, ...dc_heros] // ... separates all the values and inserts it into the array separately
console.log(all_new_heros);

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const ans_array = anotherArray.flat(Infinity) // flattens the array to linear array. We can also pass the number as depth upto which we want to flatten the array. Infinity means to flat the array upto the end
console.log(ans_array);

console.log(Array.isArray("Madhur")); // returns true or false i.e. whether the given data is array or not
console.log(Array.from("Madhur")); // converts the given data to array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // converts the elements to array
