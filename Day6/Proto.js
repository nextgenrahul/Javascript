// let myHero = ["thor", "spider"]
// let heroPower = {
//     thor: 'hammer',
//     spiderman: "sling",
//     getSpiderPower : function(){
//         console.log(`Spider power is ${this.spiderman}`)

//     }
// }

// Object.prototype.myName = function(){
//     console.log(`I am Rahul.`)
// }
// Array.prototype.heyRahul = function(){
//     console.log("Hi Rahul tu array me bhi hai ha bhi mene hi add kara hi")
// }

// myHero.heyRahul()

// Inheritance
// const user = {
//     name: "chai",
//     email: "chiaorCode@gmail.com"
// }
// const teacher = {
//     makeVideo : true
// }

// const teacherSupport = {
//     isAva : false
// }
// const taSupport = {
//     makeAss : "js Assign",
//     fullTime: true,
//     __proto__: teacherSupport
// }

// teacher.__proto__ = user


// Object.setPrototypeOf(teacherSupport, teacher)

let anothername = "chaiaur           "
String.prototype.trueLen = function(){
    console.log(`${this}`)
    console.log(`True len: ${this.trim().length}`)
}
anothername.trueLen()

"icetea    ".trueLen()