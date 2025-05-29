// singleton

// objects literals
Object.create // this is the constructor method of creating object where singleton object forms

const mySym = Symbol("key1")

const JsUser = {
    name: "Madhur",
    age: 22,
    [mySym]: "myKey1", // to use as symbol, must be kept in []
    location: "Patna",
    email: "anandmadhur@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Tuesday", "Thursday"]
} // this is literal method of creating object {} is the object
//both keys and values can be defined as per our choice in object. 'name' is the key and "Madhur" is the value
// system treats the keys as string

console.log(JsUser["age"]); // key must be in " "
console.log(JsUser[mySym]);
JsUser.email = "newemail.com" // changing the value of the key
Object.freeze(JsUser.email) // so that new changes is not implemented and the old value remains

JsUser.greeting =function() {
    console.log("Hello man");
    
}
JsUser.greeting2 = function() {
    console.log(`Hello man, ${this.name}`); // this refers to the properties of the object on which we are working
    
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());

