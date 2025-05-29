const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
    
}

const greetings = `Hello world`
for (const greet of greetings) {
    console.log(`Each char id ${greet}`);
    
}

// MAPS
const map = new Map() // holds key value pair
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")

map.set('IN', "India") // again India will not be printed as IN is already set to India
console.log(map);

for (const key of map) {
    console.log(key);
    
} // whole map will be printed in form of array here


for (const [key, value] of map) {
    console.log(key, value);
    
} // key and value will be printed separately here

const myObject = {
    'game1' : 'NFS',
    'game2' : "Spiderman"
}

// objects can't be iterated using for loops