// const promies = new Promise(function(reslove, reject) {
//     setTimeout(function(){
//         console.log("Hello Task done")
//         // reslove()
//     }, 2000)

// })

// promies.then(function() {
//     console.log("Promise Consumed")
// })

// const promiesFive = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = false; // change to false to see resolve
//         if (!error) {
//             resolve({ username: "rahul", password: "1234" });
//         } else {
//             reject("Something Went wrong!");
//         }
//     }, 1000);
// });

// async function consumePromiseFive() {
//     try {
//         const response = await promiesFive;
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromiseFive(); 
// async function getAllUser() {
//     try {
        
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json(); // await here
//     console.log(data.slice(0, 2)); // first 5 users
//     } catch (error) {
//         console.log(error)
//     }
// }
// async function getAllUser() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then(function(response){
//         return response.json()
//     })
//     .then(function(response) {
//         console.log(response.length)
//     })
//     .catch(function(reject){
//         console.log(reject)
//     })
    
// }

// getAllUser();

