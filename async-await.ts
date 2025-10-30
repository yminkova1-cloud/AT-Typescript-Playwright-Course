// 1. basic async operation
//console.log("Start");

// setTimeout(() => {
//console.log("Async operation");
// }, 2000);

// console.log("End");

// 2. multiple async operations

// function setTimeouts() {
// setTimeout(() => {
// console.log("3 seconds delay");
// }, 3000);

// setTimeout(() => {
// console.log("1 seconds delay");
// }, 1000);

// setTimeout(() => {
// console.log("2 seconds delay");
// }, 2000);

//}; 
// setTimeouts();

// 3. async await syntax

function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function demo() {
    await delay(2000);
    console.log("2 seconds delay");

    await delay(3000);
    console.log("3 seconds delay");

    await delay(1000);
    console.log("1 seconds delay");
}

// demo();

// 4. get product data

interface Rating {
    rate: number;
    count: number;
}

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
};

async function getData(): Promise<void> {
   try {
     const response = await fetch("https://fakestoreapi.com/products/1");
    const data: Product = await response.json();
    console.log(data);
   } catch (error: unknown) {
    console.error(error);
   }
}
   getData()

   
   
   // console.log(`Title: ${data.title}`);
   // console.log(`Price: ${data.price}`);
   // console.log(`Category: ${data.category}`);


 //getData();

// 5. try catch finally

try {
    const jsonData = JSON.parse('{"valid: true}');
   // console.log(jsonData);

} catch (error) {
    //console.error("Invalid JSON format!:", error);
} finally {
    //console.log("JSON parser ready");
}


// try/catch/finally exercise

function divideNumbers(numOne: number, numTwo: number) {

    try {
        if (numTwo === 0) {
            throw new Error("Cannot divide by zero");
        } else {
            const result: number = numOne / numTwo;
            //console.log(`Result: ${result}`);
        }
    } catch (err) {
        console.error(`Error: ${err}`);
    } finally {
        //console.log("Operation finished");
    }

}
divideNumbers(20, 0);

