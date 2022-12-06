// ARRAYS - en lista med ett eller flera värden

// names = []; //Gör inte
// var names = []; //Undvik

// let = names = []; //Gör såhär
// const names = []; //Gör såhär

//Gör inte
const multiArray = ['12', 12, true, {firstName: 'Kalle'}, [1,2,3,4], null];

//Gör
const array = [1,2,34,5,7];

//Gör
const users = [
    {firstName: 'Kalle', lastName: 'Anka', age: 55},
    {firstName: 'Fnatte', lastName: 'Anka', age: 34},
    {firstName: 'Tjatte', lastName: 'Anka', age: 34},
  ]

  console.log(users[0]);
  console.log(users[0].firstName);

  //Gör
const names = ['Kalle', 'Fnatte', 'Tjatte'];
console.log(names);

// .unshift() - Lägg till i början av en array
names.unshift('Kajsa');
console.log('Med unshift: ' + names);

// .shift() - Ta bort i början av en array
names.shift();
 console.log('Med shift: ' + names);

 // .push() - Lägg till i slutet av en array
names.push('Kajsa');
console.log('Med push: ' + names);

// .pop() - Ta bort i slutet av en array
names.pop();
console.log('Med pop: ' + names);

// names[0] = {};
// console.log(names);

names[0] = 'Nisse';
console.log(names);

const index = names.indexOf('Nisse');
console.log(index);

//Delete tar bort värdert men inte positionen
// delete names[0];
// console.log(names);
// console.log(typeof names[0]);

//Tar bort två värden med start på position 1 lägger sedan till två värden
//C# array copy, skip take, Arraysegment, Span<T> readonlyspan<t>, Range
console.log(names);
names.splice(1, 2, 'Nytt namn', 'Pluto');
console.log(names);


names.splice(1, 0, 'Nytt namn igen', 'Maja');
console.log(names);

console.log(names.length);

//Higer order functions

//Filter === Where
const notKalle = users.filter(u => u.firstName !== 'Kalle');
console.log(notKalle);

//Map === Select
const ages = users.map(u => u.age);
console.log(ages);

//Filter and map
const notKallesAge = users.filter(u => u.firstName !== 'Kalle').map(u => u.age); 
console.log(notKallesAge);

users.forEach(function(user){
    console.log(user.firstName);
})

users.forEach(u => console.log(u.firstName));


users.forEach(u => {

document.body.innerHTML +=  `<p> Name: ${u.firstName} </p>`;
}); 








