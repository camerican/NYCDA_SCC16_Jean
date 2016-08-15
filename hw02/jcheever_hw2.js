// 1. Create a "cheat sheet" JavaScript file that contains working examples with comments of:

// - Variables
//var pet = "cat"; (an example of a string)
//var petNum = 5; (an example of a number)
//var petLover = true; (an example of a boolean)

// - Debugging (alerts, comments, the console)
// You can include alerts and console.log in various places in your code to figure out
// if various lines are working as you try to figure out where the code is broken.
// You can include "comments" with "// some text" or "/* (some text) */" to clarify what
//you are trying to accomplish in your code. Then you make sure the code reflects that.

// - Different data types:
// string: "cat"
// number: 5
// boolean: true, false
// undefined: no value

// - Arrays
//["cat", "dog", "fish", "bird", "hamster"];

// - Testing
"stringone" === "string one";
//running this code in the console returns "false" because they are not equal
"stringone" !== "string one";
//running this code in the console returns "true" because they are not "not equal"

// - Logic
// It is how your write your code so the computer can perform the various functions (tasks).
// If and then and else statements are a good example. If a certain thing is true or exists, 
// then something should happen or else something else happens, etc.

// - Functions
// It is JavaScript that does the same thing again and again whenever you use its name.
//It saves you from having to write the same code over and over again. If you find yourself
// rewriting code, you may have an opportunity to put it into a function which can be referred to.
// It is a lot cleaner way to write code and for someone to follow what you are doing.
// See Function #1 below for how it is written.


//2. Write 3 different functions that take input and return something 
//via the console or an alert.

// Function # 1:
function someNum(var1, var2){
	return var1 + var2;
}
console.log(someNum(3, 4));

// Function # 2:
function someCalc(var1, var2){
	return var1 * var2;
}
console.log(someCalc(10, 8));

// Function # 3:
function someNum(var1, var2){
	return var1 / var2;
}
alert(someNum(10, 5));

// 3. Create a function that takes two numbers, 
//multiplies one number by the other, and fires an alert of the result. 
function newNum(x, y) {
	return x * y;
}
alert (newNum(5, 4));

//4. Create a multidimensional array related to a subject that interests you. 
//Output two of the items in sub-arrays to the console.
var Phantom = ["Christine", "Phantom"];
var Cats = ["Grizabella", "Macavity"];
var Aladdin = ["Jasmine", "Omar"];
var Beautiful = ["Carol King", "Gerry Goffin"];
var Chicago = ["Velma", "Roxie"];
var Wicked = ["Glinda", "Elphaba"];
var broadwayShows = [Phantom, Cats, Aladdin, Beautiful, Chicago, Wicked];
// to access "Omar" in "Aladdin":
console.log(broadwayShows[2][1]);

//5. Write a script that checks if a variable is greater than 10. 
//If it is, alert the user that their variable is greater than 10. 
//If it is not, alert the user of the difference (their variable - 10).
var1 = 9;
if(var1 > 10){   
	alert("Your variable is greater than 10");
} else {
	someNum = 10 - var1;
	alert("Your variable is less than 10 by " + someNum);
};

//7. Declare a function that takes a first name and a last name
// as arguments and combines them to a full name in an alert.
var1 = firstName;
var2 = lastName;
function fullName (var1, var2) {
	return var1 + var2;
}
alert(fullName("Jean ", "Cheever"));
