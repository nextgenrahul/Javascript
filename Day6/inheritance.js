class User{
    constructor(username){
        this.username = username
    }
    logme(){
        console.log(`Username is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username, email, pass){
        super(username)
        this.email = email
        this.pass = pass
    }

    addCourse(){
        console.log(`New Course was added by ${this.username}`)
    }
}



const chai = new Teacher("chai", "chai@gmail", "123")
chai.logme()

console.log(chai instanceof User)

// const tea = new User("Rahul")
// tea.addCourse()