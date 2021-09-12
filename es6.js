const numbers = [89, 35, 98, 12];
const student ={
    name: 'Sakib Khan',
    age: 32,
    movies: ['King Khan', 'Dhakar Mastan']
};

const about = `My Name is ${student.name} age of ${student.age} has number ${numbers[2]} also liked movies ${student.movies[0]}`;
console.log(about);

//2. arrow function
const getFiftyFIve =() =>55;
const addSixtyFive = num => num + 65;
const isEvent = x => x % 2 == 0;
const addThree = (x, y, z) => x + y + z ;
const doMath = (num1, num2) =>{
    const sum = num1 + num2;
    return sum;
};

//spread operator ...