// en kommentar kan skrivas såhär om det är en rad  ( ctrl + ' )


/* 
  en kommentar kan skrivas såhär
  om det är flera rader
  ( shift + alt + a )
 */


console.log('Hej');
console.warn('Warning');
console.error('error');

var age = 34; //Global scope (använd ej!)

//Use this:
let age2 = 45;
const age3 = 66;

if(age2 === 45){
    let age = 55; //lokalt scope bara synlig här
    var firstName = 'Kalle'; //globalt scope synlig även utanför
}



console.log(age, firstName);






// alert('Hej');

