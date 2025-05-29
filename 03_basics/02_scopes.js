

if (true) {
    let a = 10
    const b = 20
    var c = 30 // this var does not follow the scope and will return the value 30 even if it is under the if condition
}

// {} everything written inside it is block scope and written outside is global scope
// console.log(a);
// console.log(b);
console.log(c);

/***** NESTED SCOPE *****/
function one() {
    const userName = "Madhur"

    function two() { // function inside function can also be made
        const website = "youtube"
        console.log(userName)
    }
    //console.log(website); // scope of website is only upto function two, so it will not execute

    two()
    
}

one()

if (true) {
    const username = "madhur"
    if (username === "madhur") {
        const website = " youtube"
        console.log(username + website);
        
    }
    //console.log(website); // out of scope
    
}
//console.log(username); // out of scope


// +++++++++++ INTERESTING ++++++++++++
function adding(num) {
    return num + 1
}
console.log(adding(5))

addtwo(5) // function accesses before declaring, thus it will throw error
const addtwo = function(num) { // another way to make functions
    return num + 2
}

console.log(addtwo(5))