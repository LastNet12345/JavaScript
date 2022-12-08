const namesArray = ['Joakim', 'Jeanette', 'Jack', 'Colin', 'Vince', 'Liam', 'Wille'];

const usersArray = [
  {id: '1', name: 'Joakim', email: 'joakim@mail.com', age: 34, status: true},
  {id: '2', name: 'Jeanette', email: 'jeanette@mail.com', age: 33, status: false},
  {id: '3', name: 'Jack', email: 'jack@mail.com', age: 5, status: false},
  {id: '4', name: 'Colin', email: 'colin@mail.com', age: 3, status: false},
  {id: '5', name: 'Vince', email: 'vince@mail.com', age: 1, status: false},
  {id: '6', name: 'L1im', email: 'liam@mail.com', age: 15, status: true},
  {id: '7', name: 'Wille', email: 'wille@mail.com', age: 9, status: false}
]

// FOR LOOPAR

// Loopa ett givet antal gånger
for (let i = 0; i < 5; i++) {
    // console.log(i);
   console.log(i, namesArray[i]);
  }

  console.log('---------------------');
  
  
  // Loopa igenom en hel array med en FOR
  // console.log(namesArray.length);
  for(let i = 0; i < namesArray.length ; i++) {
      console.log(namesArray[i]);
    }
    
    console.log('---------------------');


    //C# ForEach
    for(let user of usersArray) {
        // console.log(user);
        console.log(user.name);
    }
    
    console.log('---------------------');

    //FOR IN Loopar på medlemmarna i objektet
for(let prop in usersArray[0]){
    console.log(prop, usersArray[0][prop]);
  }

// for(let prop in usersArray){
//     console.log(prop.name);
//   }

//while, do while precis som i c#

// do {
//   console.log('do while: ' + i);
//   i++; // kom ihåg att inkrementera i! annars blir det en oändlig loop
// } while(i < 7);


  


