// 1. Create a TypeScript interface named Person
interface Person {
    name: string;
    lastName: string;
    age: number;
    email: string;
    phoneNumber: number;
}

// 2. Create a PersonInfo interface that extends Person and adds optional properties
interface PersonInfo extends Person {
    country?: string;
    greeting?: () => string;
}

// 3.  Create an object with properties of type Person using the interface from exercise 1
const person: Person = {
    name: "Peter",
    lastName: "Petrov",
    age: 25,
    email: "peter@example.com",
    phoneNumber: 1234567890
};

// 4. Create an object of type PersonInfo using the interface fromExercise 2 and declare an object person2 
const person2: PersonInfo = {
    name: "Ivan",
    lastName: "Petrov",
    age: 30,
    email: "ivan@example.com",
    phoneNumber: 9876543210,
    country: "Bulgaria",
    greeting: function () {
        return "Hello! My name is Ivan.";
    }
};

