// Ch5 JavaScript Cheat Sheet
// Reviewing the number object
/*Number.isNaN(value): This returns true if the value is of the Number type
and evaluates to NaN; otherwise, this is false. This should not be confused
with this isNaN global, which attempts to convert the value and test it */
Number.isNaN(3); //false
Number.isNaN("hi there"); //false
Number.isNaN(Math.sqrt(-1)); //false
Number.isNaN(0 / 0); //true

/*
Number.isInteger(): This return true if the argument is an interger; otherwise, this is false
*/
Number.isInteger(2); //true
Number.isInteger(3.5); //false
Number.isInteger("a"); //false
Number.isInteger(3500); //true