//block scope

let a = 1;
let b = 2;
const c = 3;
console.log('Global scope: ', a, b, c);

//function scope
fullname=(fname,lnsme)=>fname+lnsme;
setAge=(age)=>"age = "+age;
console.log(fullname('John','Doe'));
console.log(setAge(30));


//Object scope
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
}
console.log(person);

//multiline strings
//inserting variables
let customer = 'John Doe';
const address = ` Customer : ${customer} 123 Main St: 
New York, NY 10001: USA`;
console.log(address);

//spread operator
const arr = [1, 2, 3, 4, 5];
const arr2 = [...arr, 6, 7, 8, 9, 10];
console.log(arr2);