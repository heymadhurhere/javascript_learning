const myArr = [0, 1, 3, 4, 5, true, "Madhur"] // can contain number, string, boolean values. Arrays in JS are resizable i.e. it is dynamic

const myHeroes = ["shaktiman", "naagraj"]
const newArray = new Array(1,2,3,4,5)

console.log(newArray[3])

/********ARRAY METHODS********/
myArr.push(6) // pushes element to back of array
myArr.push(7)
console.log(myArr)
myArr.pop() // removes the last value

myArr.unshift(9) // adds element to the beginning of the array

myArr.shift() // removes the first element of the array
console.log(myArr)

console.log(myArr.includes(9)) // check if element is present in the array

console.log(myArr.indexOf(3)) // gives -1 if element is not in array otherwise gives the index of the element in the array

const newArr = myArr.join() // join converts array to string

console.log(myArr)
console.log(typeof newArr)

/*******SLICE AND SPLICE *******/

console.log("A ", myArr)

const myn1 = myArr.slice(1, 3) // prints elements from 1st idx to 2nd idx, the last idx is not included

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3) // removes the portion of the array from the original array including the last idx
console.log("C ", myArr);
console.log(myn2); //ok
