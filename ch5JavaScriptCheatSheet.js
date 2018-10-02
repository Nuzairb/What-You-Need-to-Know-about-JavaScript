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

/*
Number.prototype.toFixed(n): This returns the number given by Number.
prototype in fixed - point notation with n number of decimal places.This
rounds up when the digit in the(n + 1) position is greater than or equal to 5:
*/

var a = 2.6742252;
a.toFixed(1); // "2.7"
a.toFixed(2); // "2.67"
a.toFixed(3); // "2.674"
a.toFixed(5); // "2.67423"

// Working with the strings
/*
•
String.prototype.length: This returns the length of the string that is
specified by String.prototype• String.prototype.charAt(value): This returns the character at the
index given by value• String.prototype.charCodeAt(value): This returns the Unicode
equivalent of the character found at the index given by value• String.prototype.includes(value): This returns true
if the value is
found inside another String.prototype;
otherwise, this is false• String.prototype.indexOf(value): This returns the index where the
first occurrence of the value is found(
    if it exists);
otherwise, this is - 1• String.prototype.lastIndexOf(): This returns the index where the
last occurrence of the value is found(
    if it exists);
otherwise, this is - 1• String.prototype.startsWith(value): This returns true
if a string
starts with the value• String.prototype.substring(value1, value2): This returns the
substring found between two indexes(value1 and value2 where value2 > value1)• String.prototype.toLowerCase(): This converts the string to lowercase• String.prototype.toUpperCase(): This converts the string to uppercase
*/

var sentence = "We all live in a yellow submarine";
sentence.length; //33
sentence.charAt(17); //"y"
sentence.charCodeAt(17); //121
sentence.includes("sub"); //true
sentence.includes("Beatles"); //false
sentence.indexOf("a"); //3
sentence.lastIndexOf("a"); //28
sentence.startsWith("We"); //true
sentence.startsWith("all live in"); //false
sentence.endsWith("marine"); //true
sentence.endsWith("submarine"); //true
sentence.endsWith("Great song!"); //false
sentence.substring(7, 23); //"live in a yellow"
sentence.toLowerCase(); //"we all live in a yellow submarine"
sentence.toUpperCase(); //"WE ALL LIVE IN A YELLOW SUBMARINE"


//Boolean object fundamentals
/*
•
Boolean.prototype.toString(): This returns true or false(as strings),
    based on the Boolean value of the variable(true or false, respectively):
*/

var x = true;
x; // true
x.toString(); // "true"

/*
Boolean.prototype.valueOf(): This returns the Boolean value of
    the variable.Typically, this is used to assign the value of the given
Boolean.prototype to another variable:
*/
var y = x.valueOf();
y; // true

// Grouping statements into functions

// Declare function 
function name(arg1, arg2, ..., argN) {
    // Javascript expressions here
}
// Call function
var result = name(value_for_arg1, value_for_arg2, ..., value_for_argN);
Result;

// An example of this is as follows: 
function isAdult(age) {
    if (Number.isInteger(age)) {
        if (age >= 18) {
            return "You are an adult";
        } else {
            return "You are a minor";
        }
    } else {
        return "You have entered an invalid age";
    }
};
var result = isAdult(15); //"You are a minor"
var result = isAdult(99); //"You are an adult"
var result = isAdult("AA"); //"You have entered an invalid age"


var result = (age) => {
    if (Number.isInteger(age)) {
        if (age >= 18) {

            return "You are an adult";
        } else {

            return "You are a minor";
        }
    } else {
        return "You have entered an invalid age";
    }
};
result(18); //"You are an adult"
result(16); //"You are a minor"
result("CC"); //"You have entered an invalid age"