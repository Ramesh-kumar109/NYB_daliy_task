
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
//console.log(message);//message is not defined

//Block scope

if (true){
let age=30;
const city="madurai";
console.log(age);
}
//console.log(age);ReferenceError: age is not defined
//console.log(city);ReferenceError: city is not defined

//lexical scope

let outer ="I'm outside";
function outerFunction(){
    let inner="I'm inside";
    function innerFunction(){
          console.log(outer);// acessible
          console.log(inner);// acessible
    }
    innerFunction();
}
outerFunction();


//Global  scope
 var company="softwaretech";
 var Employeescount=69;
 function  DispalyEmployees(){
    console.log("Compay Name: "+company);
    console.log("Employeescout: "+Employeescount);
 }
 function hiring (){
    Employeescount++;
    console.log("Employeescount hiring: "+Employeescount);
 }

 function  DispalyEmployees(){
    console.log("Compay Name: "+company);
    console.log("Employeescout: "+Employeescount);
 }
DispalyEmployees();
hiring();
DispalyEmployees();




//Recursion function
// fibonacci series

 function fibonacci(n){
 
if (n===0||n===1){
     return 1;
}
return n*fibonacci(n-1);// recursion call itself
 }
console.log(fibonacci(5));//where n=5 5*4*3*2*1=120
console.log(fibonacci(8));// where n=8  6*5*4*3*2*1=40320

