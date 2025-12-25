'use strict';
// Normal function: 'this' depends on call context
// const obj = {
//   name: 'Rahul',
//   greet: function() {
//     console.log('Hello, ' + this.name);
//   }
// };

// obj.greet(); // Output: Hello, Rahul ('this' is obj)

// const looseGreet = obj.greet;
// looseGreet(); // Output: Hello, undefined ('this' is global/window, no name)

// function greet() {
//   console.log(this.name);
// }

// global.name = "Rahul";
// // greet()

// // Arrow function: 'this' is inherited from outer scope
// const objArrow = {
//   name: 'Rahul',
//   greet: () => {
//     console.log('Hello, ' + this.name); // 'this' from outer (global) scope
//   }
// };

// objArrow.greet(); // Output: Hello, undefined ('this' not bound to objArrow)

// const outer = {
//   name: 'Outer Rahul',
//   inner: () => console.log('Inner: ' + this.name) // Lexical 'this' from outer
// };
// outer.inner(); // Output: Inner: Outer Rahul

// Add to Function.prototype for all functions
// Function.prototype.myBind = function(context, ...args) {
//   if (typeof this !== 'function') throw new TypeError('Not a function');

//   const originalFn = this; // The function we're binding
  
//   return function(...innerArgs) { // Returned bound function
//     return originalFn.apply(context, [...args, ...innerArgs]);
//   };
// };

// // Usage
// const person = { name: 'Rahul' };
// function greet(greeting) { console.log(greeting + ', ' + this.name); }

// const bound = greet.myBind(person, 'Custom Bind');
// bound(); // Output: Custom Bind, Rahul