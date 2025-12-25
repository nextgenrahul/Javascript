// "use strict";

// function first() {
//   console.log("Inside first()");
//   second();
//   console.log("End of first()");
// }

// function second() {
//   console.log("Inside second()");
//   third();
//   console.log("End of second()");
// }

// function third() {
//   console.log("Inside third()");
// }

// console.log("Program start");
// first();
// console.log("Program end");






// const myModule = (function() {
//   let privateVar = "I'm private";

//   return {
//     getVar: function() {
//       return privateVar;
//     },
//     setVar: function(newValue) {
//       privateVar = newValue;
//     }
//   };
// })();

// console.log(myModule.getVar());  
// myModule.setVar("I'm updated");
// console.log(myModule.getVar()); 



// function greet(greeting) {
//   console.log(`${greeting}, ${this.name}`);
// }

// const person = { name: "Alice" };

// // bind
// const boundGreet = greet.bind(person);
// boundGreet("Hello"); 

// greet.call(person, "Hi"); // Hi, Alice

// // apply
// greet.apply(person, ["Hey"]); // Hey, Alice

// async function fetchData() {
//   try {
//     const response = await new Promise(resolve => {
//       setTimeout(() => resolve("Data fetched"), 1000);
//     });
//     console.log(response);
//   } catch (err) {
//     console.error(err);
//   }
// }

// fetchData(); // Output (after 1s): Data fetched

// function debounce(fn, delay) {
//   let timeoutId;
//   return function(...args) {
//     clearTimeout(timeoutId);
//     timeoutId = setTimeout(() => fn.apply(this, args), delay);
//   };
// }

// const logInput = debounce(value => console.log(value), 500);
// logInput("First");
// logInput("Second");
// logInput("Third");