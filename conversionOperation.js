let score  = "33"
console.log(typeof score)


//convert into string 
console.log(Number(score))


let isLoggedIn = 1
console.log(Boolean(isLoggedIn))


let someNumber = 3
let stringNumber = String(someNumber)
console.log(typeof stringNumber, stringNumber )




let value =3;
let negValue = -value;
//arithematic operation
// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)
// console.log(2%2)
// console.log(2/2)


// let str1 = "hello"
// let str2 = " rhythm"

// console.log(str1+str2)


// console.log("1"+2)
// console.log(1+"2")
// console.log(3+"3")
// console.log(1+1+"3")


console.log(+true)  //+ is used for boolean to numerical

// increment
// let num1,num2,num3
// num3 = num2 = num1 = 2+2

// num1++;
// console.log(num1)


const id = 123
const anotherId = Symbol(id);
console.log(anotherId)
console.log(id === anotherId)