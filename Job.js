// function letVarConst(){
//     if(true){
//         var a = 434;
//     }
// }
// letVarConst()



// const person = {
//   name: "John",

//   // Regular Function
//   sayHi: function() {
//     setTimeout(function() {
//       console.log("Hello, " + this.name); 
//     }, 1000);
//   },

//   // Arrow Function
//   sayHiFixed: function() {
//     setTimeout(() => {
//       console.log("Hello, " + this.name);
//     }, 1000);
//   }
// };

// person.sayHi();      // Output: "Hello, undefined" (this refers to the Window)
// person.sayHiFixed(); // Output: "Hello, John" (this refers to person)

// Closure
// function counter() {
//   let number = 0;
//   return (
//     function () {
//       number += 1
//       console.log(number)
//     }
//   )
// }

// const increment = counter();
// increment()
// increment()
// increment()


// This 
// const user = {
//   name: "Rahul",
//   greet() {
//     setTimeout(function () {
//       console.log(this.name);
//     }.bind(this), 1000);
//   }
// };

// user.greet(); // undefined


// Promise 

// const myPromise = new Promise((resolve, rejects) => {
//   const success = true
//   if(success){
//     resolve("Operations succeeded")
//   }else{
//     rejects(new Error("Something went wrong"))
//   }
// })

// myPromise
//   .then((value) => {
//     console.log("Great " , value)
//   }).catch((error) => {
//     console.log(error)
//   })


// Prototypal inheritance in javascript

// function Animal(name) {  
//   this.name = name
//   console.log(this.name)
// }

// Animal.prototype.speak = function(){
//   console.log(this.name, "makes sound")
// }

// // Animal("Rahul")
// Animal.speak

// class Animal{
//   constructor(name){
//     this.name = name
//   }

//   speak(){
//     console.log(`${this.name}, makes a sound`)
//   }
// }

// class Dog extends Animal{
//   constructor(name, breed){
//     super(name)
//     this.breed = breed
//   }

//   bark(){
//     console.log(`${this.breed}`)
//   }
// }

// const dog = new Dog("Pitu", "dolden")
// dog.speak()






