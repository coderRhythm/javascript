function greeting()
{
    console.log("a")
    console.log("b")
    console.log("c")
}

console.log(greeting())



// adding two numbers
function sum(a,b)
{
    console.log(a+b)
}

console.log(sum(2,3))


//returning something 
function loginUser(username)
{
    return `${username} just logged in`
}

let s =loginUser("rhythm")

console.log(s)


//loginusermessage function making 
function loginUserMessage(username)
{
    if(!username)
    {
        console.log("plz enter the username")
        return
    }

    return `${username} just logged in`
}


console.log(loginUserMessage("rhythm sethiya"))



//rest operator 
function calculatecartPrice(...num1)
{
    for(let i=0;i<3;i++)
    {
        console.log(num1[i]);
    }
}


calculatecartPrice(100,200,300)



//object passing in the function
const user={
    name: "rhythm sethiya",
    prices: 20
}

console.log(`the user is ${user.name} and the price is ${user.prices}`)


// passing the array to the function
function acceptArray(getarray)
{
    for(let i=0;i<3;i++)
    {
        console.log(getarray[i])
    }
}


console.log(acceptArray([1,2,3]))