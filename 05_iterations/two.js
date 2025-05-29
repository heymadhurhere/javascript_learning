
let index =0
while (index <= 10) {
    console.log(`Value of index is ${index}`);
    index += 2
}

let myArray = ['flash', 'superman', 'batman']

let arr = 0
while (arr < myArray.length) {
    console.log(`Value is ${myArray[arr]}`);
    arr++;
}

// while loop => first condition checked then operation is done
// do while loop => first operation is done then condition is checked

let score = 1

do {
    console.log(`Score is ${score}`);
    score++
} while(score <= 10)