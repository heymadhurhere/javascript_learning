let myDate = new Date()
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toString())
console.log(myDate.toLocaleDateString())
console.log(typeof myDate) // date is a objetct in JS

let myCreatedDate = new Date(2025, 3, 12, 5, 3) // months get counted from 0
console.log(myCreatedDate.toLocaleString())

let myNewDate = new Date("2025-03-09") // if written under " " months start from 1
console.log(myNewDate.toLocaleString())

/******TIME STAMPS******/
let myTimeStamp = Date.now();
console.log(myTimeStamp)
console.log(myCreatedDate.getTime()); // time extracted from the date but the time is in ms

console.log(Math.floor(Date.now() / 1000)); // convert ms to seconds

let newDate = new Date()
console.log(newDate.getMonth()) // gives present month
console.log(newDate.getDay()) // gives present day