// immediately invoked function expression

(function()
{
    console.log('function 1 executed immediately')
})();  // if we don't give the semicolon then second function is not executed and gives the error

(
    function addtwo(num1,num2)
    {
        console.log(num1+num2)
    }
)(1,2)