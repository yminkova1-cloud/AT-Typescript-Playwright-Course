// 1. Create an array of strings and add a new element at the end
let names: string[] = ['Alice', 'Bob', 'Charlie'];
names.push('Alex');
console.log(names);

// 2. Create an array of numbers and remove the first element from the array
let numbers: number[] = [11, 12, 13, 14, 15];
numbers.shift();
console.log(numbers);

// 3. Use the map method to create a new array and divide each number by 2 “num / 2” from [1, 2, 3, 4, 5]
let nums: number[] = [1, 2, 3, 4, 5];
let dividedNums: number[] = nums.map((num: number) => num / 2);
console.log(dividedNums);

// 4. Use the filter method to create a new array containing only numbers greater than 5 from [3, 7, 1, 9, 12, 4]
let mixedNums: number[] = [3, 7, 1, 9, 12, 4];
let filteredNums: number[] = mixedNums.filter((num: number) => num > 5);
console.log(filteredNums);

// 5. Use the sort method to sort an array of numbers [9, 3, 7, 2, 8, 5] in ascending order
let unsortedNums: number[] = [9, 3, 7, 2, 8, 5];
let sortedNums: number[] = unsortedNums.sort((a: number, b: number) => a - b);
console.log(sortedNums);

// 6. Use the slice method to extract the first three elements from ['apple', 'banana', 'cherry', 'date','elderberry']
let fruits: string[] = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
let firstThreeFruits: string[] = fruits.slice(0, 3);
console.log(firstThreeFruits);

// 7. Use the splice method to remove the second and third elements from ['car', 'bike', 'bus', 'train','boat'] 
let vehicles: string[] = ['car', 'bike', 'bus', 'train', 'boat'];
vehicles.splice(1, 2);
console.log(vehicles);

// 8. Write a function named “findLargest” that takes three numbers as parameters and returns the largest of them. Use if/else statement to find the largest number
function findLargest(a: number, b: number, c: number): number {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}
console.log(findLargest(11, 32, 7));

// 9. Write a function “convertToCentimeters” which receivesparameter “inches” and add default value it and convert to centimeters
function convertToCentimeters(inches: number = 1): number {
    return inches * 2.54;
}
console.log(convertToCentimeters(3));
console.log(convertToCentimeters());

// 10. Write a function named “calculateArea” that takes a required width parameter and an optional height parameter. If height is not provided, assume the shape is a square.
function calculateArea(width: number, height?: number): number {
    if (height === undefined) {
        return width * width;
    } else {
        return width * height;
    }
}
console.log(calculateArea(4, 5));
console.log(calculateArea(4)); 