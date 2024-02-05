// const userEmail = "rhythm@gmail.com"
// we can't assign change the const variable

// if(userEmail)
// {
//     console.log("got the user email");
// }
// else{
//     console.log("don't have the user email");
// }

// falsy values: false,0,BigInt 0n,"",null,undefined,NaN

// truthy values: "0",'false'," ",[],{},function(){}

// const userEmail = []
// if(userEmail)
// {
//     console.log("got the user email");
// }
// else{
//     console.log("don't have the user email");
// }


// Nullish Coalescing Operator (??)

// let val1;
// const val2 = function(){
//     return 2;}
// val1 = 5 ??  val2() // if function is not working then assign 5 to the val1 
// console.log(val1);



// Ternary operator
const iceTeaPrice = 100
iceTeaPrice<=80? console.log("lesser"): console.log("greater");