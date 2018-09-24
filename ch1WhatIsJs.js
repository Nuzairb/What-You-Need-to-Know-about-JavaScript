// Chapter 1: What is JavScript?
/* JavScript is a very versatile language because it supports both object-oriented and 
procedural programming to bring interactivity to a Web page. On top of this, due
to its flexibility, it allowed developers to write several wellknown tools (also known libraries) that provide robust solutions with little extra effort. 
Under the hood, these libraries are a combination of
variable declarations, arithmetic, and conditional operators, iteration loops, functions,
and event responses.*/

// Variables, mathematical operations, and string concatenation

/*JavScript enforces some rules on variable naming. 
 For example, a valid variable name cannot start with a number (although numbers are allowed inside a variable name), 
 it cannot contain spaces, arthmetic, Boolean operations, or punctuation signs. Reserved keyword must avoid. 
 A variable can be decalared and given a value in two separate steps, which are displayed as follows:
*/

var myTeam;

myTeam = 'Chicago Bulls';  

var myTeam = 'Chicago Bulls';

// Mathematical expressions
3*4; // 12 
var firstNumber = 2;
var secondNumber = 4;
firstNumber + secondNumber // 6
var sum = firstNumber + secondNumber;
sum; // 6

var sumResult = 'The sum of ' + firstNumber + ' and ' + secondNumber + ' equals ' + sum;
sumResult; // "The sum of 2 and 4 equals 6"

/*
When building a string variable as the result of the concatenation of two or more
values, it is recommended that you be consistent with the use of single or double
quotes. Many JavaScript developers prefer to use double quotes to enclose string
values as this allows you to use single quotes within the variable without the need
to escape them.

While others prefer to use single quotes, the principle that should be followed is this:
if you need to use one form of quote in the string, you might want to use the other
one as the literal.
*/

var nickName1 = "I'm a programmer and my nickname is 'Geek' for that reason";
var nickName2 = 'I\'m a programmer and my nickname is \'Geek\' for that reason';
var nickName3 = 'I\'m a programmer and my nickname is "Geek" for that reason';

nickName1; // "I'm a programmer and my nickname is 'Geek' for that reason"
nickName2; // "I'm a programmer and my nickname is 'Geek' for that reason"
nickName3; // "I'm a programmer and my nickname is 'Geek' for that reason"


// Arrays and objects

/*
An array is a collectin of values (different type are allowed) that can be saved into 
a single variable. This structure must be enclosed within square brackets and each 
element is reference using a zero-based index notation.
*/

var rockBands = ['The Beatles', 'Rolling Stones', 'Pink Floyd'];

// variable can query the value of rockBands, as follows:
rockBands;

// retrive the value of a specific item in rockBands like:
rockBands[0]; // 'The Beatles'
rockBands[2]; // 'Pink Floyd'

// easil create an object varibale with properties using this approach,
// you cant think of an object as a thing. For example, let's create an
// object variable named dog with three properties: color , age , and breed , as follows:

var dog = {color: 'Brown', age: 4, bread: 'Boxser'};

dog;
dog.color; // 'Brown'
dog.age; // 4
dog.bread // 'Boxser'

/*
Properties cannot only be fixed values, but they alos be methods that represent
an action that is associated with the object. Using the dog object, let's redefine it and 
add a method property called bark:
*/

var dogBark = {color: 'white', age: 6, bread: 'Sharpred', bark: function() {console.log('Guau guau')}};
dogBark.age; // 6
dogBark.bark(); // Guau guau


// Conditionals and loops
// In JavaScript, you can build a condition test using the usual if...else block and the
// identity operator ( === ).
var myNumber = 4;
if (myNumber === 5) {
	console.log('The number is equal to five');
} else {
	console.log('The number is NOT equal to five');
} // The number is NOT equal to five

// for loop
for (var i = 0; i < rockBands.length; i++) {
	console.log('Band #' + i + ' is ' + rockBands[i]);
}   // Band #0 is The Beatles 
	// Band #1 is Rolling Stones	
	// Band #2 is Pink Floyd

// Another way of displaying the same information is using a do...while loop,
// which executes the indicated action as long as the condition in the while clause
// evaluates to true:

var i = 0;
do {
	console.log('Band #' + i + ' is ' + rockBands[i]);
	i++;
} while (i < rockBands.length);

/*
You will use conditionals and loops in your JavaScript programs when you need to
take decisions that are based on the values of variables and when you need to repeat
a similar action a given number of times, respectively. Objects will come in handy
when you need to define complex structures with properties and methods instead
of mere lists of items (for which you will want to use an array variable).
*/

// Functions

/*
A function declaration consists of the keyword function, followed by the name of the
function, a list of optional arguments to be passed to the function (if there are more
than one, they should be separated by commas), and a list of one or more JavaScript
statements enclosed in curly brackets.
*/

function sum(firstNumber, secondNumber) {
	var mySum = firstNumber + secondNumber;
	return 'The sum of ' + firstNumber + ' and ' + secondNumber + ' equals ' + mySum;
}

sum(2,4); // "The sum of 2 and 4 equals 6"
sum(8,11); // "The sum of 8 and 11 equals 19"
sum(-5,-9); // "The sum of -5 and -9 equals -14"

// Libraries
/*
In order to provide more complex functionality with little extra effort, you can
combine JavaScript statements and functions into a single file that is invoked in
a web page. These files use the .js (for JavaScript) extension, and they are called
libraries.
*/