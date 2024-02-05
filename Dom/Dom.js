// Set the background color of the element with the class 'bg-black' to red
const bgBlackElement = document.querySelector('.bg-black');
bgBlackElement.style.backgroundColor = 'red';


const unordered = document.querySelector('ul')
const list = unordered.querySelectorAll('li')
const list_arr = Array.from(list)
for(let el of list_arr)
{
    el.style.backgroundColor = 'blue'
    break;
}