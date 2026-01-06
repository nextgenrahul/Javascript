// function outer(){
//     let x = 10;

//     function inner() {  
//         console.log(x)
//     }

//     return inner;
// }

// const fn = outer()
// fn()


// function counter() {
//   let count = 0;
//   return function () {
//     return ++count;
//   };
// }

// const inc = counter();
// inc(); // 1
// inc(); // 2
// console.log(inc())


// function multiplier(x) {
//   return function (y) {
//     return x * y;
//   };
// }

// const double = multiplier(2);
// const triple = multiplier(3);

// double(4); // 8
// triple(4); // 12

// const logger = (function () {
//   let logs = [];

//   return function (msg) {
//     logs.push(msg);
//     console.log(logs);
//   };
// })();

// logger("start");
// logger("end");


// function delayed(msg) {
//   setTimeout(() => {
//     console.log(msg);
//   }, 1000);
// }

// delayed("Hello");


// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1000);
// }

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1000);
// }

const makeAdder = x => y => x + y;

const add5 = makeAdder(5);
add5(3); // 8
console.log(add5(45))

let a = b => b+3;
console.log(a(23))