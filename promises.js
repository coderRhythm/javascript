// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// const promiseOne = new Promise(function(resolve,reject){
//     setTimeout(function()
//     {
//         console.log('async task is complete')
//         resolve()
//     },1000)

    
// })

// promiseOne.then(function()
// {
//     console.log("promise consumed")
// })


// new Promise(function(resolve,reject)
// {
//     setTimeout(function()
//     {
//         console.log('this is a async task 2')
//         resolve()
//     },1000)
// }).then(function()
// {
//     console.log('resolved...ending')
// })


// new Promise(function(resolve,reject)
// {
//     console.log("async 3 executed");
//     resolve()
// }).then(function()
// {
//     console.log("ending");
// })



// now we passing object with the help of promises
// new Promise(function(resolve,reject)
// {
//     console.log('async 4 executed')
//     resolve({
//         username: "rhythm",
//         age: 19
//     })
// }).then(function(user)
// {
//     console.log(user);
// })



// Chaining of the promises
// const promiseFour = new Promise(function(resolve,reject)
// {
//     setTimeout(function()
//     {
//         let error = false
//         if(!error)
//         {
//             resolve({username: "rhythm",pass: "rhy123"})
//         }
//         else{
//             reject('error: something went wrong')
//         }
//     },1000)
// })


// promiseFour.then(function(user){
//     console.log(user)
//     return user.username
// }).then(function(user){
//     console.log(user)
// }).catch(function(err)
// {
//     console.log(err);
// }).finally(function()
// {
//     console.log('the promise either resolved or rejected');
// })



// 
const promiseFive = new Promise(function(resolve,reject)
{
    setTimeout(function()
    {
        let error = false
        if(!error)
        {
            resolve({username: "rhythm",pass: "rhy123"})
        }
        else{
            reject('error: something went wrong')
        }
    },1000)
})


async