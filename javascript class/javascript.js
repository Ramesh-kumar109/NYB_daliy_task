var a=10
var abc='30'
var m=null
var name="Ramesh kumar"
var r
var boolean=true
console.log(a)
console.log(abc)
console.log(name)
console.log(r)
console.log(boolean)
//type of opertion
console.log(typeof(a))
console.log(typeof(abc))
console.log(typeof(name))
console.log(typeof(m))
console.log(typeof(r))
console.log(typeof(boolean))

// typesof datatypes
//number  example
var x=5;
console.log(x);
console.log(typeof(x));















































//varing parameters and arguments

function check(a,b,c,d,e,...f){  // ...f is rest parameters will store 
console.log(a,b,c,d)
console.log(arguments); // to check the total argument present
console.log(f);
};
check(undefined,1,2,3,4,5,1,2,3,4,5,6);

// memeory creation
var x;
console.log(x);//undefine values are not define 
x=10;
console.log(x);

// Hosting Temporal
//console.log(y);//Cannot access 'y' before initialization
let y=20;
console.log(y);

//console.log(z);//
//console.log(z);// Cannot access 'z' before initialization
const z=30;
console.log(z);


//Function Declaration Hosting

console.log(greet("Ramesh"));//line by line code will  be execute after the result will show
function greet(fname){
    return`hello,${fname}`;
}

//function expression hosting
//console.log(add(5,8));//TypeError: add is not a function
var add=function (a,b){
   return a*b
}
console.log(add(5,8));

// Arrow function Hosting
 // console.log(mul(5,5));//ReferenceError: Cannot access 'mul' before initialization
 let mul=(a,b)=>a*b
 console.log(mul(5,5));

 

//-scope-
//Function scope
function str(){
var message="hello";
console.log(message);
}
str("Ramesh");
console.log(message);
