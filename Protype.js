const user = {
    name: "rhythm",
    age: 19
}

Object.prototype.rhythm = function(){console.log("rhythm is present in all object");}
console.log(user.rhythm());


const arr = [1,2,3]
Array.prototype.password = "rhythm123"

console.log(arr.password);



//inheritance
const teacher = {
    makeVideo:true
}

const TeachingSupport = {
    isAvailable : false
}