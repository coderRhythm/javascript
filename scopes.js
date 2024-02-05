// if(true)
// {
//     let a = 10
//     const b = 20
//     var c = 30
// }


// console.log(a);   --> gives the error 
// console.log(b);  --> gives the error 
// console.log(c);   //gives the value of c--> 30  

// let a = 1
// const b = 1
// var c = 3
// if(true)
// {
//     let a  =20
//     const b  = 10
//     var c = 30
// }


// console.log(a,b,c);


// function one()
// {
//     const username = "Rhythm"
//     function two()
//     {
//         const website = "yt"
//         console.log(username);
//     }
//     // console.log(website);-- gives the error because webiste is defined in two() function scope
//     two()
// }


// one()


// if(true)
// {
//     const username = "Rhythm"
//     if(username === "Rhythm")
//     {
//         const website = " youtube"
//         console.log(username + website);
//     }

//     // console.log(website);--> gives the error 
// }


function addNum(value)
{
    return value+1
}

let num = addNum(3)
console.log(num);



// Expressions
const addTwo = function(value)
{
    return value+2
}


addTwo(2)
console.log(addTwo(1));