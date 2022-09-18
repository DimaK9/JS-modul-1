// You need to calculate amount of tip to give in a restaurant/cafe.
// 	Workflow:
// 1.	User inputs check summ. (Use “prompt” function).
// 2.	User inputs tip percentage. (Use “prompt” function)
// 3.   For cancelled input show “Canceled.”
// 4.	You need to validate the input data: both values should be numbers, check summ can’t be
// a negative number, percentage can’t be negative and bigger than 100.
// 5.	If input data isn’t valid, you should show message “Invalid input data”. (Use “alert” function).
// 6.	You need to calculate tip amount and total sum to pay.
// 7.	Show message: (example). Use ”alert” function
// Check summ: 200
// Tip: 15%
// Tip amount: 30
// Total sum to pay:  230


// const summ = prompt('Input check sum !');
// const percentage = prompt('Input percentage !');

// if (summ === null || percentage === null) {
//     alert("canceled");
// } else {
//     const perseSum = Number.parseFloat(summ);
//     const persePercentage = Number.parseFloat(percentage);

//     if (Number.isNaN(perseSum) || Number.isNaN(persePercentage) || perseSum <= 0 || persePercentage < 0 || persePercentage > 100) {
//         alert("Invalid input data");
//     } else {
//         const percentageSum = Number((perseSum / 100 * persePercentage).toFixed(2));
//         const total = perseSum + percentageSum;
//         alert(`Check summ: ${perseSum}
//         Tip: ${persePercentage}%
//         Tip amount: ${percentageSum} 
//         Total sum to pay: ${total}`);
//     }
// }

