const threeFunction =()=>{
    console.log("three");
}

function twoFunction()
{
    console.log("two");
    threeFunction();
}


function firstFunction()
{
    console.log("one");
    twoFunction();
}

firstFunction()