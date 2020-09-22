// IIFE (Immediately Invoked Function Expression) is a JavaScript function 
// that runs as soon as it is defined.

// The primary reason to use an IIFE is to obtain data privacy. 
// Because JavaScript’s var scopes variables to their containing function, 
// any variables declared within the IIFE cannot be accessed by the outside world.


// (function() {
//     console.log('triggered')
// }) ()

// --- same as ---

// (function() {
//     console.log('triggered')
// }()) 

// It is best practice to create IIFE's(anonymous/ghost functions) using the first method.


(() => {
    console.log('triggered')
})()

// This way is better