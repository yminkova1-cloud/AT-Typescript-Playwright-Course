


type Category = "food" | "clothes" | "electronics"


interface Product {
    name: string;
    price: number;
    category: "food" | "clothes" | "electronics"
}

interface Customer {
    name: string;
    email: string;
    cart: Product[]
}


const apple: Product = {
    name: "Apple",
    price: 2,
    category: "food"
}


//add more products especially for electronics
const tShirt: Product = { name: 'T-shirt', price: 20, category: "clothes" };
const products: Product[] = [apple, tShirt];
const laptop: Product = { name: "Laptop", price: 1200, category: "electronics" };
const mouse: Product = { name: "Mouse", price: 30, category: "electronics" };
const headphones: Product = { name: "Headphones", price: 150, category: "electronics" };




const customer: Customer = {
    name: 'Mladen Petrov',
    email: 'mladen@mail.com',
    cart: products,
};

// add second customer
const customer2: Customer = {
    name: "Ivan Dimitrov",
    email: "ivan@mail.test",
    cart: [headphones, mouse],
    
}

// add function displayCart - display cart customer name and products
function displayCart(customer: Customer): void {
  console.log(`${customer.name}'s cart:`);
  for (const product of customer.cart) {
    console.log(`${product.name} - $${product.price}`);
  }
}

displayCart(customer);
displayCart(customer2);

// add function filterByCategory - receive products and category as parameters and filter the products by given category 
function filterByCategory(products: Product[], category: Category): Product[] {
    return products.filter((product) => product.category === category);
}

// add function calculateTotalPrice - receive customer data and combine all products price
function calculateTotalPrice(customer: Customer): number {
    return customer.cart.reduce((total, product) => total + product.price, 0);
}

console.log(`Electronics in ${customer2.name}'s cart:`, filterByCategory(customer2.cart, "electronics"));
console.log(`Total price for ${customer.name}: $${calculateTotalPrice(customer)}`);
console.log(`Total price for ${customer2.name}: $${calculateTotalPrice(customer2)}`);

// customer.cart[0].price 
// customer.cart[].price 
//...



