// const conter = function () {
//     let count = 0

//     return {
//         increment: () => ++count,
//         decrement: () => --count,
//         getCount: () => count,
//         reset: () => (count = 0)
//     };
// }

// let re = conter()
// console.log(re.increment())
// console.log(re.reset())
// console.log(re.increment())
class Counter {
  #count = 10; 

  increment() { return ++this.#count; }
  decrement() { return --this.#count; }
  getCount() { return this.#count; }
  reset() { return this.#count = 0; }
}

const counter = new Counter();
console.log(counter.increment()); // 1
console.log(counter.count)
