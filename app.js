let output;
//get all the children element from the child
const parent = document.querySelector('.parent');
console.log(parent);

//you get an iterable HTML collection 
output = parent.children;
console.log(output);

output = parent.children[1].innerText = 'Child two'
console.log(output);

output = parent.children[0].className;
console.log(output);

output = parent.children[0].nodeName;
console.log(output);

output = parent.children[1].style.color = 'red';

//traversing 
parent.firstElementChild.innerText = 'Child One'
parent.lastElementChild.innerText = 'Child three';
parent.lastElementChild.style.color = 'green';

//get parent from child
const child = document.querySelector('.child');
console.log(child.parentElement);
child.parentElement.style.border = '1px solid red';
child.parentElement.style.padding = '10px';

//sibling element 
const secondChild = document.querySelector('.child:nth-child(2)')
output = secondChild;
console.log(output)

output = secondChild.nextElementSibling;
console.log(output)
secondChild.nextElementSibling.style.background =' yellow'
console.log(output);

secondChild.previousElementSibling.style.background = 'pink'

const paragraph = document.createElement('p');
paragraph.className = 'content';
paragraph.innerText = 'This is my manipulation';
paragraph.setAttribute('title', 'myelement');
console.log(paragraph);

//notice that .innerText method is ideal for changing existing text. That's why the text you created didnt appear on the actuall webpage
document.body.appendChild(paragraph); //this will add a new child to body and append it

const div = document.createElement('div');
const text = document.createTextNode('Hello World');
div.appendChild(text);
document.querySelector('ul').appendChild(div)






const items = document.querySelectorAll('.items');
console.log(items)

//for (item of items) {
    //item.style.color = 'red';
//}

items.forEach((item, index) => {
    item.style.color ='yellow';
    item.style.background ='teal';
    item.style.margin = '15px';
    item.style.padding ='20px';
    item.style.textAlign ='center'

    if (index === 1) {
        item.innerText = 'Avengers Infinity War'
    }
})

const title = document.createElement('h1');
title.innerHTML = 'Favorite Movies';
title.className='heading';
document.querySelector('ul').appendChild(title)