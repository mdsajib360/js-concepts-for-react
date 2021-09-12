//1.How to decalare a variable using let & const.
const fatherName = 'Arnold';
let season = 'rainy';
season = 'winter';

//6 basic condition >, <, ====, !==, <=, >=, >=
// multiple condition : && , || 
//exmple:
if(fatherName === 'Arnold' || season === 'rainy'){}
else if(fatherName === 'Arnold'){}
else{}

//3. array 
// index 
// length 
const numbers = [89, 35, 98, 12];
numbers[0] = 56;

//4. loop -- for, while 
for(let i = 0; i<numbers.length; i++){
    const number = numbers[i]; 
    confirm.log(number) 
} 

// 5. function 
function multiply(num1, num2){
    const result = num1 * num2;
    return result;
}
const output = multiply(2, 2);

//6. Object 
// 3 wayes to access property by name
const student ={
    name: 'Sakib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
}
//access object property 
console.log(student.age) //direct by property
console.log(student['age']); // access via property name string.
const myVariable = 'age';
console.log(student[myVariable]); //access object property name  via variable.
