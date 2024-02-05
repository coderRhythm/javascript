// // singleton


// // object literals

// const mysim = Symbol()

// const JsUser = {
//     name: "rhythm",
//     [mysim]:"i am symbol",
//     age: 18,
//     favHeroes:['iron','thor'],
//     location: "jaipur"
// }

// console.log(JsUser['name'])
// console.log(JsUser.name)

// console.log(JsUser.age)

// console.log(JsUser.favHeroes[0])

// we can change the value in the object 
// JsUser.favHeroes[0] = 'spiderman'
// console.log(JsUser)

// now if we want not to change the object value , we can do that by using freeze
// Object.freeze(JsUser)

// JsUser.age = 20

// // but it can change internal in internal 
// // like if we want to chnage the favheroes[0], we can change because freeze doesnot apply the internal structure

// console.log(JsUser)

// console.log('\nafter adding function')
// console.log("jsuser")
// // making the function inside the object 
// JsUser.greeting = function greeting()
// {
//     console.log("hello this is greeting")
// }


// console.log(JsUser)




// multiton
const obj1 = {
    a:1,
    b:2
}

const obj2 = {
    c: 3,
    d: 4
}


console.log({obj1,obj2})



// finding the keys and values
console.log(Object.keys(obj1))
console.log(Object.values(obj1))


// checking the any property
console.log(obj1.hasOwnProperty("a"))