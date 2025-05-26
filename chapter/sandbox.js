// console.log('hello world');

// let firstName = "Daniel";
// let lastName = "Victor";

// let fullName = firstName + ' ' + lastName;

// console.log(fullName + " you are welcome");

// console.log(fullName.length);
// console.log(fullName.toUpperCase());



// // let likes = 10;
// // likes += 10;

// // console.log(likes);

// const title = 'Best read of 2019';
// const author = 'Daniel';
// const like = 30;

// let result = `The blog called ${title} by ${author} has ${like} likes`;
// console.log(result);

// let students = ['Bola', 'Daniel', 'John', 'Linda'];

// // students[2] = 'David';
// // let result = students.join(', ');
// // let result = students.concat(['Tosin', 'Chidi']);
// let result = students.push('Praise');
//  result = students.pop();
// console.log(students);

// let age;

// console.log(age, age + 3, `the age is ${age}`);

// // Boolean
// let names = ['Daniel', 'Sam', 'Tayo'];

// // let result = names.includes('Daniel');
// // console.log(result);

// let age = 25;

// let result = age == 24;
// result = age !== 25;
// console.log(result);

// type conversion
let score = '100';

// score = Number(score);
// console.log(score + 1);

// let name = 'Daniel';
// let age = 27;
// let isStudent = (true, false);
// let address = { City: 'Lagos', Country: 'Nigeria'};
// let hobbies = ['Singing', 'Music'];
// let undefinedVariable;
// let nullVariable = null;

// console.log( name, typeof(name) );
// console.log( age, typeof(age) );
// console.log( isStudent, typeof(isStudent) );
// console.log( address, typeof(address) );
// console.log( hobbies, typeof(hobbies) );
// console.log( undefinedVariable, typeof(undefinedVariable) );
// console.log( nullVariable, typeof(nullVariable) );


// let userName = prompt('What is your name?');
// let userAge = prompt('What is your age?');
// let currentYear = new Date().getFullYear();
// let yearOfBirth = currentYear - parseInt(userAge);

// alert('Hello ' + userName + '! You were born in' +  yearOfBirth + '.');

// For loop
// for( i=0; i<5; i++){
//     console.log('In loop:', i);
    
// }
// console.log('Loop finished');

const names = [ 'Daniel', 'Toyin', 'Sam'];

// for( i = 0; i < names.length; i++){
//     console.log(names[i]);
    
// }

// let i = 0;
// while( i < names.length){
//     console.log( names[i]);
//     i++;
    
// }

// if statemnent
// const age = 25;

// if(age > 20){
//     console.log('you are good');
    
// }

// const boys = ['David', 'Daniel', 'Sam', 'Sunday'];

// if(boys.length > 3){
//     console.log('What a beautiful ones');
// }

// const password = 'skidan007ufjdf'
// if(password.length >= 12 && password.includes('@')){
//     console.log('This is very strong');
// } else if(password.length > 8 || password.includes('@')){
//     console.log('This is good');
// } else{
//     console.log('This is wrong');
// }

// let user = false;

// if(!user){
//     console.log('You must be logged in to continue');
    
// }

// Break and continue

// const scores = [ 50, 25, 0, 30, 100, 20, 10];

// for( i = 0; i < scores.length; i++){
//     console.log('Your score:', scores[i]);
//     if( scores[i] === 0){
//         continue;
//     }
    
//     if(scores[i] === 100){
//         console.log('Congrats, you got the top score');
//         break;
//     } 

// }


// switch statement
// const grade = 'A';

// switch(grade){
//     case 'A':
//         console.log(' You got an A!');
//         break;
//     case 'B':
//         console.log(' You got a B!');
//         break;
//     case 'C':
//         console.log(' You got a C!');
//         break;
//     case 'D':
//         console.log(' You got a D!');
//         break;
//     case 'E':
//         console.log(' You got a E!');
//         break;
//     default:
//         console.log('Not a valid grade');
// }

// // function declaration
// function greet(){
//     console.log('Hello there');
// }

// // function expression
// const speak = function(){
//     console.log('Hell0 there');
// };
// greet();

// // argument and parameter
// const speak = function(name, time){
//     console.log(`Good ${time} ${name}`);
    
// }
// speak('Daniel', 'morning');

// const calcArea = function(radius){
//     return 3.14 * radius**2;
// };

// const area = calcArea(5);
// console.log(area);

// ?arrow function
// const calcArea = radius => 3.14 * radius**2; 

// const area = calcArea(5);
// console.log(area);

// const greet = () => 'hello, world';
// const result = greet();
// console.log(result);

// const bill = function( products, tax){
//     let total = 0;
//     for( let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }

// const bill = (products, tax) => {
//     let total = 0;
//     for( let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }   
// console.log(bill([10, 30, 40], 0.2));

// callback function
// let people = ['maro', 'daniel', 'david', 'sam', 'press'];

// const logPerson = ( person, index) => {
//     console.log( `${index} - hello ${person}`);
    
// }
// people.forEach(logPerson);

// exercise
// let number = 0;
// if( number > 0){
//     console.log('correct');
// } else if( number < 0 ){
//     console.log('negative');
// } else {
//     console.log(number, 'is zero');
// }


// for( let i = 1; i <= 10; i++){
//     console.log(i);
    
// }

const calc = ( num1, num2) =>  num1 + num2;
console.log(calc(2, 4));
