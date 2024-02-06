// this fetch returns promise so we use .then() and .catch()

fetch('https://api.github.com/users/hiteshchoudhary').then(function(data)
{
    return data.json()
})
.then(function(response)
{
    console.log(response)
})
.catch(function(err)
{
    console.log(err);
})


