// const users = [
//     {
//         id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
//         name: "Moore Hensley",
//         email: "moorehensley@indexia.com",
//         eyeColor: "blue",
//         friends: ["Sharron Pace"],
//         isActive: false,
//         balance: 2811,
//         skills: ["ipsum", "lorem"],
//         gender: "male",
//         age: 37,
//       },
//       {
//         id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
//         name: "Sharlene Bush",
//         email: "sharlenebush@tubesys.com",
//         eyeColor: "blue",
//         friends: ["Briana Decker", "Sharron Pace"],
//         isActive: true,
//         balance: 3821,
//         skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//         gender: "female",
//         age: 34,
//       },
//       {
//         id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
//         name: "Ross Vazquez",
//         email: "rossvazquez@xinware.com",
//         eyeColor: "green",
//         friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//         isActive: false,
//         balance: 3793,
//         skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//         gender: "male",
//         age: 24,
//       },
//       {
//         id: "249b6175-5c30-44c6-b154-f120923736f5",
//         name: "Elma Head",
//         email: "elmahead@omatom.com",
//         eyeColor: "green",
//         friends: ["Goldie Gentry", "Aisha Tran"],
//         isActive: true,
//         balance: 2278,
//         skills: ["adipisicing", "irure", "velit"],
//         gender: "female",
//         age: 21,
//       },
//       {
//         id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
//         name: "Carey Barr",
//         email: "careybarr@nurali.com",
//         eyeColor: "blue",
//         friends: ["Jordan Sampson", "Eddie Strong"],
//         isActive: true,
//         balance: 3951,
//         skills: ["ex", "culpa", "nostrud"],
//         gender: "male",
//         age: 27,
//       },
//       {
//         id: "150b00fb-dd82-427d-9faf-2879ea87c695",
//         name: "Blackburn Dotson",
//         email: "blackburndotson@furnigeer.com",
//         eyeColor: "brown",
//         friends: ["Jacklyn Lucas", "Linda Chapman"],
//         isActive: false,
//         balance: 1498,
//         skills: ["non", "amet", "ipsum"],
//         gender: "male",
//         age: 38,
//       },
//       {
//         id: "e1bf46ab-7168-491e-925e-f01e21394812",
//         name: "Sheree Anthony",
//         email: "shereeanthony@kog.com",
//         eyeColor: "brown",
//         friends: ["Goldie Gentry", "Briana Decker"],
//         isActive: true,
//         balance: 2764,
//         skills: ["lorem", "veniam", "culpa"],
//         gender: "female",
//         age: 39,
//       },      
// ]

// const obj = {};

// for (const key in users[0]) {
// obj[key] = [];
// }
// console.log(obj);

// for (const itemKey in obj) {
//     for (const itemObj of users) {
//         obj[itemKey].push(itemObj[itemKey])
//     }
// }
// console.log(obj)

// const newObj ={}
// for (const key in obj) {
//     newObj[key] = obj[key].flat()
// }
// console.log(newObj)

// for (const key in newObj) {
//     newObj[key] = newObj[key].filter((item, index, arr) => newObj[key].indexOf(item) === index);
// }
// console.log(newObj[key]);

// Write a function that converts the argument values. If it will be a string, convert it to number and wise versa. 
// It should return an array of converted values.
// // convert(1, ‘2’, 3)
// [‘1’, 2, ‘3’]

// function convert(...args) {

// console.log(args);
// return args.map(arg => (typeof arg === 'string') ? Number.parseInt(arg) : arg.toString());

// }

// console.log(convert(1, '2', 3)); 
// console.log(convert('1', 2, '3'));


// Write a function - positiveSum 
// It should accept an array of numbers and return a result of their addition. But you must calculate only positive numbers and omit negative if any presents. 
// For example: 
// positiveSum([2, 4, 6, 8])   // => 20 
// positiveSum([0, -3, 5, 7])  // => 12

// const  positiveSum = value => (value.reduce((previousValue, number) => {
//     return previousValue + (number > 0 ? number : 0 );
//   }, 0))


// console.log(positiveSum([2, 4, 6, 8]))  // => 20 
// console.log(positiveSum([0, -3, 5, 7]))  // => 12

// Write a function – letterCount 
// It accepts two string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one. 
// If no occurrences can be found, a count of 0 should be returned. 
// For example: 
// letterCount("Maggy", "g") // => 2 
// letterCount("Barry", "b") // => 1 
// letterCount("", "z")      // => 0
