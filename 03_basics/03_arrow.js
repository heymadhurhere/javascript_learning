const user = {
    username: "madhur",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`); // this refers to the current context
        console.log(this);
        
    }
}

user.welcomeMessage()

user.username = "sam"
user.welcomeMessage()

console.log(this); // no current context here so output will be {} as the context is empty

const chai = () => { // arrow function
    let userName = "madhur"
    console.log(this);
    
}


const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(4,3));

const addnew = (num1, num2) =>  (num1 + num2); // immplicit return i.e. no need to write the 'return' keyword, will run as it is but must wrap inside ();

// explicit return -> return keyword used