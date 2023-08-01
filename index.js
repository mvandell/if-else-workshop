//else-ifs
//if falsy, print a message corresponding to the value
let value = "true";
if (value) {
    console.log("true");
}
else if (value === null) {
    console.log("The null value is falsy");
}
else if (value === undefined) {
    console.log("undefined is falsy");
}
else if (value === 0) {
    console.log("The number 0 is falsy (the only falsy number)");
}
else if (value === "") {
    console.log("The empty string is falsy (the only falsy string)");
}
else {
    console.log("The boolean value is falsy");
}

//prints a message based on the sum of 2 numbers
let num1 = 500;
let num2 = -500;
let sum = num1 + num2;
if (sum < -1000) {
    console.log(sum + " is less than -1000");
}
else if (sum > 100) {
    console.log (sum + " is greater than 100");
}
else if (sum === 0) {
    console.log (sum + " is equal to 0");
}
else if (sum > 0) {
    console.log (sum + " is greater than 0");
}
else if (sum < 0) {
    console.log (sum + " is a negative number");
}

//test if 2 parameters are both greater than or equal to 5
let number1 = 5;
let number2 = 5;
if (number1 >= 5 && number2 >= 5) {
    console.log("true");
} else {console.log("false");}

//strictly compare 2 sets of parameters
//true if at least 1 pair is truthy
let param1A = "cake";
let param1B = "cake";
let param2A = "pie";
let param2B = "pie";
if (param1A === param1B || param2A === param2B) {
    console.log("true");
} else {console.log("false");}