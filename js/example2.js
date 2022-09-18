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

// Ex-19

const fruits = ['apple', 'plum', 'pear', 'orange'];

for (let i = 0; i<= fruits.length; i +=i) { // Change this line
  const fruit = fruits[i]; // Change this line
  console.log(fruit);
}
