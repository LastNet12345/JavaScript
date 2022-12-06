/* 
    Javascript Datatyper
    --------------------------------------------------
    String        =   Text
    Number        =   Tal, decimaltal, stora tal
    Boolean       =   Sant / Falskt   true/false
    null          =   Tomt, ingenting alls (manuellt)
    undefined     =   Tomt, har ej blivit definierad än (automatiskt)
    Object        =   ett object/klass som innehåller ett eller flera värden
    Array         =   OBJECT (lista med ett eller flera värden)
    Symbol        =   symboler används med objekt, kommer vi inte att använda
*/

// var = global variabel - accessbar överallt i koden

// let = lokal variabel - accessbar bara inom det angivna området
// const = lokal konstant variabel - kan inte skrivas över (undantag finns)


let firstName = "Kalle"; //Använd ej "" för sträng värden
let lastName = 'Kalle'; //Använd ''

let fullName = firstName + ' ' + lastName;
let fullName2 =   `${firstName} ${lastName}`;


firstName = 5;
firstName = [];
firstName = {};
firstName = 'Nisse';

console.log(firstName);
console.log(firstName.length);
console.log(firstName[0]);
let values = fullName.split(' ');
console.log(values);


// Numbers
// ------------------------
/* 
    Math operators

    +   lägg till
    -   ta bort
    *   gångra
    **  upphöjt i
    /   dela
    %   division remainder - modulus

    ++  öka med 1
    --  minska med 1

    =   lika med
    +=  lägg till
    -=  ta bort
    *=  gångra och lägg till
    /=  dela och lägg til
    %=  division remainder

*/

let nr1 = 10;
let nr2 = 2.5;

nr1 = nr1 + 1;
nr1 += 1;
nr1 ++;


let dataType;

console.log(typeof dataType);

dataType = 'Text';
console.log(typeof dataType);

dataType = 45;
console.log(typeof dataType);

dataType = null;
console.log(typeof dataType); //Bugg i språket...

dataType = true;
console.log(typeof dataType); 

dataType = {};
console.log(typeof dataType);
 
dataType = [];
console.log(typeof dataType); 

