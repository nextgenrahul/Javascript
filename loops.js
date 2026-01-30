// const numbers = [1, 2, 3, 4];

const { count } = require("node:console");

// numbers.forEach((element, index, array) => {
//     console.log(element , index, array)
//     array[index] = element * 2

// });

// console.log(numbers)

// const users = [
//   { name: "Rahul", active: true },
//   { name: "Aman", active: false }
// ];
// users.forEach(user => {
//   if (!user.active) {
//     console.log(`${user.name} is inactive`);
//   }
// });
// console.log(users)


// const prices = [100, 200, 300];
// let total = 0;

// prices.forEach(element => {
//     total += element
// })

// console.log(total)

// const arr = [1, 2, 3, 4, 5, 6];


// const newArr = arr.map((item, index, array) => {
//     return item += 2;
// });


// console.log(arr)
// console.log(newArr)


// const users = [{ id: 1, email: "a@mail.com" }];

// const response = users.map(u => ({
//     userId: u.id,
//     email: u.email,
//     name : 'rahul'
// }));

// console.log(response)

// const prices = [{id : 100}, {id : 200}, {id : 300}, {id : 400}, {id : 500}];
// const withTax = prices.map(p => {

//     return p * 1.18
// }
// );
// console.log(withTax)

// const withTax = prices.map(u => {
//     return u.id === 300 ? {...u, isActive : "active"} : u
// });

// console.log(withTax)

// const arr = [1, 2, 3,4]

// const newArr = arr.map(String)

// console.log(newArr)

// const arr = [1, 2, 3, 4]
// let initialValue = 0;
// const total = arr.reduce((accumulator, current, index, array) => {
//     console.log(accumulator, current, index, array)
//     return accumulator + current;
// }, initialValue);

// console.log(arr)

// console.log(total)

const votes = ["yes", "no", "yes"];

// const total = votes.reduce((count, v) => {
//   count[v] = (count[v] || 0) + 1;
//   return count;
// }, {});
const total = votes.reduce((count,v) => {
    console.log(count[v], v)
    count[v] = (count[v] || 0) + 1;
    return count;
}, {})
console.log(total)













