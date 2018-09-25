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
/*
Tagged templates represt an advanced form of template strings as they can tell the difference between literals and values resulting form an operations
or a JavaScript expression, as shown earlier. In other words, tagged templates allow us to take 
different actions on literals and values.
*/

function namesToUpper(stings, ...values) {
	/*return stings.reduce(function test(a, b, c) {
		`return ${a} ${values[c - 1].toUpperCase()} ${b}`;
	})*/
		console.log(stings);
		console.log(values); 
}

var fName = "Gabriel";
var mName = "Alejandro";
var lName = "Canpa";
console.log(namesToUpper `First Name: ${fName}, Middle Name: ${mName}, Last Name: ${lName}`);


function namesToUpper(strings, ...values) {
	return strings.reduce(function test(a, b, c) {
		return `${a} ${values[c - 1].toUpperCase()}${b}`;
	})
}
var fName = "Gabriel";
var mName = "Alejandro";
var lName = "Cánepa";
console.log(namesToUpper `First Name: ${fName}, Middle Name:
${mName}, Last Name: ${lName}`);


/*
In simple words, you can use tagged templates in any situation where you need to
follow different courses of action on literals and associated values. For example, you
can use tagged templates to sanitize input from a form. In this situation you certainly
want to prevent special characters from being passed to the backend application in
order to avoid a SQL injection or a cross-side scripting (XSS) attack.
*/

// Arrow functions
/*
With arrow functions, you can obtain the same functionality as regular function
expressions but with shorter syntax. Additionally, arrow functions inherit the this value from the enclosing context so that you don't to use
and extra variable to pass an object form a parent funciton to an enclosed method.
To replace a regular function with an arrow method,enclose its parameters inside parenthese and append the arrow notation (=>) folllowed by the JavaScript extention inside curly brackets
*/

function namesToUpper(strings, ...values) {
	return strings.reduce((a, b, c) => {
		return `${a}${values[c - 1].toUpperCase()}${b}`;
	})
}
var fName = "Gabriel";
var mName = "Alejandro";
var lName = "Cánepa";
console.log(namesToUpper `First Name: ${fName}, Middle Name: ${mName}, Last Name: ${lName}`);


function Counter() {
	this.value = 0;
	var timer = setInterval( () => {
		this.value++;
		console.log(this.value);
		if (this.value >= 5) {
			clearInterval(timer);
		}
	}, 1000);
}
var p = new Counter();

// Using arrow functions, this.value inside setInterval still refers to the Counter object.
// Without arrow functions, this would switch to the global window object.
function Counter() {
	this.value = 0;
	var timer = setTimeout(function test() {
		console.log(this);
	}, 1000);
}
var p = new Counter();

// Classes 
/*
Folks who are familiar with Object-Oriented Programming (OOP) have welcomed
this feature with open arms. Similarly to other programming languages, with
ECMAScript 6, you can now create objects with properties and methods using the 
class keyword. This results, again, in code that is cleaner and esier to maintain. 
ECMAScript 6 does this without creaing a new OOP model in the langues, but uses a 
cleaner syntax to handle object and intheritance.
*/


// ES5
var individual = function Person (fName, lName, profession, age) {
	// Properties
	this.fName = fName;
	this.lName = lName;
	this.profession = profession;
	this.age = age;
	// Methods
	this.saySometing = function (msg) {
		console.log(msg + " I am a " + this.age + "-yr. old " + 
		this.profession);
	};
}
var me = new individual("Gabriel", "Cánepa", "developer", "22");
console.log(me);
me.saySometing("What's up?");


// ES6
class Person {
	constructor(fName, lName, profession, age) {
		// Properties
		this.fName = fName;
		this.lName = lName;
		this.profession = profession;
		this.age = age;
	}
	// Methods
	saySometing() {
		return `What's up? I am a ${this.age}-yr. old ${this.profession}`;
	}
}

var me = new Person("Gabriel", "Cánepa", "developer", "33", 2500);
console.log(me.saySometing());

/*
Anoter advantage that is associated with using classes to create and instantiate 
objects is that we can also inherite from parent classes that may have some more 
generic mehods and properties. Building upon our previous example,let's add a parent 
(also known as base) class named Employee with two generic properties
(hireDate and monthlySalary)
*/ 
class Employee {
	constructor(hireDate, monthlySalary) {
		this.hireDate = hireDate;
		this.monthlySalary = monthlySalary;
	}
	getMonthlySalary() {
		return `I make ${this.monthlySalary} each month.`
	}
}
class Person extends Employee {
	constructor(fName, lName, profession, age, hireDate, monthlySalary) {
		// Properties
		super(hireDate, monthlySalary);
		this.fName = fName;
		this.lName = lName;
		this.profession = profession;
		this.age = age;
	}
	// Methods 
	saySometing() {
		return `What's up? I am a ${this.age}-yr. old ${this.profession} and was hired on ${this.hireDate}.`;
	}
}

var me = new Person("Gabriel", "Cánepa", "developer", "33", "2016-03-22", 1575);
console.log(me.saySometing());
console.log(me.getMonthlySalary());

// The let keyword
/*
Similarly to var, the let keyword can be used to instantiate new variables. However,
when the let keyword is used inside a block within a funciton, the new varibale is only available inside such a blck.
*/

guessName();
function guessName() {
	var sayName = "John Doe";
	if (sayName === "John Doe") {
		let msg = `the name is ${sayName}`
		console.log(`Inside the block ${msg}.`)
	}
	console.log(`Outsite the block ${msg}.`)
}

/*
This is shown in the following figure. Note how the use of the variable that is declared
through let is defined as valid within the if block where it is instantiated, whereas
outside it is not declared:
*/

/*
ou can use the let keyword to create variables whose scope is
the current block, and var when the desired scope is a function.
Outside a code block, var and let can be used interchangeably.
*/