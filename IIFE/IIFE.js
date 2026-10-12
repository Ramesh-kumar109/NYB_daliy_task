// IIFE
// => normal function method without parameters values 
(function IIFE(){
    console.log("Welcome To My browser");
})();
// => normal function method with parameters values

(function IIEF1(name,city,age){
    console.log(`Hi my name is ${name} i'm from ${city} i'm ${age} years old `);
})("Ramesh","madurai",25);

//arrow function without passing parameter
(()=>
    console.log("welcome to without arrow function by using IIFE")
)();
//arrow function with passing parameter
( (name,city,age,company,location)=>{
    console.log(`Hi i'm ${name} i'm form ${city} i'm ${age} years young person i'm working at ${company} at ${location}`);
}
)("Ramesh","madurai",25,"NYB-Infotech","Hyderabad");

console.log("=======================================================================================================");
console.log("Closure");
 function closureouter(){
    const name="ramesh";
     const closure=function(){
           console.log(`hello welcome to my website ${name}`);
    }
    return closure();
 };
 closureouter();

// another example with Closure method
 function clouter(){
        let fname="ramesh";
    const lname=function(){
               let lname="kumar";
               console.log(` Hi ${fname} ${lname}`);    
    }; return lname();
 };clouter();

 function clsouter(str){
let strn= str;
 const clsinner=function(){
 let lastname="kumar";
 console.log(`${strn} ${lastname}`);
}
 return clsinner();
 }; clsouter("ramesh");
 console.log("=======================================================");
 console.log("pure function");

  function purefunction(a,b){
     console.log(a+b);
  };
  purefunction(3,4);
  purefunction(3,4);//=> same inputs and we get result as same output so it's pure function
console.log("===========================================================");
  console.log("impure function");
 
    let total=0;  
  function impurefunction(num){
    total +=num
    console.log(total);
  }; impurefunction(10);
  impurefunction(10);//=> same input and varying the outputor changing the something outside itself
 
 console.log(""); // another example
  function updatesage(name,age){
       return {...name,age};
  };
  let user={name:"ramesh",age:25};
 let updatespure=updatesage(user,26);
 console.log(user);
 console.log(updatespure);
 console.log("impure function");
//another example for impure function
function impureupdates(name,newage){ 
    user1.age=newage; // changing the object age
return name;
};
let user1={name:"kumar",age:25};
let updates=impureupdates(user1,23);
console.log(user1);
console.log(updates);
console.log("================================================");
console.log("First class function");
function add(a,b){     //=> a function assign the variable  
    console.log( sum=a+b);
};
const a=add;
a(10,20);

console.log(" function  to another function");
function  calculate(add,a,b){//=> a function passing the variable in another function
        return add(a,b);
};
 calculate(add,30,40);//70
console.log(" function return another function");
 function  different(){
    return function sub(a,b){
        return(a-b);
    }
 };
 const diff=different();
 console.log(diff(10,30));
console.log("====================================================");
console.log("First order function");//==> a 
 function fo(num){
    console.log(num+5);
 };
 fo(1);
console.log("====================================================");
console.log("Higher order function");

const hof=()=>6
function hf(str){
    return str()+5;
};
console.log(hf(hof));

function higherorder(n,action){
       for(let i=0;i<=n;i++){
        action(i);
       }
}
higherorder(3,function(i){
    console.log(`count+${i}`);
})