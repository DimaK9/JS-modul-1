// Ex 1-4
// Доповни код таким чином, щоб у змінній result був результат виконання функції makePizza, а у змінній pointer було посилання на функцію makePizza.

// function makePizza() {
//     return "Your pizza is being prepared, please wait.";
//   }
//   // Change code below this line
  
//   const result = makePizza();
//   const pointer = makePizza;
//   console.log(result);
//   console.log(pointer);

// Ex 2-4
// Доповни функцію makeMessage таким чином, щоб вона очікувала другим параметром (параметр callback) колбек-функцію і повертала її виклик. Функція deliverPizza або makePizza буде передаватися як колбек і очікувати аргументом ім'я готової піци, що доставляється.
// function deliverPizza(pizzaName) {
//     return `Delivering ${pizzaName} pizza.`;
//   }
  
//   function makePizza(pizzaName) {
//     return `Pizza ${pizzaName} is being prepared, please wait...`;
//   }
  
//   // Chande code below this line
//   function makeMessage(pizzaName, callback) {
//     return callback(pizzaName);  
//   }
// console.log(makeMessage("Royal Grand", makePizza));
// console.log(makeMessage("Ultracheese", deliverPizza));

// Ex 3-4
// function makePizza(pizzaName, callback) {
//     console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//     callback(pizzaName);
//   }
  
//   makePizza("Royal Grand", function deliverPizza(pizzaName) {
//     console.log(`Delivering pizza ${pizzaName}.`);
//   });
//   // Change code below this line
  
//   makePizza("Ultracheese", function eatPizza(pizzaName) {;
//   });

// Ex 4-4
// const pizzaPalace = {
//     pizzas: ["Ultracheese", "Smoked", "Four meats"],
//     order(pizzaName, onSuccess, onError) {
//       for (const item of this.pizzas) {
//         if (item === pizzaName) {
//           return onSuccess(pizzaName);
//         }
//       }
//       return onError(`There is no pizza with a name ${pizzaName} in the assortment.`)
//     },
//   };
//   // Change code above this line
  
  
//   // Callback for onSuccess
//   function makePizza(pizzaName) {
//     return `Your order is accepted. Cooking pizza ${pizzaName}.`;
//   }
  
//   // Callback for onError
//   function onOrderError(error) {
//     return `Error! ${error}`;
//   }
  
//   // Method calls with callbacks
//   pizzaPalace.order("Smoked", makePizza, onOrderError);
//   pizzaPalace.order("Four meats", makePizza, onOrderError);
//   pizzaPalace.order("Big Mike", makePizza, onOrderError);
//   pizzaPalace.order("Vienna", makePizza, onOrderError);

// Ex 5-4
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   // Change code below this line
//   orderedItems.forEach(function (item, idx) {
//   totalPrice +=item;
// })
//   // for (let i = 0; i < orderedItems.length; i += 1) {
//   //   totalPrice += orderedItems[i];
//   // }

//   // Change code above this line
//   return totalPrice;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));

// Ex 6-4
// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   numbers.forEach(function (numbers, values) {
//     if (numbers > value) {
//           filteredNumbers.push(numbers);
//         }
//   });
//   return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));

// Ex 7-4
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   firstArray.forEach(function (firstArray) {
//     if (secondArray.includes(firstArray)) {
//       commonElements.push(firstArray);
//     }
//   })

//   // for (let i = 0; i < firstArray.length; i += 1) {
//   //   if (secondArray.includes(firstArray[i])) {
//   //     commonElements.push(firstArray[i]);
//   //   }
//   // }

//   return commonElements;
//   // Change code above this line
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));

// Ex 8-4
// const calculateTotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
// }
// console.log(calculateTotalPrice(5, 100));

// Ex 9-4
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// Ex 10-4

// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach((item) => totalPrice += item);

//   return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));


// Ex 11-4
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   return filteredNumbers;
// }

// Ex 12-4
// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach((element) => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   return commonElements;
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));

// Ex 13-4
// function changeEven(numbers, value)  {
// const newArray = [];
// numbers.forEach(el => {
//     if (el % 2 === 0) {
//       newArray.push(el + value)
//     }
//     else newArray.push(el)
//   });
//   return newArray;
// };
// console.log(changeEven([1, 2, 3, 4, 5], 10));

// Ex 14-4
// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// const planetsLengths = planets.map(planet => planet.length);

// console.log(planetsLengths);


// Ex 15-4
// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
//   ];
  
//   const titles = books.map(book => book.title);
//   console.log(titles);

  // Ex 16-4
//   const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       genres: ["adventure", "history"],
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       genres: ["fiction"],
//     },
//     {
//       title: "Redder Than Blood",
//       author: "Tanith Lee",
//       genres: ["horror", "mysticism"],
//     },
//   ];
  
//   const genres = books.flatMap(book => book.genres);


  // Ex 17-4
//   const getUserNames = users => {
//     const name = users.map((item) => item.name)
//     return name

// };


  // Ex 18-4
//   const getUserEmails = users => {
//     const email = users.map((item) => item.email)
//         return email
//     };


  // Ex 19-4
//   const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 != 0);
// console.log(evenNumbers);
// console.log(oddNumbers);


  // Ex 20-4
//   const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       genres: ["adventure", "history"],
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       genres: ["fiction", "mysticism"],
//     },
//     {
//       title: "Redder Than Blood",
//       author: "Tanith Lee",
//       genres: ["horror", "mysticism", "adventure"],
//     },
//   ];
//   // Change code below this line
//   const allGenres = books.flatMap(book => book.genres);
//   const uniqueGenres = allGenres.filter((genres, index, array) => array.indexOf(genres) === index);

//   console.log(allGenres);
//   console.log(uniqueGenres);


  // Ex 21-4
//   const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
//   ];
  
//   const MIN_RATING = 8;
//   const AUTHOR = "Bernard Cornwell";
//   // Change code below this line
  
//   const topRatedBooks = books.map(book => book.rating >= MIN_RATING);
//   const booksByAuthor = books.flatMap(book => book.author === AUTHOR);
//    console.log(topRatedBooks);

  // Ex 22-4
//   const getUsersWithEyeColor = (users, color) => 
//  users.filter(user => (user.eyeColor === color));

  // Ex 23-4
  
//   const getUsersWithAge = (users, minAge, maxAge) => users.filter(user => (user.age >= minAge && user.age <= maxAge));

  // Ex 24-4
//   const getUsersWithFriend = (users, friendName) => {
//    return users.filter(user => (user.friends.includes(friendName)));
// };

//   // Ex 25-4
//   const allFriends = [];
//   const getFriends = (users) => {
//     const allFriends = users.flatMap(user => user.friends);

//     const uniqueFriend = allFriends.filter(
//         (friend, index, array) => array.indexOf(friend) === index);
//    return uniqueFriend
   
// };


//   // Ex 26-4
// const getActiveUsers = (users) => {
//     const result = users.filter(user =>{
//         if(user.isActive){
//             return user
//         }
//     })
//    return result
// };




//   // Ex 27-4
// const getInactiveUsers = (users) => {
//     const result = users.filter(user => {
//         if(!user.isActive){
//             return user
//                 }
//             })
//            return result
//         };


//   // Ex 28-4
// const books = [
//     {
//       title: 'The Last Kingdom',
//       author: 'Bernard Cornwell',
//       rating: 8.38,
//     },
//     {
//       title: 'Beside Still Waters',
//       author: 'Robert Sheckley',
//       rating: 8.51,
//     },
//     {
//       title: 'The Dream of a Ridiculous Man',
//       author: 'Fyodor Dostoevsky',
//       rating: 7.75,
//     },
//     { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   ];
//   const BOOK_TITLE = 'The Dream of a Ridiculous Man';
//   const AUTHOR = 'Robert Sheckley';

//   const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
//   const bookByAuthor = books;


//   // Ex 28-4
// const getUserWithEmail = (users, email) => {
//     const result = users.find(user => {
//      if(user.email === email) {
//          return user
//      }
//     })
//     return result
//  };

 
// Ex 29-4
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven =  firstArray.every(firstArray =>  firstArray % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every(firstArray =>  firstArray % 2 != 0);

// const eachElementInSecondIsEven = secondArray.every(secondArray =>  secondArray % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every(secondArray =>  secondArray % 2 != 0);

// const eachElementInThirdIsEven = thirdArray.every(thirdArray =>  thirdArray % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every(thirdArray =>  thirdArray % 2 != 0);

 
// Ex 30-4
// const isEveryUserActive = (users) => {
//    const result = users.every(user => {
//     if(user.isActive){
//         return user
//     }
//    })
//    return result
// };

 
// Ex 31-4
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change below this line

// const anyElementInFirstIsEven = firstArray.some(firstArray =>  firstArray % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some(firstArray =>  firstArray % 2 != 0);


// const anyElementInSecondIsEven = secondArray.some(secondArray =>  secondArray % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some(secondArray =>  secondArray % 2 != 0);

// const anyElementInThirdIsEven = thirdArray.some(thirdArray =>  thirdArray % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some(thirdArray =>  thirdArray % 2 != 0);

// Ex 33-4

// const isAnyUserActive = users => {
//      const result = users.some(user => {
//             if(user.isActive){
//                 return user
//             }
//            })
//            return result
//         };


// Ex 34-4
// const players = {
//     mango: 1270,
//     poly: 468,
//     ajax: 710,
//     kiwi: 244
//   };
//   const playtimes = Object.values(players); // [1270, 468, 710, 244]
//   // Change code below this line
  
//   const totalPlayTime = playtimes.reduce((total, player)=> {
//     return total + player;
//   });
  
//   // Change code above this line
//   const averagePlayTime = totalPlayTime / playtimes.length;


// Ex 35-4
// const players = [
//     { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//     { name: "Poly", playtime: 469, gamesPlayed: 2 },
//     { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//     { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
//   ];
//   // Change code below this line
  
//   const totalAveragePlaytimePerGame = players.reduce((total, item) => {
//     return total +item.playtime / item.gamesPlayed;
//   }, 0); 
//   console.log(totalAveragePlaytimePerGame);



// Ex 36-4
// const calculateTotalBalance = users => {
//   const result = users.reduce((acc, user) => {
// return acc + user.balance;
//   }, 0)
//    return result
// };


// Ex 37-4
// const calculateTotalBalance = users => {
//   const result = users.reduce((acc, user) => {
// return acc + user.friends.length;
//   }, 0)
//    return result
// };

// Ex 38-4

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = authors;


// Ex 39-4
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a -b);

// const descendingReleaseDates = [...releaseDates].sort((a, b) => b -a);


// Ex 40-4
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];
// // Change code below this line

// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));

// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

// Ex 41-4
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { 
//     title: "Redder Than Blood", 
//     author: "Tanith Lee", 
//     rating: 7.94 
//   },
//   { 
//     title: "Enemy of God", 
//     author: "Bernard Cornwell", 
//     rating: 8.67 
//   },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort((firstBook, secondBook) =>
//   firstBook.author.localeCompare(secondBook.author));

// const sortedByReversedAuthorName = [...books].sort((firstBook, secondBook) =>
//   secondBook.author.localeCompare(firstBook.author));

// const sortedByAscendingRating = [...books].sort((firstBook, secondBook) =>
//   firstBook.rating- secondBook.rating);

// const sortedByDescentingRating = [...books].sort((firstBook, secondBook) =>
//   secondBook.rating- firstBook.rating);


// Ex 42-4
const sortByAscendingBalance = [...users].sort((firstUser, secondUser) => secondUser.balance -firstUser.balance )
