// syntax for function
console.log("function method");
// function declaration:
let value=10;
// function expression
function val(va){   //==> parameter we give any of them
    return va;
};
// function calling
  // value==> argument  what are the values to assign the variable we mention for that
console.log(val(value));
//------------------------------------------------------------------------
     console.log("using Function without passing parameters");
// without parameter passing in function

function fname(){
    console.log("Hello world");
};
fname();
//------------------------------------------------------------
// with parameter Passing in function
console.log("with parameter Passing in parameter");
var number= 5;
function num(num){
    return num;
};
console.log(num(number));
//-------------------------------------------------------------

function maths( a,b){
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a%b);
console.log(a/b);
}
maths(2,3);
maths(5,20);
maths(13,5);
//-----------------------------------------------------------
//function calling another function
  
function square(sq){
    return sq*sq;
};function numbers(a,b){
   return square(a)+square(b);
};
console.log(numbers(2,3));// 2*2+3*3=13
//---------------------------------------------------
console.log("default parameters");

function name(name="Guset"){  // where the default parameter to asign fixed the parameter when call by  without parameter it will execuite
    return name;
};
console.log(name());

// another example //  parameter priority
function fn(name="Anonymous",ages=25,city="madurai"){
return(`Hi i'm ${name} my age is ${ages} i'm form ${city}`);
};
console.log(fn('ramesh',24,'chennai'));
console.log(fn(undefined,26,'salem'));


//---------arguments object-------------------------------------------------------------
// when the arguments are finding the values present in the inside of function  with the help of arguments key word
function function_name(){
console.log(arguments);
};
function_name(1,2,3);
//----------using while loop finding the agrument and sum of arguments-------------------
 function fun(){
    let total=0;
    let i=0;
    console.log(arguments)
    while(i<=arguments.length-1){
        total=total+arguments[i];
        i++;
    }
    return total;
 };
 console.log(fun(1,2,3,4,5));
 //--------------------------------------
 function name(){
    return "Hello";
 };
console.log( name(1,2,3,4,5));


//--------------------
function fa(fname="guest",age){
     console.log(`${fname} ${age}`);
};
fa(undefined,26);
//---------------------------------------------------
// functions declartion

function call(a){
    return a;
};
console.log(call(2));

//-----function expression--------------------------------------------
//1. anonymous function
  const anonymous=function(){
 return "welcome user";
  };
  console.log(anonymous());

//--------------------------------------------------------------------
//2 named function
// A named function
const vari=function factorial(n){
 return n<=1?1:n*factorial(n-1);//==>again calling
};
console.log(vari(5));
//-----------------------------------------------------------------------
//3.arrow function
const wh=(a,b)=>a*b
console.log(wh(2,3));
//another example single value pass 
var t=(a)=>a
console.log(t(2));
// another exapmle object values pass
var y=(dname, age)=>({dname,age})
console.log(y("ramesh",22));
///-----------------------------
// IIFE(Immediately invoked function Experssion)
// A IIFE is a function that run as soon a it define no seperate call need.

(function (name){
console.log(`hello ${name}`)
})("ramesh");

//generator function  it will pause function and execute 

const gen=function*(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
};
const gen1=gen();
console.log(gen1.next());
console.log(gen1.next());
console.log(gen1.next());
console.log(gen1.next());
console.log(gen1.next());

//---------------------------------------------------------------------------
// Argument Object
 function na(){
    console.log(arguments);
    console.log(arguments[1]);
    console.log(arguments.length);
    console.log(arguments[2]);
 };
 na(1,2,3,4,5);

//----rest parameter
function na(a,b,c,...f){
    console.log(a);
    console.log(b)
    console.log(c);
    console.log(f);
};
na(1,2,3,4,5);