// function createFibCache() {
//   const cache = {}; 
  
//   return function fib(n) { 
//     if (n in cache) {
//       return cache[n];  
//     }
//     if (n <= 1) {
//       cache[n] = n;
//       return n;
//     }
//     cache[n] = fib(n - 1) + fib(n - 2);

//     console.log(cache[n])
//     return cache[n];
//   };
// }

// const cachedFib = createFibCache();
// // console.log(cachedFib(5)); 
// // console.log(cachedFib(5));
// console.log(cachedFib(10));
// Module pattern per example 
const MyModule = (function() {
  // Private variables and functions
  let privateVar = "Hidden";
  function privateFunction() {
    console.log("Private: " + privateVar);
  }

  // Public API
  return {
    publicMethod: function() {
      privateFunction();  // Access private via closure
      return "Public access granted";
    },
    setPrivate: function(newVal) {
      privateVar = newVal;  // Modify private
    }
  };
})();

console.log(MyModule.publicMethod()); // "Private: Hidden" then "Public access granted"
MyModule.setPrivate("Updated");
console.log(MyModule.publicMethod()); // "Private: Updated" then "Public access granted"

// privateVar is inaccessible: console.log(privateVar); // undefined


