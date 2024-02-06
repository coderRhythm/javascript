function multipleby5(num)
{
    return num*5
}

multipleby5.power = 2

console.log(multipleby5(5));
console.log(multipleby5.power);



// function is also a object 
// array, string are also a object 


function createUser(username, score)
{
    this.username = username
    this.score = score
}

const userDetail1  = createUser("rhythm",12)

console.log(userDetail1);