// const obj = {
//     name: 'rahul',
//     age: 23
// };

const { error } = require("node:console");

// obj.color = "white";
// console.log(obj)

// // obj = { // It give error bcz 
// //     new: 'life'
// // }
// obj.name = "sunil"
// console.log(obj)


// What is the output of:

// console.log(typeof undefined);
// console.log(typeof null);
// console.log(null == undefined)
// console.log(null === undefined)



// The var Trap (The most common variation):

// Question: What is the output if the code was for(var i=0; i<3; i++){} console.log(i);?

// Answer: 3.

// Why: var is function-scoped, not block-scoped. It "leaks" out of the loop and remains available after the loop finishes.

// for (var i = 0; i < 3; i++) {
//     console.log(i)
// }

// console.log(i)

// for (var i = 0; i < 3; i++) {
//     console.log(i)
//     setTimeout(() => console.log(i), 1);
// }

// What does function return if no return statement is written
// function check(){
//     console.log("Hello World");
// }

// const result = check();
// console.log(result)

// function Person() {
//     this.name = "Rahul"
// }
// const result = new Person();
// console.log(result.name)

// console.log(1 + "2" + 3);
// const pi = 3.14;
// var pi = 4;
// console.log(pi)
// console.log(Boolean({}))
// function heck() { 
//     var a = 34;
//  }

//  console.log(a)


// const promise = new Promise((resolve, reject) => {
//   const success = false;

//   if (success) {
//     resolve("Operation successful");
//   } else {
//     reject("Operation failed");
//   }
// });

// const a = promise
//   .then(result => console.log(result))
// //   .catch(error => console.error(error))
// //   .finally(() => console.log("Done"));

// a.catch(error => console.log("Error showing"))
// async function name(params) {
//     return 10;
// }

// async function main() {
//   const value = await name();
//   console.log(value); // 10
// }

// main();
// name().then(value => {
//   console.log(value); // 10
// });

// Promise.resolve(5).then(console.log);
// console.log(Promise.resolve(5)); // Promise { <fulfilled>: 5 }



// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr.splice(2, 0, 23,2222))
// console.log(arr.splice(2, 0))
// console.log(arr)


// const fruits = ["Banana", "Orange", "Cpple", "Mango"];
// // fruits.sort();
// // console.log(fruits)


// const arr = [1, 2, 3];
// const sum = arr.reduce((acc, cur) => {
//     console.log(cur)
//     return acc + cur
// }, 0);

// console.log(sum); // 6


// const arr = [1, 2, 3, 4];
// const result = arr.slice(1, 3);

// console.log(result.push(32));
// console.log(arr);   











