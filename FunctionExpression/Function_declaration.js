//  function Declaration
var a=8,b=5;

function function_name(){
   return a+b;
};
console.log(function_name());
//  Anonymous Function Expression

let fun=function (sname){
   console.log("Hello "+sname);
};
fun("Ramesh");

// Named Function Expression

var func=function fun_name(fname,position,cname){
     return `Hi Everyone i'm ${fname} Position on ${position} at ${cname} `
};
console.log(func("Ramesh","Fornt_Developer","NYB_Infotech"));

// arrow Function Expression

var ar=()=>    // without parameter using Arrow Function
    console.log("Hello Everyone");
ar();

var arrow= (c,d)=>   //with Parameter using arrow Function.
console.log(c*d);
arrow(4,3);

// adding and product of number using arrow function
var add=(a,b)=>{
    const sum=a+b;
    const product=a*b;
   return{sum,product};
};
console.log(add(5,5));

//sum of number
var adds= (a,b)=>a*b
console.log(adds(5,5));

//
var user=(rname,age)=>({rname,age});
console.log (user("ramesh",25));
// factorial
const factorial= function fact(n){
return n<=1 ? 1 :n* fact(n-1);
};console.log(factorial(5));


// 
var n=14;
var flag=true;
 if(n<2){
   flag= false;
 }else{
    for(var i=2;i<n;i++){
        if(n%i==0){
       flag= false;
    }
}}
if (flag){
    console.log(n+" prime number")
}
   else{ 
    console.log(n+" not prime number");
};


//using arrow function
let prime=(n)=>{
if(n<2) return false;
else{
    for(i=2;i<Math.sqrt(n);i++){
        if(n%i==0){
        return n+" not prime number";
    }
}
}
return n+" prime number";
};
console.log(prime(13));
//=======================
function name(name,age){
return {name,age};
};
console.log(name("ramesh",25));
// function call another function
function lname(str){
return(` Hello, ${str}!`);
};function stuser(name){
   return(lname(name)+" welcome to JS code");
};
console.log(stuser("Nimbous"));


//function call another function using callback parameters
function prouser(name,callback){
let changename=name.trim().toUpperCase();
return callback(changename);
};
function displayname(name){
return `user:${name}`;
};
console.log(prouser("   rockesh",displayname));


