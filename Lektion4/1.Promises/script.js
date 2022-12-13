const promiseFunc = (ok) => {
    return new Promise( (resolve, reject) => {
        if(ok){
            resolve('Success')
        }
        else{
            reject('Error')
        }
    })
}

// var res = promiseFunc(true);
// console.log(res);

// promiseFunc(false)
//             .then(data => console.log(data))
//             .catch(error => console.log(error))

class Database{

    static get(id, cb){
       
        console.log(1);
        console.log(2);

        setTimeout(()=> {
        cb(true, {id: id, prodName : 'Iphone'});
        }, 1000)
     
        console.log(3);
        console.log(4);
        console.log(5);

    }

}


 const getFromDb = async function(id){

    return new Promise( (resolve, reject)=> {

        Database.get(id, (isOK, data ) => {
            if(isOK){
                resolve(data);
            }
            else{
                reject('Failed to get from DB');
            }
        })
    })
 }

// const testF = async () => {
    
//    await getFromDb(12)
//                .then(data => console.log(data))
//                .catch(error => console.log(error));

// }

// await testF();

 await getFromDb(12)
            .then(data => console.log(data))
            .catch(error => console.log(error));




console.log(6);
console.log(7);
console.log(8);





