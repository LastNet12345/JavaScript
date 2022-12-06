// OBJECT - innehåller ett eller flera värden

/* 

var person = {} //Gör ej
let person = {}
const person = {} 

*/


// let person = {
//     firstName: 'Kalle',
//     lastName: 'Anka',
//     age: 50
// }

// person = 34;

// test = {};

// console.log(test);

// console.log(window.document);

// person.firstName = 'Nisse';
// console.log(person.firstName);

const user = {
    firstName: 'Kalle',
    lastName: 'Anka',
    age: 34,
    address: {
      street: 'en gata',
      nr: 12,
      zipCode: 72345,
      city: 'Ankeborg'
    },
    phoneNumbers: ['076-1234567', '070-9876543'],
    isActive: true
  }

  console.log(user);
  console.log(user.address);

//   user = []; //cant do

user.firstName = 'Nisse';
console.log(user.firstName);

user.address.street = "En ny gata";
console.log(user.address);

user.FFFFirstName = 'Kalle';
console.log(user.FFFFirstName);

user.email = 'kalle@anka.com';

console.log(user);

console.log(user.age);
console.log(user['age']);

let key = 'age';
console.log(user[key]);

//C# records
let {firstName, age, address:{city}} = user;
console.log(firstName, age, city);
