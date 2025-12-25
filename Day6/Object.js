// const newHero = ["hulk", "spider"]
// console.log(3)

// function multiply(num){
//     return num*5
// }
// multiply.power = 3
// console.log(multiply(2))
// console.log(multiply.power)
// console.log(multiply.prototype)

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`Score is ${this.score}`)
}
// console.log(createUser("rahul", "Hello"))
// console.log(createUser.prototype)

const chai = new createUser("chai", 32)
const tea = new createUser("tea", 89)

chai.printMe()
tea.printMe()
