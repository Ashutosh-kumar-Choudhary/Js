// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Ashutosh ')
// it is used to save the function from pollution of global scope
// when we write two iifee we have to write semicolon to terminate the iifee.