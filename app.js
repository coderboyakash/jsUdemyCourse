// console.log('Script file is loaded !');
// var greeting = 'Hello JavaScript';
// console.log({a:1,b:2});
// console.table({a:1,b:2});
// console.error('this is error');
// console.warn('this is waring');
// console.time('Hello');
//   console.log('Script file is loaded !');
//   console.log('Script file is loaded !');
//   console.log('Script file is loaded !');
//   console.log('Script file is loaded !');
//   console.log('Script file is loaded !');
//   console.log('Script file is loaded !');
// console.timeEnd('Hello');


//VAR

// var name = "Akash Chowdhury 1";
// console.log(name);
// var name = "Akash Chowdhury 2";
// console.log(name);
// var cool;
// console.log(cool);

// LET

// let name;
// name = "Akash";
// console.log(name);
// name = "Akash 2";
// console.log(name);

//CONST

// const name = "name";
// console.log(name);
// we cannot initialize const variable

// const person = {
//   name:'akash',
//   age:30
// }
// console.log(person);
// person.name = 'Sara';
// person.age = 28;
// console.log(person);

// const numbers = [1,2,3,4,5];
// console.log(numbers);
// numbers.push(6);
// console.log(numbers);

// Data Types

// Primitive Types
//  const name = 'Johnm Deo';
//  console.log(name);
//  console.log(typeof name);

//  const number = 56;
//  console.log(typeof number);

//  const hasKids = true;
//  console.log(typeof hasKids);

//  const car = null;
//  console.log(typeof car);

//  let test;
//  console.log(typeof test);

//  const sym = Symbol();
//  console.log(typeof sym);

 // Refernce Types

// const hobbies = ['movies', 'cricket'];
// console.log(typeof hobbies);

// const address = {
//   address: 'Dankuni',
//   street: 'TN Mukherjee Road'
// };
// console.log(typeof address);

// const today = new Date();
// console.log(typeof today);
// console.log(today);


// Type Conversion

// let val;

// Number to String

// val = String(65);
// val = String(4+4);

// Boolean to String

// val = String(true);

// Date to String

// val = String(new Date());

// Array to String

// val = String ([1,2,3])

// toString()

// val = (5).toString();
// val = (true).toString();

// Strings to Number

// val = Number('5');
// val = Number(true);
// val = Number(false);
// val = Number(null);
// val = Number('Hello');
// val = Number([1,2,3]);

// parse conversion

// val = parseInt('100');
// val = parseFloat('100.2');

// Output
// console.log(val);
// console.log(typeof val);
// console.log(val.length);
// console.log(val.toFixed(2));

// const val1 = String(5);
// const val2 = 6;
// const sum = Number(val1 + val2);
// console.log(sum);
// console.log(typeof sum);

// const num1 = 100;
// const num2 = 200;
// let val;

//Simple math with numbers

// val = num1 + num2;
// val = num1 * num2;
// val = num1 - num2;
// val = num1 / num2;
// val = num1 % num2;

// Math Objects

// val = Math.PI;
// val = Math.E;
// val = Math.round(2.4);
// val = Math.ceil(2.4);
// val = Math.floor(2.4);
// val = Math.sqrt(225);
// val = Math.abs(225.256354789);
// val = Math.pow(2,4);
// val = Math.min(2,4,2,-1);
// val = Math.max(2,4,2,-1);
// val = Math.random();
// val = Math.floor(Math.random() * 20 + 1);

// console.log(val);


// const fname = 'Akash';
// const lname = 'Chowdhury';
// const age = 24;
// const str = 'Hello, there my name is falan dekhan';
// const tags = 'web design, web development';

// let val;

// Concatenation

// val = fname + ' ' + lname;

// Appending

// val = 'Brad ';
// val += 'Traversy';

// val = 'Hello, my name is ' + fname + 'I am ' + age; 

// Escaping

// val = 'That\'s awesome, I can\'t wait';

// Length

// val = fname.length;

// concat()

// val = fname.concat(' ', lname);

// Change case

// val = fname.toUpperCase();
// val = fname.toLowerCase();

// val = fname[0];
// val = fname[1];

// indexOf()

// val = fname.indexOf('h');
// val = fname.lastIndexOf('h');

// charAt()

// val = fname.charAt('1');

// get last char

// val = fname.charAt(fname.length - 1);

// substring()

// val = fname.substring(1, 4);

// slice()

// val = fname.slice(-3, 4);

// split()

// val = str.split(' ');

// val = tags.split(',');

// replace()

// val = str.replace('falan', 'Falan');

// includes()

// val = str.includes('falan');

// console.log(val);

// const name = 'John';
// const age = 25;
// const job = 'Web Developer';
// const city = 'Dankuni';

// without template strings (es5)

// html = '<ul><li>Name : '+ name +'</li><li>Age : '+ age +'</li><li>Job : '+ job +'</li><li>City : '+ city +'</li></ul>';

// html = '<ul>'+
//         '<li>Name : '+ name +'</li>' +
//         '<li>Age : '+ age +'</li>' +
//         '<li>Job : '+ job +'</li>' +
//         '<li>City : '+ city +'</li>' +
//         '</ul>';

// with template strings (es6)

// html = `
//   <ul>
//     <li class="">Name : ${name}</li>
//     <li>Age : ${age}</li>
//     <li>Job : ${job}</li>
//     <li>City : ${city}</li>
//   </ul>
// `;

// document.body.innerHTML = html;

// create some arrays

// const numbers1 = [43,56,33,23,44,36,5];
// const numbers2 = new Array(22,34,54,667,8);
// const fruits = ['Grapes', 'Banana', 'Apple'];
// const mixed = [1,'Apple', true, null, undefined, {a:1,b:1}, new Date()];

// let val;

// get array length
// val = numbers1.length;
// check if is array
// val = Array.isArray(numbers1);
// get single value from Array
// val = numbers1[4];
// val = numbers1[2];
// insert value into array
// numbers1[2] = 100;
//find index of value in array
// val = numbers1.indexOf(36);

// Mutating arrays
// numbers1.push(230);
// add on to front
// numbers1.unshift(128);
// take off from end
// numbers1.pop();
//take off from front
// numbers1.shift();
// splice values
//numbers1.splice(2,4) // takes 2 from front and after that 2 4th data
//  Reverse the numbers
// numbers1.reverse();

//Concatenate arrays
// val = numbers1.concat(numbers2);
// sorting arrays
// val = fruits.sort();
// val = numbers1.sort();

//Use the compare function
// val = numbers1.sort(function(a, b) {
//   return a - b;
// })

//Use the reverse function
// val = numbers1.sort(function(a, b) {
//   return b - a;
// })

// find
// function under50(num){
//   return num < 50;
// }
// val = numbers1.find(under50);

// console.log(numbers1);
// console.log(val);
//  Object Literals

// const person = {
//   fname : 'Steve',
//   lname : 'Smith',
//   age : 21,
//   email : 'steve@gmail.com',
//   hobbies : ['music', 'sports'],
//   address : {
//     city : 'San Francisco',
//     state : 'CA'
//   },
//   getBirthYear : function() {
//     return 2017 - this.age;
//   }
// }

// val = person;
//  get specific value
// val = person.fname;
// val = person['fname'];
// val = person.age;
// val = person.hobbies;
// val = person.address;
// val = person.address.state;
// val = person.getBirthYear();

// const peoples = [
//   { name: 'John', age: 25},
//   { name: 'Steve', age: 22},
//   { name: 'Nancy', age: 18},
// ];

// for(let i=0; i< peoples.length; i++) {
//   console.log(peoples[i].name);
// }

// console.log(val);

// let val;

// const today = new Date();
// let birthday = new Date('9-18-1981 11:25:15');
// birthday = new Date('9-18-1981 11:25:15');

// val = (today).toString();
// val = (birthday).toString();
// val = today.getMonth();
// val = today.getDate();
// val = today.getDay();
// val = today.getFullYear();
// val = birthday.getHours();
// val = birthday.getMinutes();
// val = today.getSeconds();
// val = today.getTime();
// birthday.setDate(12);
// birthday.setMonth(2);
// birthday.setFullYear(1997);
// birthday.setHours(5);
// birthday.setMinutes(55);
// birthday.setSeconds(12);

// console.log(today);
// console.log(birthday);
// console.log(typeof val);

// if(true){
  //then do something
// }

// const id = 200;

// equal to

// if(id === '200'){
//   console.log('Correct');
// }else{
//   console.log('Incorrect');
// }

// if(typeof id !== 'undefined'){
//   console.log(`The id value is  ${id}`);
// }else{
//   console.log('There is not id defined');
// }

function greet(msg = 'Good Morning') { //es6 type
  console.log(msg)
}

greet();

// Function Expression

const square = function(x){
  return x * x;
}
console.log(square(25));

// Immideately invokable expressions - IIFEs

(function(){
  console.log('IFFE Running....')
})();