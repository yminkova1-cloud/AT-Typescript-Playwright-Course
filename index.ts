// Exercise 1:
let name: string = "Petar Ivanov";
let age: number = 20;
console.log(`Hello! I am ${name}, ${age} years old.`);

// Exercise 2:
const num1: number = 3;
const num2: number = 2;
const addition: number = num1 + num2;
const substrtaction: number = num1 - num2;
console.log(`Addition: ${addition}`);
console.log(`Substraction: ${substrtaction}`);

// Exercise 3:
const num: number = 22;
// const isWithinRange: boolean = num >= 10 || num <= 20; the || example is not correct, should be &&
const isWithinRange: boolean = num >= 10 && num <= 50;
console.log(`Is ${num} within range 10-50? ${isWithinRange}`);
