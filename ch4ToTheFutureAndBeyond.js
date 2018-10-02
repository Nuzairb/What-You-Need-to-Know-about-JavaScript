// Ch 4 To the Future and Beyond 
/*
Note that ECMA International takes input from the community about
which features should be considered to be added in a new version of
the standard.These proposals are available at https://github.com/tc39/ecma262 
As new ideas are submitted, they undergo a
thorough revision by members of ECMA International, and status
updates are always published in the same repository as they progress
from Stage 0(where input is allowed into the specification) until Stage
4, where the proposed addition has been formally accepted to go into
the next version of the standard.
*/

//What's in the near future of JavaScript?
/*
-Array.incluedes: The includes() method determines whether an array includes a certain element, returning true or false as appropriate.
 */
var famousWriters = [];
famousWriters.push("C. S. Lewis");
famousWriters.push("J. K. Rowling");
famousWriters.push("J. R. R. Tolkien");
famousWriters.push("Richard Bach");

famousWriters.includes("C. S. Lewis");
famousWriters.includes("Richard Bach");

famousWriters.includes("C. S. Lewis", 1);
famousWriters.includes("John Doe");

/*
-Object.values/Object.entries: This feature allow you to retrieve value or key-value pairs form objects
for the purpose of iteration and serialization. 
*/
var person = { name: "Gabriel", age: 33, profession: "developer" };
console.log(Object.values(person)); // ['Gabriel', 33, 'developer']
console.log(Object.entries(person));
[
    ['name', 'Gabriel'],
    ['age', 33],
    ['profession', 'developer']
]

/*
-String padding: This feature is also in Stage 3 as of May 2016. Until
ECMAScript 6, there were no native methods to pad a string, whereas
most modern popular languages implement similar functions.Today,
    when the need
for padding arises, developers have to resort to a wide
variety of inefficient methods and workarounds.Making string padding
an official part of the specification will provide a standardized solution
that will improve performance of applications.
The padStart() and padEnd() method pads the current string with a
specific string(eventually repeated) so that the resulting string reaches
a desired length.Depending on the
case, the pad is applied from the
beginning(left) or from the end(right) of the current string, respectively.
If the pad string is not specified, a space is used by
default.
*/

console.log('1'.padStart(10)); // "          1"
// Similarly 
console.log('1'.padStart(10, "0")); // "0000000001"
// Other hand 
console.log('1'.padEnd(10)); // "1          "
// Similarly
console.log('1'.padEnd(10, "0")); // "1000000000"

console.log('2018'.padStart(4, "0")); // "2018"
console.log('2018'.padEnd(3, "0")); // "2018'