// Immediately Invoked Function Expressions (IIFE)

(function chai() {
    // named IIFE
    console.log(`DB connected`);
    
})();

( function orCode()  {
    console.log(`DB CONNECTED TWO`);
    
}) (); // ; must be given so as to end the previous function

( (name) => {
    // unnamed IIFE
    console.log(`DB CONNECTED THREE ${name}`);
    
}) ('madhur');