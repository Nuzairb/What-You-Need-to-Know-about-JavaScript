// Getting Started with ECMAScript 6
/* The latest specification of JavaScript is ECMAScript 6, which has 
new features and functionality.
*/

// Template strings
/*
Template strings introduce several features that solve limitations in regular JavaScript strings.
For example consider the case of a multiline string in ES5 which produce SyntaxError: unterminated 
string literal message when you execute it 
*/
// var greeting = "Hi! This 
// is a wonderful day, is't it?"; // SyntaxError;
// ES5 use backslashes as follows:
var greeting = "Hi! This \ 
is a wonderful day, is't it?";

// ES6 write much clearner code:
var greeting = `Hi! This
is a wonderful day, is't it?`; // ->> best way to write multitline string

/*
Another adventage of template strings consits of string interpolation (also known as string substitution).
What you would do with one or more string concatenations and several objects with property methods, you can do more
easily with template stings and substitution.
*/

var peron = {name: "Gabriel", age: "33", profession: "developer", saySometing: function msg(d) {return "This is my message: " + d}};
// With ECMAScript 5
console.log("My name is " + peron.name + " and I'm a " + peron.profession + ". " + peron.saySometing("Happy Tuesday!"));
// With ECMAScript 6 
console.log(`My name is ${peron.name} and I'm a ${peron.profession}. ${peron.saySometing("Happy Tuesday!")}`);

/*
Using Template strings, you can enclose any JavaScript
expression inside ${}, not just variables. For example, if
you replace ${person.name} with ${person.name.
toUpperCase()}, the person's name will be printed
in uppercase, as indicated by the toUpperCase()
JavaScript function.
*/

// Tagged templates