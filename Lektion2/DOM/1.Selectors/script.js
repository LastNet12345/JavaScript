// console.log(window);
// console.log(document);
// console.log(document.body);
// console.log(document.body.children);
// console.log(document.location);


//Returns HTML collection
let p1 = document.getElementsByTagName('p');
//p1.forEach(p => console.log(p));
console.log(p1);

let p2 = document.getElementsByClassName('paragraph');
console.log(p2);

let p3 = document.getElementById('para');
console.log(p3);


//Query selector
//Använd istället

let q1 = document.querySelector('p');
console.log(q1);

let q2 = document.querySelectorAll('p');
// q2.forEach(v => console.log(v));
console.log(q2);

let q3  = document.querySelectorAll('.paragraph');
console.log(q3);

let q4  = document.querySelector('#para');
console.log(q4);

let q5 = document.querySelector('div.paragraph');
console.log(q5);


let q6 = document.querySelector('#list > li:nth-child(3)');
console.log(q6);


console.log(list.parentNode);
console.log(list.childNodes);
console.log(list.children);
console.log(list.children[0]);
console.log(list.nextSibling);
console.log(list.nextElementSibling);
console.log(list.previousSibling);
console.log(list.previousElementSibling);

