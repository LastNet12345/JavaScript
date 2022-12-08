
//let age = 50;

if(true){
    let age = 45;
    console.log('inne i första kodblocket', age);
    
    if(true){
        let age = 10;
        var global = 'var';
        console.log('inne i andra kodblocket', age, global);
    }


}


console.log('Utanför något kodblock', age, global);

// var firstName = 'Nisse';
//let firstName = 'Nisse';
//const firstName = 'Nisse';

// ---------------------------------------------------
// hej();
// hej2();

//Functions

//deklarera en funktion
function hej(){
    console.log('Hej');
}

const hej2 = function(){
    console.log('Hej2');
}


const hej3 = () => console.log('Hej3');


//Köra en funktion
hej();
hej2();


function calc(num1, num2){
    const sum = +num1 + +num2;
    console.log(sum);
    return sum;
}

let sum = calc(2, 5);
console.log(sum);


function calc2(num1 = 0, num2 = 1){
    const sum = +num1 + +num2;
    console.log(sum);
    return sum;
}


calc2(4);


const calc3 = (num1 = 1, num2 = 2) => num1 + num2;

var sum2 = calc3();
console.log(sum2);

const calc4 = (num1 = 1, num2 = 2) => {
    console.log(num1, num2);
    return num1 + num2;
}

calc4();


const argumetFunc = function(num1){
    console.log(num1);
    console.log(arguments[1]);
console.log('------------');
    for (const arg of arguments) {
        console.log(arg);
    }
}


argumetFunc('2',3,4,{firstName: 'Kalle'}, []);

const test = function(summa){
    console.log('Sum: ' + summa);
}

// const callBackFunc = (nr1, nr2, cb) => {
//     let sum = nr1 + nr2;

//     setTimeout(() => {

//         cb(sum);

//     }, 2000);
// }

// callBackFunc(2,3, (summa) => console.log('Sum: ' + summa));
// callBackFunc(5,3, function(summa){
//     console.log('Sum: ' + summa);

// }); 

// callBackFunc(5,5, test );


const callBack2 = (numbers, cb) => {
    const numbersWichMeetCriteria = [];

    for (const num of numbers) {
        if(cb(num)){
            numbersWichMeetCriteria.push(num);
        }
    }

    return numbersWichMeetCriteria;
   
}

var res5 = callBack2([1,2,4,5,67,35], (num)=> num < 50);
console.log(res5);


//Methods

const names = ['Kalle', 'Fnatte', 'Tjatte'];

names.forEach(fName => {
    //....
    //...
    //...
})

let kallesName = names[0];
console.log(kallesName.toUpperCase());


const user = {
    firstName: 'Kalle',
    lastName: 'Anka',
    getFullName : function(){
        console.log(this);
        return this.firstName + ' ' + this.lastName;
    },
    getFullName2 : () => {
        console.log(this);
        return this.firstName + ' ' + this.lastName;
    }
   
  }

  console.log(user.getFullName2());
