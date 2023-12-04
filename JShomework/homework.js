/* დავალება 1 */
/* გააერთიანეთ მოცემული ობიექტები 1 ობიექტში */
const productsFeatures = {
    name: 'Product X',
    description: 'A high-quality product with many features.',
    price: 100
};

const productProperties = {
    color: 'red',
    size: 'medium',
    weight: 5
};

const PropertiesandFeatures = {...productProperties, ...productsFeatures}
 console.log(PropertiesandFeatures);


/* დავალება 2 */
/* დამიბეჭდეთ პროდუქტების ფასის ჯამი */

const products = [
    {
        name: "Product X",
        description: "A high-quality product with many features.",
        price: 100
    },
    {
        name: "Product Y",
        description: "Another great product with a competitive price.",
        price: 75
    },
    {
        name: "Product Z",
        description: "A basic product that gets the job done.",
        price: 50
    }
];

console.log(products[0].price + products[1].price + products[2].price);

/* დავალება 3 */
/* გაფილტრეთ მოცემული მასივი ფასის მიხედვით, რომლებიც მეტია 240-ზე */
/* გამოიყენეთ .filter() მეთოდი */

const otherproducts = [
    { name: "Laptop", price: 1299 },
    { name: "Phone", price: 499 },
    { name: "Tablet", price: 299 },
    { name: "Watch", price: 199 },
    { name: "Headphones", price: 99 },
];

const filteredOtherProducts = otherproducts.filter(product => product.price > 240);
console.log(filteredOtherProducts);
