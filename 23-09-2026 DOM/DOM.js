console.log("Reading dom Property");
const input= document.getElementById("username");
console.log(input.value);
console.log(input.type);
console.log(input.class);
console.log(input.id);
console.log(input.disabled);
console.log("=====================================");

console.log("selecting Dom elements");
//1. getelementby(id)
console.log("using getelementsby()");
const header= document.getElementById('header');
console.log(header);
//another example
let element= document.getElementById("message");
console.log(element);
console.log("*************************************************************");
//2. getelementsbyclassname()
console.log("using getelementsbyclassname()");
const notes=document.getElementsByClassName('note')
console.log(notes);
//another example
const btn= document.getElementsByClassName("bt");
console.log(btn);
console.log("*************************************************************");

//3. querselect() method
console.log("using querselect() method");
const quers=document.querySelector('#box1');
const quers1=document.querySelector('.card');
const quers2=document.querySelector('p');
const quers3=document.querySelector('div.card');
console.log(quers);
console.log(quers1);
console.log(quers2);
console.log(quers3);
console.log("********************");
//another example
 const quer = document.querySelector('#box');
 const quer1 = document.querySelector('.text');
 const quer2 = document.querySelector('p');
 const quer3 = document.querySelector('ul li');
 console.log(quer);
 console.log(quer1);
 console.log(quer2);
 console.log(quer3);
console.log("*************************************************************");

 //4. querselectall() method
 console.log("using querselectAll() method");
const items= document.querySelectorAll('.item');
console.log(items);

 console.log("=======================================================================");
 
 console.log("DOM traversing");

 let child = document.getElementById('child1');
 console.log(child.parentElement);//  it will get top element
 console.log(child.nextElementSibling); // it will  get the result next value
 console.log(child.nextElementSibling.previousElementSibling);//
 console.log(child.parentElement.children);
 console.log("==============================================================================");


console.log("DOM element in Dynamically");
 let para=document.createElement('p');// create a new para element
    para.textContent = 'hi hello welcome to my web site';// add text that para
  document.getElementById('container')?.appendChild(para); // add the element to the webpage
console.log(para);
// adding second para2
let para2=document.createElement('p2');
para2.textContent = 'hello ';// add text that para
  document.getElementById('container')?.appendChild(para2); // add the element to the webpage
console.log(para2);


console.log("=================================================================================");
console.log("Adding elements to the Dom");

let heading = document.createElement('h2');      // creating an element
heading.textContent = 'welcome the my website page';// add conetent
 let contain= document.getElementById('contain'); //Add element to the DOM
 contain.appendChild(heading);//***=>using appendchild we add the  element or text end of the parent
 console.log(contain);
console.log('****************************************************');
let heading1 = document.createElement('h2');      // creating an element
heading1.textContent = 'welcome the my  Browser';// add conetent
 let contain1= document.getElementById('contain'); //Add element to the DOM
 contain1.append(heading1);//// ***=>using append we add the  element or text
 console.log(contain1);
 console.log('********************************************')
let heading2 = document.createElement('h2');      // creating an element
heading2.textContent = 'third heading';// add conetent
 let contain2= document.getElementById('contain'); //Add element to the DOM
 contain2.prepend(heading2);// ***=>using prepend we add the  element in beginnig
 console.log(contain2);

console.log("==================================================================================");

console.log(" adding  event list");

const button = document.getElementById('btn');
button.addEventListener("click", function(){
    alert('button was clicked!');
});
console.log(button);
