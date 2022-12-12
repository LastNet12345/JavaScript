const banan = {
    name : 'banan',
    price : 12,
    decription : 'Fruit',
    eat: function() {
      console.log(`You eat the ${this.name}!`);
    },
    eat2() {
      console.log(`You eat the ${this.name}!`);
    }
  }


//   const orange = {
//     productName: ''
//   }

 // banan.eat2();


 //Factory function

 function createProduct(name, price, desc){
    return{
        name,
        price,
        desc,
        eat(){
          console.log(`You eat the ${this.name}!`);
        }
    }
}

const prod  = createProduct('Banan', 12, 'gul');
const prod2  = createProduct('Apelsin', 15, 'gul');
 console.log(prod);
// prod.eat();
// prod.test = {firstName : 'Kalle'};
// prod.eat = [];
// console.log(prod);
// console.log(prod2);


//Constructor function

function Product(name, price, desc){
    this.prodName = name;
    this.price = price;
    this.desc = desc;
  }

//   let text = new String('en text');


  const prodBanan = new Product('Banna', 12, 'gul');
  const prodCar = new Product();
//   console.log(prodCar);
//   prodBanan.price = [];
//   prodBanan.test = {};
//   console.log(prodBanan);


  function ProductPrivate(name, price, desc){

    //Private
    let discount = 1;

    //Public prop
    Object.defineProperty(this, 'discount', {
        get: function(){
            return discount;
        },
        set: (value) => discount = value < 0 ? 0 : value
    })

    this.prodName = name;
    this.price = price;
    this.desc = desc;

    this.test = function(){
        console.log(discount);
    }
  }

  const privProd = new ProductPrivate('Bröd', 10, 'Dryck');
  privProd.discount = 5;
  privProd.test();
  console.log(privProd.discount);
  console.log(privProd);






