const user={
    username: "rhythm",
    price: 99,
    welcomeMessage: function()
    {
        console.log(`${this.username} , welcome to the message`);
        console.log(this)
    }
}


// console.log(user.welcomeMessage());

// user.username = 'sethiya'

// console.log(user.welcomeMessage());


// console.log(this);


// function chai()
// {
//     let username = "rhythm"
//     console.log(this.username);
// }

// chai()   gives the undefined because this is used in only object 

const chai = function ()
{
    let username = "rhythm"
    console.log(this.username);
}


// chai()  gives the undefined because this is used in only for object 

// const addTwo = (num1,num2)=>{
//     return num1+num2
// }
// we can use this also
// const addTwo = (num1,num2)=>(num1+num2)
// we can return the object also 
const objectReturn = ()=>({
    username: "rhythm"
})
add = objectReturn()
console.log(add);