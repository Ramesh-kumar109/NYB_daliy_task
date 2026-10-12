var a=10;
console.log(a);
// const a=10; hositing for TDZ for let and const. 
// let a=10;=>thorw error msg will appear for varaiable can't access.

//======================================================================
console.log("Temporal Dead Zone Hositing");
//console.log(b);// ReferenceError: can't access variable not define
//console.log(p);// ReferenceError: can't access variable not define
let b=5;
const p=6;
console.log(b);
console.log(p);
//======================================================================
console.log("Function Declaration Hoisting");
call();// calling before the definition-workfine
function call(){
   console.log("Hello user");
};

function fu(){
    console.log("welcome user");
};
fu();
//fun("ramesh");  throwing error cannot access fun initialization. 
 console.log("Function Expression Hoisting");
 let fun=function name(name){
console.log("hello "+name);
 };fun("ramesh");
//============================================================================
 console.log("Arrow Function Hositing");
 //few();
 const few=()=> 
    console.log("hello");
few();
 // another example
 //saybye();// throw an error cant access form  saybye before initialization
 const saybye=()=>console.log("Bye");
 saybye(); 

//====================================================================================
// Recursive Functions
function fact(n){
    if(n==0||n==1){
        return 1;   // base case
    }
    return n*fact(n-1); // recursive case
};
console.log(fact(6));
//=============================================================
//Fibonacci series using function
function fiba(n){
if(n<=1){
return n;
}
return fiba(n-1)+fiba(n-2);
};
//console.log(fiba(10))
 for(let i=0;i<10;i++){
console.log(fiba(i))
};
fiba(10);
//=============================================================
//prime number

 var flag=true;
  function pm(n){
    if(n<=1){
        return flag= false;
    }else{
        for(let i=2;i<n;i++){
               if(n%i==0){
                return console.log(false);
               }
        }
    }return console.log(true);
    
};
pm(8)
//======================================================

//factorial 
function fac(num){
if(num<=1){
    return 1
}return num*fac(num-1)
};
console.log(fac(6));
//=============================
// Fibonacci series
function fb(n){
    if(n<=1){
        return n
    }return fb(n-1)+fb(n-2);
};
for(let m=0;m<10;m++){
console.log(fb(m));
};

//===================================
//Amstrong number

function sumofpower(num,totaldigits,orgnum=num){
    if(num===0)return 0;
    const digit=num%10;
    return Math.pow(digit,totaldigits)+sumofpower(Math.floor(num/10),totaldigits,orgnum);
}
function isarmstorng(num){
 const totaldigits=num.toString().length;
 return sumofpower(num,totaldigits)==num;
}console.log(isarmstorng(153));

