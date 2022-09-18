// Ex-1
// function checkAge(age) {
//     if (age >=18) { // Change this line
//       return "You are an adult";
//     }
  
//     return "You are a minor";
//   }

// Ex-2
// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
  
//     if (password === ADMIN_PASSWORD) {
//       return "Welcome!";
//     }  
//       return "Access denied, wrong password!";
//   }

// Ex-3
// function checkStorage(available, ordered) {
  
//     if (ordered === 0) {
//       return "Your order is empty!";
//     } if (ordered > available) {
//       return "Your order is too large, not enough goods in stock!";
//     } 
//      return "The order is accepted, our manager will contact you";
//   }

// Ex-4
// const fruits = ["apple", "plum", "pear", "orange"];

// Ex-5
// const fruits = ["apple", "plum", "pear", "orange"];

// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[3];

// console.log(lastElement);

// Ex-6
// const fruits = ["apple", "plum", "pear", "orange"];
// fruits.splice(1, 1, "peach");
// fruits.splice(3,1, "banana");

// console.log(fruits);

// Ex-7
// const fruits = ["apple", "peach", "pear", "banana"];
// const fruitsArrayLength = fruits.length;

// console.log(fruitsArrayLength);

// Ex-8
// const fruits = ["apple", "peach", "pear", "banana"];
// const lastElementIndex = fruits.length-1;
// const lastElement = fruits[lastElementIndex];

// console.log(lastElementIndex);
// console.log(lastElement);

// Ex-9
// function getExtremeElements(array) {

//     array = [array[0], array[(array.length-1)]];
//     return array;

//   }

// Ex-10
// function splitMessage(message, delimeter) {
//   let words;
//  words = message.split(delimeter);
//   return words;
// }
// console.log(splitMessage("Mango hurries to the train", " "));
// console.log(splitMessage("Mango", ""));


// Ex-11
// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line


//   return ((message.split(" ").length) * pricePerWord);



//   // Change code above this line
// }
// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));

// Ex-12
// function makeStringFromArray(array, delimiter) {
//   let string;
//   // Change code below this line

// string = array.join(delimiter);

//   // Change code above this line
//   return string;
// }

// Ex-13
// function slugify(title) {
//   // Change code below this line
 
//   return slug = title.toLowerCase().split(' ').join('-');

// }
// console.log(slugify("Arrays for begginers"));

// Ex-14
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(2, 5);

// Ex-15
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients); 
// console.log(allClients);

// Ex-16
// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line

//   const allClients = firstArray.concat(secondArray).slice(0, maxLength);
//   return allClients;

//   // Change code above this line
// }
// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));

// Ex-17
// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i +=1 ) {
//   console.log(i);
// }

// Ex-18
// function calculateTotal(number) {

//   let total = 0;
// for (let i = 0; i <= number; i+=1) {
//   total += i
// }

// return total

// }
//  console.log(calculateTotal(3));

// // Ex-19
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i<= fruits.length; i +=1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }


// Ex-20
// function calculateTotalPrice(order) {
//     let total = 0;
//     // Change code below this line
//     for (let i=0; i < order.length; i += 1)
// //    console.log(order[i])
//    total += order[i]
  
//     // Change code above this line
//     return total;
//   }
//   console.log(calculateTotalPrice([12, 85, 37, 4]));
//   console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// Ex-21
// function findLongestWord(string) {

//   const words = string.split(" ");
//   let biggestWord = words[0];

//   for (const word of words) {
//       if (word.length > biggestWord.length) {
//         biggestWord = word;
//     }
//   }
//   return biggestWord;
// }
//   console.log(findLongestWord("Google do a roll"));
//   console.log(findLongestWord("May the force be with you"));
//   console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
  
// Ex-22
// function createArrayOfNumbers(min, max) {
//     const numbers = [];
// for (let i = min; i<= max; i+= 1) {
//     numbers.push(i);
// }

//     return numbers;
//   }
//   console.log(createArrayOfNumbers(14, 17));
  
// Ex-23
// function filterArray(numbers, value) {
//     // Change code below this line
//     let newArray = []
//  for (let i=0; i < numbers.length; i +=1) {
//   let number = numbers[i];
//   if (number > value) {
//     newArray.push(number);
//   }
//  }
//  return newArray;
//    // Change code above this line
//  }
//  console.log(filterArray([1, 2, 3, 4, 5], 3));

// Ex-24
// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes(fruit); // Change this line
// }
// console.log(checkFruit("apple")); 
// console.log(checkFruit("plum")); 
// console.log(checkFruit("Pear")); 

// Ex-25

// function getCommonElements(array1, array2) {
//   // Change code below this line
//   let newArray = [];
//   for (let i = 0; i < array1.length; i += 1) {
//   let allElements = array1[i];
//   if (array2.includes(allElements)) {
//     newArray.push(allElements);
//   }
//  }
//  return newArray
// }
//  // Change code above this line
//  console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));

// Ex-26
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (const value of order) {
//     total += value;
//   }


//   // Change code above this line
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));

// Ex-27
// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (const number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([12, 24, 8, 41, 76], 38));

// 5 % 1 = 0;
// // 5, поділене на 1, дорівнює 5, а остача - 0

// 5 % 2 = 1;
// //  5, поділене на 2, дорівнює 2, а остача - 1

// 5 % 3 = 2;
// //  5, поділене на 3, дорівнює 1, а остача - 2

// 5 % 4 = 1;
// //  5, поділене на 4, дорівнює 1, а остача - 1

// 5 % 5 = 0;
// //  5, поділене на 5, дорівнює 1, а остача - 0

// Ex-28
// const a = 3 % 1; 
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 3;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// Ex-29
// function getEvenNumbers(start, end) {
// const numbers = [];
// for (let i = start; i <= end; i +=1) {
//  if (i % 2 === 0){
//   numbers.push(i)
//  }
// }
// return numbers;
//  }
//  console.log(getEvenNumbers(6, 12));

// Ex-30
// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// Ex-31
// function findNumber(start, end, divisor) {
//   // Change code below this line
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       number = i;
//      return number;
//     }
//   }

//   // Change code above this line
// }

// Ex-32
// function includes(array, value) {
//  for (let i = 0; i<=array.length; i +=1) {
//   if (array[i] === value) {
//     return true;
//   }
//  }
//  return false
// }

// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus"));
// console.log(includes([1, 2, 3, 4, 5], 3));


