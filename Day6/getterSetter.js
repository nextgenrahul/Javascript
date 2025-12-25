// class User{
//     constructor(email, password){
//         this.email = email
//         this.password = password
//     }
//     get email(){
//         return this._email.toUpperCase()
//     }
//     set email(email){
//         this._email = email
//     }
//     get password(){
//         return this._password.toUpperCase();
//     }
//     set password(pass){
//         this._password = pass

//     }
// }


// const rahul = new User("emasil@gmail", "123")
// console.log(rahul.password)
// console.log(rahul.email)

function User(email, password) {
    this._email = email
    this._password = password

    Object.defineProperty(this, 'password', {
        get: function () {
            return this._password.toUpperCase()
        },
        set: function (password) {
            this._password = password
        }

    })
}

let obj = new User("rahul@gmail.com", "23")
console.log(obj.password)