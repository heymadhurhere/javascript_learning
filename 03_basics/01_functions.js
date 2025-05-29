function myName() {
console.log("M");
console.log("A");
console.log("D");
console.log("H");
console.log("U");
console.log("R");
}

myName() // without () it is only the reference to the function

function addTwoNumbers(number1, number2) {
    console.log(number1 + number2);
}

const res = addTwoNumbers(3, 4) // nothing gets stored in the result as function does not return anything

function addTwoNumbers1(number1, number2) {
    let res = number1 + number2;
    return res;
}

const ans = addTwoNumbers1(5, 3); // sum gets stored int he ans as function returns the sum
console.log(ans);

function loginUserMessage(username = "sam") { // sam is the worst case value of username if any username is not passed in
    if (username === undefined) {
        console.log("Please enter a username");
        return
        
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Moltu")); // if anything is not passed in as argument, the result comes out to be as undefined and not null

/****** SHOPPING CART *****/ // when numbers gets getting added and we do not know how many numbers have to be added
function calculateCartPrice(...num1) { // ... is the rest operator and helps us to pass multiple values in the function
    return num1;
}

console.log(calculateCartPrice(2,4,5,6));

const user = {
    username: "Madhur",
    price: 999
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject(user); // way to handle objects using function
handleObject({
    username: "anand",
    price: 500
}) // another way to handle objects

const newArr = [2,4,5,8,9,7]

function returnSecondVal(arr) {
    return arr[1]
}

console.log(returnSecondVal(newArr))
console.log(returnSecondVal([5,78,9,5])); // can also pass array like this