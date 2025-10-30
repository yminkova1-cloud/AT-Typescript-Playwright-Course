//Functions
function displayPersonalData(name: string, age: number): string {
    return `${name} is ${age} years old.`;
}

//console.log(displayPersonalData("Ivan", 20));

const personalData: string = displayPersonalData("Peter", 25);
// console.log(personalData);

function greetingVoid(): void {
    //console.log("This is a void function!");
}  

function devideNums(numOne: number, numTwo: number): number {
    return numOne / numTwo;
}

devideNums(10, 5);
devideNums(50, 5);
devideNums(100, 5);

// Arrow functions
const sumNums = (a: number, b: number): number => a + b;
sumNums(3,2);

// Optional parameters
function greeting(name: string, age?: number) {
    if (age) {
        return `Hello, my name is ${name} and I am ${age} years old.`;
    }
    return `Hello, my name is ${name}.`;
    }
// console.log(greeting("Ivan", 20));
// console.log(greeting("Peter"));

// Default parameters
function substractNums(numOne: number = 10, numTwo: number = 5) {
    console.log(numOne - numTwo);
}
substractNums(50);
substractNums(50, 30);

// Functions with parameter of union type
function printId(id: string | number) {
    console.log(`Id - ${id} is type of ${typeof id}`);
}

printId("#10");
printId(10);


