// // const myarr = [1,2,3,4,5]
// // console.log(myarr)
// const myarr = new Array(1,2,3,4,5)

// console.log(myarr)

// // methods in array
// myarr.push(6)
// myarr.pop()

// myarr.unshift(9)  //adding the element at the beginning
// console.log(myarr.includes(9))  //checking the element in the array
// console.log(myarr.indexOf(9))  //returns 0
// console.log(myarr)

// //slice
// console.log("A ",myarr)
// const myn1 = myarr.slice(1,3)   // not include the last range and doesnot change the actual array 
// console.log(myn1)

// // splice
// const myn2 = myarr.splice(1,4)  //include the last parameter also and change the actual array
// console.log(myn2)


// another array methods
const marvel_heroes = ['iron-man','thor','spiderman']
const dc_heroes =  ['superman','flash','batman']

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes)

// all_heroes = marvel_heroes.concat(dc_heroes)
// console.log(all_heroes)

// const all_heroes = [...marvel_heroes,...dc_heroes]  //we pass more than 2 arrays also 
// console.log(all_heroes)


// methods to convert into array
console.log(Array.isArray("rhythm"))
console.log(Array.from("rhythm"))

let a = 1
let b  =2
let c = 3

console.log(Array.of(a,b,c))
