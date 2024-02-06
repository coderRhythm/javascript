//Javascript is based on protype language 

// Javascript and classes
// const user = {
//     username: "rhythm",
//     loginCount: 0,
//     signedIn: true,
//     getUserDetails: function()
//     {
//         console.log('user is getted')
//         console.log(`user is ${this.username}`)
//     }
// }

// console.log(user.username)
// console.table(user)
// console.log(user.getUserDetails())


// we have to make the constructor function
// const PromiseOne = new Promise()
// const date = new Date()

// Constructor function
function User(username, loginCount, isLoggedIn)
{
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn  = isLoggedIn
    
    
    this.greeting = function()
    {
        console.log(`I am ${this.username} sethiya`);
    }
}

const user_01 = new User("rhythm",1,true)
const user_02 = new User("sethya",2,false)

console.log(user_01.greeting() , " ", user_02)