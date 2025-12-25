const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor)
// console.log(Math.PI)
// Math.PI = 23
// console.log(Math.PI)
const myNewObj = {
    name: "rahuL",
    age: "22",
    isAva: true
}


Object.defineProperty(myNewObj, "name", {
    writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(myNewObj, "name"))

for (const [key, value] of myNewObj) {
    console.log(`${key} : ${value}`)
    
}