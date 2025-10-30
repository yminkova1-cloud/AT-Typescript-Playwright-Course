// forEach method
const nums: number[] = [10, 20, 30, 40];

nums.forEach((n: number, index: number) => {
    console.log(`Index ${index}: value ${n}`);
});

// sum of numbers
let sum: number = 0;

nums.forEach((num: number) => {
    sum = sum + num;
});
console.log("Sum of nums:", sum);

// active users
interface User {
    id: number,
    name: string,
    isActive: boolean,
};

const users: User[] = [
    {id: 1, name: "Anna", isActive: true},
    {id: 2, name: "Petar", isActive: false},
    {id: 3, name: "Georgi", isActive: true},
    {id: 4, name: "Mladen", isActive: false},
];

let activeIds: number[] = [];

users.forEach((user) => {
    if (user.isActive) {
        activeIds.push(user.id);
    }
} );
console.log("Active user IDs:", activeIds);


