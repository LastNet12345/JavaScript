let number = 13;
let string = '14';

//två == jämför enbart värdet
console.log(number == string);

//tre === jämför både värdet och datatyp
console.log(number === string);

let res = number + +string;

console.log(res);

/*

        &&      och
        ||      eller
        !       inte
        <       mindre än
        >       större än
        <=      mindre eller lika med
        >=      större eller lika med

        !==    om det inte är lika med och inte har samma datatyp 
        !=     om det inte är lika med

*/

//Ternary
//condition ? expression : expression

let result = number < +string ? 'true' : {name: 'Kalle'};
console.log(result.name);

if(number < +string){

}

const car = {
    color: 'red',
    brand: 'Volvo'
}

switch(car.color){
    case 'red':
        console.log('color is red');
        break;

    default:
        console.log('default');
}