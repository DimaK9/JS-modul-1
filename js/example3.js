// Ex-12-3
// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   const keys = Object.keys(object);
//   for (const key of keys) {
//     propCount += 1;
//   } 
//   return propCount;
// }
// console.log(countProps({}));
// console.log(countProps({ name: "Mango", age: 2 }))
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));


// Ex-13-3
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// console.log(keys);

// for (const key of keys) {
//   values.push(apartment[key]);
// }

// console.log(values);

// Ex-14-3
// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;

//   const keys = Object.keys(object);

//   for (const key of keys) {
//     propCount += 1;
//   }

//   return propCount;
//   // Change code above this line
// }
// console.log(countProps({}));
// console.log(countProps({ name: "Mango", age: 2 }))
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

// Ex-15-3
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// Ex-16-3

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   const values = Object.values(salaries);

// for (const value of values) {
//   totalSalary +=value;
// }
//   // Change code above this line
//   return totalSalary;
// }
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));

// Ex-17-3
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);

// Ex-18-3
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//  for (const product of products) {
//   if (product.name === productName) {
//     return product.price;
//   };
//  }
// return null;

//   // Change code above this line
// }
// console.log(getProductPrice("Scanner"));

// Ex-19-3
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   const array = [];

// for (const product of products) {
//   const keys = Object.keys(product);
//   for(let key of keys) {
//     if(propName === key) {
//       array.push(product[propName])
//     }
//   }
// }
// return array
// }

// Ex-20-3
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//  for (const product of products) {
//   if (product.name === productName) {
//     return product.price*product.quantity;
//   }
// }
//   return 0
//  }
//  console.log(calculateTotalPrice("Radar"));
//  console.log(calculateTotalPrice("Blaster"));

// Ex-21-3
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const { yesterday, today, tomorrow } = highTemperatures

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(meanTemperature);

// Ex-22-3
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const { yesterday, today, tomorrow, icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } = highTemperatures


// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(meanTemperature);

// Ex-23-3
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const { yesterday: highYesterday, today: highToday, tomorrow: highTomorrow, icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } = highTemperatures

// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// Ex-24-3
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const { hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }
// console.log(hexColors);

// Ex-25-3
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line
// const {today: {low: lowToday, high: highToday, icon: todayIcon ="https://www.flaticon.com/svg/static/icons/svg/861/861059.svg" }, tomorrow: { low: lowTomorrow, high:highTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } } = forecast

// Ex-26-3

// function calculateMeanTemperature(forecast) {
//   const {today: { low: todayLow, high: todayHigh},
//   tomorrow: { low: tomorrowLow, high: tomorrowHigh}} = forecast;
//   // const todayLow = forecast.today.low;
//   // const todayHigh = forecast.today.high;
//   // const tomorrowLow = forecast.tomorrow.low;
//   // const tomorrowHigh = forecast.tomorrow.high;

//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }
// console.log(calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} }));
// console.log(calculateMeanTemperature({ today: {low: 37, high: 40}, tomorrow: {low: 33, high: 38} }));


// Ex-27-3
// const scores = [89, 64, 42, 17, 93, 51, 26];

// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);
// console.log(bestScore);

// Ex-28-3
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// Ex-29-3
// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = {...defaultSettings, ...overrideSettings};

// Ex-30-3
// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
// return {completed, category, priority, ...data}
//   // Change code above this line

// }
// console.log(makeTask({}));
// console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));

// Ex-31-3
// function add(...args) {
// let total = 0;
// for (const arg of args) {
//   total +=arg
// }
// return total;
// }

// console.log(add(15, 27));

// Ex-32-3
// function addOverNum(num, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > num) 
//       total +=arg;
//   }
//   return total;
// }
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
// console.log(addOverNum(15, 32, 6, 13, 19, 8));
// console.log(addOverNum(50, 15, 27));

// Ex-33-3
// function findMatches(objects, ...args) {
//   const matches = []; // Don't change this line
// for (const object of objects) {
//   if (args.includes(object)) {
//   matches.push(object);
//   }
// }
//   // Change code above this line
//   return matches;
// }
// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));


// Ex-34-3
// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   updateBook(oldName, newName){
//     return `Updating book ${oldName} to ${newName}`
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`
//   }
//   // Change code above this line
// };
// console.log(bookShelf.updateBook("Sands of dune", "Dune"));

// Ex-35-3
// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
// const bookName = this.books.indexOf(oldName);
// this.books.splice(bookName, 1, newName);


//     // Change code above this line
//   },
// };



// Ex-36-3
// const bookShelf = {
//     books: ["The Last Kingdom", "Dream Guardian"],
//     // Це метод об'єкта
//     getBooks() {
//       console.log("Цей метод буде повертати всі книги - властивість books");
//     },
//   };
// bookShelf.getBooks();

// Ex-37-3
// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     // Change code below this line
//   getPotions (){
//     return this.potions;
//   },
//     // Change code above this line
//   };
//   console.log(atTheOldToad.getPotions());


// Ex-38-3
// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     addPotion(potionName) {
//         this.potions.push(potionName);
//     },
//   };


// Ex-39-3
// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     removePotion(potionName) {
//       // Change code below this line
//       const bookPotion = this.potions.indexOf(potionName);
//     this.potions.splice(bookPotion, 1);
//       // Change code above this line
//     },
//   };



// Ex-40-3
// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     updatePotionName(oldName, newName) {
//       // Change code below this line
//       const potionName = this.potions.indexOf(oldName);
//       this.potions.splice(potionName, 1, newName);
  
//       // Change code above this line
//     },
//   };
  
//   console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));


// Ex-41-3
// const atTheOldToad = {
//     potions: [
//       { name: "Speed potion", price: 460 },
//       { name: "Dragon breath", price: 780 },
//       { name: "Stone skin", price: 520 },
//     ],
//     // Change code below this line
//     getPotions() {
//       return this.potions;
//     },
//     addPotion(newPotion) {
//         for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//       return this.potions.push(newPotion);
//     },

//     removePotion(potionName) {
//         for (const potion of this.potions) {
//       const potionIndex = this.potions.indexOf(potion);
//       if (potionName === potion.name) {
//         this.potions.splice(potionIndex, 1);
        
//       }
//     }
//       return `Potion ${potionName} is not in inventory!`;
//     },

//       updatePotionName(oldName, newName) {
//       for (const potion of this.potions) { 
//           if (potion.name === oldName) {
//           potion.name = newName;
//       }
//     }
//       return `Potion ${oldName} is not in inventory!`;
//     },
//   };

// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// // Change code below this line

// const result = null;
// const pointer = null;
