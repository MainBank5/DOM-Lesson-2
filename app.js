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
const text = document.createTextNode('Fill in your credentials');
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
document.querySelector('#wrapper').appendChild(title)

console.log(title)

//removefirstchild

function removeFirstItem () {
    //select the parent and then the child which you want to remove
    const ul = document.querySelector('.list-items');
    const li = document.querySelector('li:nth-child(2)');

    ul.removeChild(li);
}

//removeFirstItem();

//alternative way of removing any item you would want
//your function argument will be the item number you want to remove
function removeAnother (itemNumber) {
    const ul = document.querySelector('.list-items');
    const li = document.querySelector(`li:nth-child(${itemNumber})`);

    ul.removeChild(li);
}

//removeAnother(2)

function removeAnother2 (itemNumber) {
    const ul = document.querySelector('.list-items');
    const li = document.querySelectorAll('li') [itemNumber - 1];

    ul.removeChild(li);
}

//removeAnother2(2)

//Styles and classes 
const para = document.querySelector('p');
const myItems = document.querySelector('.list-items');
const myMovies = document.querySelectorAll('li');

function run() {
   //className
   console.log(myItems.className);
   //para.className = 'card dark' //'dark' alone overwrites the existing classname in the html file, consequently the event
   //triggers the styling of class.To maintain the original class name, simply include it in the 'new classname'

   //classList 
   //console.log(myItems.classList) //this display a domtokenlist which is basically an array of the className, and so its iteratable 
   for (let i=0 ;i<myItems.classList.length;i++) {
    console.log("Class Name : " + myItems.classList[i]);
   }

   //para.classList.add('dark') //it adds the new class and still mantains the original one
   //para.classList.remove('card');

   //para.classList.toggle('dark')
   para.classList.replace('card', 'dark');

   //the typical styling
   para.style.color = 'red'
   myItems.style.lineHeight = '5'

   myMovies.forEach((item, index) => {
    item.style.color ='red'

    if(index === 2) {
        item.style.color = 'yellow'
        item.textContent += ' -stytled'
    }
   })

}

document.querySelector('button').onclick = run;