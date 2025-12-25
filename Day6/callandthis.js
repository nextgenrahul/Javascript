function setUsernaem (username){
    this.username = username
    console.log("Called")
}

function createUser(username, email, password){
    setUsernaem.call(this, username)
    this.email = email
    this.password = password
}


const chai = new createUser('chai', 'chai@gmail.com', '123')
console.log(chai)