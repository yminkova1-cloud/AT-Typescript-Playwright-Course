// Interface declaration
interface Car {
    type: string;
    model: string;
    color: string;
    horsePower: number;
}

// Object declaration
const car: Car = {
    type: "Fiat",
    model: "500",
    color: "white",
    horsePower: 100
};

console.log(car);

// Interface person object
interface Person {
    name: string;
    lastName: string;
    address: string;
    age: number;
    hobbies: string[];
    greeting: () => string;
}

// Object with method and array value
const person: Person = {
    name: "Ivan",
    lastName: "Ivanov",
    address: "bul. Vitosha 30",
    age: 30,
    hobbies: ["reading", "traveling", "tennis"],
    greeting: function () {
        return "Hello! My name is Ivan.";
    }
};

// Accessing object properties
person.name;
person.age;
person["address"];

person.greeting();
person["greeting"]();

console.log(person.greeting());

// Properties redeclaration
person.age = 35;
console.log(person);

// let vs const redeclaration
let dog = { name: "Buddy" }
dog.name = "Max"; // Allowed
dog = { name: "Charlie" }; // Allowed

const cat = { name: "Kitty" }
cat.name = "Luna"; // Allowed
// cat = {name: "Milo"}; // Not allowed, will cause an error


// Explicit object type declaration
const mouse: { name: string; favFood: string; age: number } = {
    name: "Jerry",
    favFood: "Cheese",
    age: 2,
};


// Intefaces - optional parameters, read only and string literals

interface User {
    name: string;
    readonly email: string;
    // string literal type
    role: "admin" | "user" | "guest";
    // optional parameter
    job?: string;
    password?: string | number;
}

const user: User = {
    name: "Tom",
    email: "tom@example.com",
    role: "admin",
    job: 'QA'
};
// optional parameter added later
user.password = 12345;
// user.email = "newemail@example.com"; // Not allowed
console.log(user);



interface UserPermissions extends User {
    permissions: string;
}

const secondUser: UserPermissions = {
    name: "Tom",
    email: "tom@example.com",
    role: "admin",
    job: 'QA',
    permissions: "denied",
};