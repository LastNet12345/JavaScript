const funk = (cb) => {
    //Asynkron kod
    setTimeout(()=> {
    cb('callback')
    }, 1000)
}

funk(m => console.log(m));


console.log(1);
console.log(2);
console.log(3);
console.log(4);


//synkron kod
for (let i = 0; i < 3; i++) {
   console.log('blocking ' + i);
}


console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);