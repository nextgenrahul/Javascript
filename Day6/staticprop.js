// class User{
//     constructor(username){
//         this.username = username
//     }
//     logMe(){
//         console.log(`Username ${this.username}`)
//     }
//     static createID(){
//         return `123`
//     }
// }


// const user = new User("Rahul")
// console.log(user.createID())

// class Teacher extends User{
//     constructor(username, email){
//         super(username)
//         this.email = email

//     }
// }
// const iphone = new Teacher("iphone", "ii@gmail")
// console.log(iphone.logMe())

class User{
    constructor(username){
        this.username = username
    }
    logeMe(){
        console.log(this.username)
    }
    static createId(){
        console.log("123")
    }
}

const c = new User("Rahul")
c.constructor.createId()