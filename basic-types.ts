// let vs const
let num: number = 5;
num = 10;
num = 15;

const welcomeMsg: string = 'Welcome!';
// Cannot assign to 'welcomeMsg' because it is a constant.
// welcomeMsg = 'Welcome, Peter!'

// string 
let message: string = 'Hello, Peter!';

let messageLength: number = message.length;


// string interpolation
let welcomeMessageDetails: string = `Text message length is ${messageLength}`;
// console.log(welcomeMessageDetails);

// number and number operations

let numOne: number = 10;
let numTwo: number = 5;

let add: number = numOne + numTwo;
let substract: number = numOne - numTwo;
let multiply: number = numOne * numTwo;
let devide: number = numOne / numTwo;

// boolean (true/false)
let areEqual: boolean = numOne === numTwo; // areEqual will be false
let isGreater: boolean = numOne > numTwo;
let isGreaterOrEqual: boolean = numOne >= numTwo;
// console.log("areEqual", areEqual);

// logical operators
let areEqualTo: boolean = numOne === 10 && numTwo === 5; 
let isAnyNumEqualTo: boolean = numOne === 10 || numTwo === 5;
// console.log("areEqualTo", areEqualTo);
// console.log("isAnyNumEqualTo", isAnyNumEqualTo);

// Conditions
// ternary operator
let positiveNumComparison: string = numOne  > 0 
? `The ${numOne} is positive` 
: `The ${numOne} is negative`;
//console.log(positiveNumComparison);

// if-else statement

const numThree: number = 100;

if (numThree <= 10) {
    console.log("The number is less than or equal to 10");
} else if (numThree > 110) {
    console.log("The number is greater than 110");
} else if (numThree > 50) {
    console.log("The number is greater than 50");
} else {
    console.log("numThree is not greater than 3");
}




