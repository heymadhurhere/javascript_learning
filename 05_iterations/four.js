// iterating in objects

const myObject = {
    js : "Javascript",
    cpp : "C++",
    py : "Python",
    rb : "Ruby",
    swift : "Swift by apple"
}

for (const key in myObject) { // forin loop
    console.log(`${key} shortcut for ${myObject[key]}`);
    
}