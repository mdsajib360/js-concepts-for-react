//1. array of objects //"mane array er moddey object ache"
const products = [
    {name:'laptop', price: 3200, brand: 'lenovo', color: 'silver'},
    {name:'phone', price: 7000, brand: 'iphone', color: 'golden'},
    {name:'watch', price: 3000, brand: 'casio', color: 'golden'},
    {name:'sunglass', price: 300, brand: 'ray', color: 'black'},
    {name:'camera', price: 9800, brand: 'canon', color: 'gray'},
    
];

//2.loop through using map
const brands = products.map(product => product.brand);
// console.log(brands);
const prices = products.map(product => product.price)
// console.log(prices);

//3. loop through using foreEach
products.forEach(product => console.log(product));
products.forEach(product => console.log(product.color));

products.forEach(product => {
    //multiline forEach loop.
});

//4.search using filter

const cheap = products.filter(product => product.price <= 5000);
console.log(cheap);
//filter specific products
const specificName = products.filter(product => product.name.includes('n'));
console.log(specificName);

//5. find 
const special = products.find(p => p.name.includes('n'));
console.log(special);

