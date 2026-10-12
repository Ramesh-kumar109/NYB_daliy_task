import {add} from './ES_modules.js';
console.log("Export and import method");
console.log(add(15,30));

import multiple from "./ES_modules.js";
console.log("Default Export and import method");
console.log(multiple(2,6));

import {addition,subtract,pi} from "./ES_modules.js"
console.log("adding method");
console.log(addition(20,30));
console.log("Subtract method");
console.log(subtract(25,10));
console.log("variable pi values");
console.log(pi);

// using json.parse() method

let jsonstring='{"name":"ramesh","age":"26","city":"madurai"}';
console.log(jsonstring,typeof(jsonstring));

//covert to string to object
console.log('convert string to object');
let jsonobject= JSON.parse(jsonstring);
console.log(jsonobject,typeof(jsonobject));
console.log("****************************************************************************");
console.log("Object to string");

let jsonobj={
    name:"ramesh",
    age:25,
    city:"chennai"        
};
console.log(jsonobj,typeof(jsonobj));
console.log("************************");
console.log("Object to string convert");

let jsonstr= JSON.stringify(jsonobj);
console.log(jsonstr,typeof(jsonstr));

let details={
    name:"ramesh",
    age:25,
    city:"chennai"        
};

console.log("***************************************************************************");
console.log("Local storage");
//store data form local data storage.
localStorage.setItem("username","ramesh");
localStorage.setItem("age",25);
localStorage.setItem("password",12345)
localStorage.setItem("details",JSON.stringify(details));




// Get data form local data storage
console.log(localStorage.getItem("username"));
console.log(localStorage.getItem("password"));
console.log(JSON.parse(localStorage.getItem("detail")));

// remove data form local data storage. 
//console.log(localStorage.removeItem("password"));
 console.log(localStorage.removeItem('details'));
// remove  all the data form local storage.
// console.log(localStorage.clear());

console.log("*******************************************************************************");
console.log("session storage");


let person={name:"sanjay",age:22,city:"madurai"}
// store the data in sessionstorage

sessionStorage.setItem("username","kumar");
sessionStorage.setItem("age",25);
sessionStorage.setItem("person",JSON.stringify(person));



// to fetch the data in session storage mean.

//sessionStorage.getItem('name');
console.log(sessionStorage.getItem('name'));
console.log(sessionStorage.getItem('age'));
console.log(JSON.parse(sessionStorage.getItem('person')));

console.log(sessionStorage.key(1));

// remove data form session storage

sessionStorage.removeItem('age');
sessionStorage.removeItem('uname');


// clear all the data form session storage.
//sessionStorage.clear();

//task for changing color
const colourinput = document.getElementById('colour');

colourinput.addEventListener('change', (event) => {
    const colour = event.target.value;
    document.documentElement.style.backgroundColor = colour;
    localStorage.setItem('colour', colour);
});

//task for session storage
const colour = document.getElementById('co');

colour.addEventListener('change', (event) => {
    const color = event.target.value;
    document.documentElement.style.backgroundColor = color;
    sessionStorage.setItem('color', color);
});



