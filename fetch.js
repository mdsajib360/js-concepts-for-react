//1. JSON
const student = {
  name: "Sakib khan",
  age: 32,
  movies: ["king khan", "Dhakar Mastan"]
};
//object json stringify
const studentJSON = JSON.stringify(student);
console.log(student);
console.log(studentJSON);
//parse json to normal object
const studentObj = JSON.parse(studentJSON);
console.log(studentObj);


//2. fetch 
// fetch('url')
// .then(res => res.json()) 
// .then(data => console.log(data));

// object keys, values 
const keys = Object.keys(student);
const values = Object.values(student);

//for loop through in array 
const numbers = [23, 54, 67, 87, 23, 78];

numbers.map(num => num *2);

//for of on array like object 
//for in on object to get object property


// add or remover from an array 
const products = [
  { name: "laptop", price: 3200, brand: "len", color: "silver" },
  { name: "phone", price: 7000, brand: "HTC", color: "golden" },
  { name: "watch", price: 3000, brand: "casio", color: "golden" },
  { name: "sunglass", price: 300, brand: "ray", color: "black" },
  { name: "camera", price: 9800, brand: "canon", color: "gray" },
];

const newProduct = {name: 'webcam', price: 700, brand:'Lal'};

//copy products array and the add newProduct
const newProducts = [...products, newProduct];

//create a new array without one specific item 
//remove phone means create a new array without the phone 
const remaining = products.filter(product => product.name !== 'phone');
console.log(remaining)