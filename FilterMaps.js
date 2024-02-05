// forEach loop doesn't return any value 
// so to store the each values of any object then we have to use the filter()


// const coding  = [1,2,3,4]
// const each_coding = coding.filter(function(num){
//     return num<=2;
// })
// for(const i of each_coding)
// {
//     console.log(i);
// }

// map

const numbers  = [1,2,3,4]
// updated_numbers = numbers.map(function(val)
// {
//     return val*val
// })

// console.log(updated_numbers);

// we can use multiple maps also
const updated_numbers = numbers.map(function(val){
    return val*10
}).map(function(val){
    return val+1
})

console.log(updated_numbers)