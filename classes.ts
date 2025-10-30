// class declaration 

class Person {
    // name: string;
    // age: number;


    constructor(public name: string, public age: number) {
        this.name = name;
        this.age = age;
    }

    introduction(): void {
        console.log(`Hi, I'm ${this.name}. I'm ${this.age} years old.`);
    }

}

const person1 = new Person("Ivan", 20);
person1.introduction(); // Hi, I am Ivan. I'm 20 years old.
person1.name;
//console.log("person1 name:", person1.name);
person1.age;
person1.name = "Petar";
//console.log("person1 new name:", person1.name);

// readonly access modifier 
class ReadOnlyPersonData {
    readonly name: string;
    readonly age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    intro(): void {
        console.log(`Hi, I'm ${this.name}. I'm ${this.age} years old.`);
    }
}

const person2 = new ReadOnlyPersonData("Todor", 25);
//console.log("person2 age:", person2.age);
//console.log("person2 name:", person2.name);
// person2.age = 20; // Error: Cannot assign to 'age' because it is a read-only property
// person2.name = "Georgi"; // Error: Cannot assign to 'name' because it is a read-only property



// private access modifier
class PrivatePersonData {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    private displaySecretMssg(): string {
        return "This is a message from a private method.";
    }

    intro(): void {
        //console.log(`Hi, I'm ${this.name}. I'm ${this.age} years old.`);
        //console.log(this.displaySecretMssg());
    }

}

const person3 = new PrivatePersonData("David", 15);
// person3.name; // Error: Property 'name' is private and only accessible within class 'PrivatePersonData'.
// person3.age ; // Error: Property 'age' is private and only accessible within class 'PrivatePersonData'.

// console.log(person3.intro());
// person3.displaySecretMssg(); // Error: Property 'displaySecretMssg' is private and only accessible within class 'PrivatePersonData'.
person3.intro();


//Class Inheritance
class User {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    intro(): void {
        console.log('Nice to meet you!')
    }
}

class UserDetails extends User {

    constructor(name: string) {
        super(name);
    }

    showDetails(): void {
        console.log(`User name is: ${this.name}`);
    }
}

const user = new UserDetails('Bobi');
console.log("<---->");
console.log(user.name);
user.showDetails();
user.intro();

// protected access modifier
class ProtectedPerson {
    //   protected name: string;
    //  protected age: number;

    constructor(protected name: string, protected age: number) {
        this.name = name;
        this.age = age;
    }

    protected getProtectedData(): string {
        return `Protected Name: ${this.name} and Protected Age: ${this.age}`;
    }

}

const protectedPerson = new ProtectedPerson("Protected Pesho", 30);
// protectedPerson.name; // Error: Property 'name' is protected and only accessible within class 'ProtectedPerson' and its subclasses.
// protectedPerson.getProtectedData; // Error: Property 'getProtectedData' is protected and only accessible within class 'ProtectedPerson' and its subclasses.

class Student extends ProtectedPerson {

    private grade: number;

    constructor(name: string, age: number, grade: number) {
        super(name, age);
        this.grade = grade;
    }

    studenIntro(): void {
        console.log(this.getProtectedData());
        console.log(`${this.name} is ${this.age} years old with grade ${this.grade}.`);
    }

}

const student = new Student("Hristo", 25, 6);
console.log("<---->");
student.studenIntro();
// student.grade // Error: Property 'grade' is private and only accessible within class 'Student'.

export {};
