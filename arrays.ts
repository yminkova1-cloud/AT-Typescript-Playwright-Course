// arays declaration
let numsArray: number[] = [1, 2, 3, 4,];
let stringArray: string[] = ['Pesho', 'Gosho', 'Tosho', 'Ivan'];
let combinedArray: (string | number)[] = [1, 'Pesho','Ivan', 2];

// access element by index
stringArray[0]; // Pesho
stringArray[1]; // Gosho
combinedArray[2]; //Ivan
//console.log(stringArray[0]);
//console.log(stringArray[1]);
//console.log(combinedArray[2]);

// access aray length
numsArray.length;

// method map - creates a new array with the results of calling a provided function on every element in the calling array.
let multiplyNums = numsArray.map((num: number) => num * 2);
let mapNames = stringArray.map((name: string) => `Hello ${name}`);
let checkTypeOf = combinedArray.map((element: number | string) => {
  if (typeof element === "number") {
    return element + 5;
  } else {
    return `Welcome ${element}`;
  }
})
// console.log(checkTypeOf);

// method filter - creates a new array with all elements that pass the test implemented by the provided function.
let positiveNums: number [] = [2,3,4,5,6];
let filteredArr: number[] = positiveNums.filter((num: number) => num > 3);
//console.log("filteredArr", filteredArr);

// method sort 
let sortNums: number [] = [100, 2, 30, 5, 40, 6];
let sortedResult = sortNums.sort((a: number, b: number) => a - b);
// console.log(sortedResult); // [2, 5, 6, 30, 40, 100]

// method push 
sortedResult.push(200);
//console.log(sortedResult); // [2, 5, 6, 30, 40, 100, 200]

// method pop
sortedResult.pop();
// console.log(sortedResult); // [2, 5, 6, 30, 40, 100]

// method shift 
sortedResult.shift();
// console.log(sortedResult); // [5, 6, 30, 40, 100]

// method unshift
sortedResult.unshift(1);
//console.log(sortedResult); // [1, 5, 6, 30, 40, 100]