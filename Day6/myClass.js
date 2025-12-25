// class User {
//     constructor(username, email, password) {
//         this.email = email
//         this.username = username
//         this.password = password
//     }

//     encryptPassword() {
//         return `${this.password}abc`
//     }

//     changeUsername() {
//         return `${this.username.toUpperCase()}`
//     }

// }

// const chai = new User('chai', "chai@gmail.com", "123")
// console.log(chai.encryptPassword())
// console.log(chai.changeUsername())

function User(username, email, password) {
    this.email = email
    this.username = username
    this.password = password
    
}

User.prototype.encryptPassword = function () {
    return `${this.password}abc`
}

User.prototype.changeUsername = function () {
        return `${this.username.toUpperCase()}`
    }
const users = new User("chai", "email", "23")
console.log(users.encryptPassword())