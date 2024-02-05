const firstname = "rhythm"
const lastname = "sethiya"

// console.log(firstname+lastname)

const age = 19
// console.log("my name is "+ firstname + lastname+ " and my age is "+age)


// using backtics 
// console.log(`My name is ${(firstname+lastname)} and my age is ${age}`)


// creating the string object 
const name = new String("rhythm sethiya")

console.log(typeof name)
console.log(name[0])
console.log(name.bold())
console.log(name.length)
console.log(name.charAt(2))
console.log(name.slice(0,4))
console.log(name)



anotherName = " rhythm  sethiya   hello  " 
console.log("\nbefore trim: "+anotherName)
console.log("after trim: "+ anotherName.trim())
 

// replace the character or string with another character 
const email = "rhythmsethiya@gmail.com"
console.log(email.replace('rhythmsethiya','sethiyarhythm'))
console.log(email.includes('iya'))


const name1 = new String("rhythm-sethiya")

console.log(name1.split("-"))