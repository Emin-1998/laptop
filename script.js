"use strict";

// if (1) {
//   console.log("Ok!");  
// } else {
//   console.log("Error");
// }

// const num = 50;

// if (num < 49) {
//    console.log("Error");
// } else if (num > 100) {
//    console.log("Много"); 
// } else {
//    console.log("Ok!");
// }
// (num === 50) ? console.log("Ok!") : console.log("Error");

// const num = "50";

// switch (num) {
//     case "49":
//         console.log("Неверно");
//         break;
//     case "100":  
//         console.log("Неверно"); 
//        break;
//     case "50":  
//        console.log("В точку");
//        break;   
//     default:  
//        console.log("Не в этот раз");  
//        break;    
// }
// const hamburger = 5;
// const fries = null;

// if (hamburger && fries) {
//     console.log("Я сыт!");
// }
// console.log((hamburger && fries));
const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola ===2 || fries === 3 && nuggets) {
  console.log("Все довольны");
} else {
  console.log("Мы уходим") 
}
console.log(hamburger === 3 && cola ===2 || fries === 3 && nuggets);

// let johnReport, alexReport, samReport, mariaReport = "done";

// console.log(johnReport || alexReport || samReport || mariaReport);