// function add(a, b){
//     return a + b;
// }
// let r = add(4 , 6)
// console.log(r);

// function addOrEven(num){
//     if(!Number.isInteger(num)){
//         return "Provided number is not a number";
//     }
//     if(num % 2 != 0){
//         return false
//     }
//     return true

// }

// let val = addOrEven(45+1.8);
// if(val){
//     console.log("Even")
// }else{
//     console.log("Odd")
// }

// function largestNumber(a, b, c){
//     if (a > b && a > c){
//         console.log("A is greater than b , c")
//     }else if(b > a && b > c){
//         console.log("B is greater than A , c")
//     }else{
//         console.log("C is greater than b , c")
//     }

// }

// largestNumber(0, 54, 6)

// let array = "rahul"
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element)
// }

// for (let char of array){
//     console.log(char)
// }

// function reverseString(str) {
//     if (typeof str !== "string") {
//         return "Please provide String"
//     }

//     let reverseStr = "";
//     for (let i = str.length-1; i >= 0; i--){
//         reverseStr += str[i];
//     }
//     return reverseStr

// }

// let reverse = reverseString("rahul")
// console.log(reverse)

// function factorialOfNumber(num) {
//     if (!Number.isInteger(num)) {
//         return "Provided number is not a number";
//     }
//     let fact = 1
//     for (let index = 2; index <= num; index++) {
//         fact *= index;
//     }
//     return fact
// }

// let result = factorialOfNumber(5)
// console.log(result)

// function checkVowel(str) {
//     let vowel = "aeiou";
//     if (typeof str !== "string") {
//         return "Please Provide String"
//     }
//     let count = 0;
//     for (let chars in str) {
//         if (vowel.includes(str[chars])) {
//             count += 1
//         }
//     }
//     return count

// }


// let result = checkVowel("skdfjs sdf lsdjfljf sdfasdfwe whiu")
// console.log(result)



// function twoSum(nums, target) {
//     const seen = new Map();
//     for (let i = 0; i < nums.length; i++) {
//         let complement = target - nums[i];
//         if (seen.has(complement)) {
//             console.log(seen.set(nums[i], i))
//             console.log([seen.get(complement), i])
//             // return [seen.get(complement), i];
//         }
//         seen.set(nums[i], i)
//     }
// }

// console.log(twoSum([12,2, 3, 1], 3));


// function twoSum(nums, target) {
//     const seen = new Map();
//     for (let i = 0; i < nums.length; i++) {
//         let complement = target - nums[i];
//         if (seen.has(complement)) {
//             return [seen.get(complement), i]
//         }
//         seen.set(nums[i],i)
//     }
// }


// console.log(twoSum([12, 2, 41, 1], 3))


// const { name , age } = {
//     name : "rahul",
//     age : 12
// }
// const {length} = "rahul"
// console.log(length)

// let a = +"1.1" + +"1.1"; // '1.11.1'
// console.log(a)


let a = -(2 ** 2) 
console.log(a) // When ever i map this loop empty slots are skiped and index a[2] is still remain undefined