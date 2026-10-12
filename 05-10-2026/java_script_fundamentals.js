// variables.
 var fname = "ramesh";//=> it is old variable declaration.
  console.log(fname);
 let lname="kumar";//=> it is new variable declaration.
 console.log(lname);
 const age=25;//=> it is new variable declaration.
 console.log(age);

 console.log("***************************************************************************");

 console.log("primitive data types");
 // 1. string
 var qname="ramesh";
 console.log(qname,typeof(qname));
 //2. number
    var sage=25;
    console.log(sage,typeof(sage));
//3. boolean
    var isMarried=true;
    console.log(isMarried,typeof(isMarried));
//4.undefined
    var address;
    console.log(address,typeof(address));
//5.null
    var city=null;
    console.log(city,typeof(city));
//6.symbol
    var sym=Symbol("id");
    console.log(sym,typeof(sym));
// 7.Bigint
    var bigInt=BigInt(10n);
    console.log(bigInt,typeof(bigInt));       
    
    
    console.log("***************************************************************************");
    console.log("Non primitive datatype (or) Reference Datatype");
    console.log("1.Object");
    // 1.Object => An Object is releated datatype and it will store colletions of Keys and Values pai
       // for example
       let personal_details={fname:"ramesh",lname:"kumar",age:26,city:"madurai"};
       console.log(personal_details,typeof(personal_details));
         console.log("2. Arrays");
    // 2. Arrays=> an array is set of values (or) Types of values and it will store multiple
    //    values are stored in single variables.
    //for example

    let fruits=["apple","banana","Orange"];
    console.log(fruits,typeof(fruits));

    console.log("3.Function");
    // 3.Function => A function is block of code and
    //  it will perform a some specific task and it will return optional values

   
    //syntax for function

// const news=name;   //==> variable declaration

    // function function_name(parameters){   //==> function method
           // code
    //       return parameters
    //};
    //function_name(arguments/(news));  //==>  function calling 

 // for example
 function addition_number(a,b){
    return a+b;
 };
 console.log(addition_number(5,5));

console.log("***************************************************************************");
console.log("Data type conversion");

 // converstion
console.log("1. implicity method");
 // 1. implicity method

 let num1=10;
 let num2=num1+"5";
 console.log(num2,typeof(num2));
 //2.explicity method
console.log("2. explicity method");
let num3=10;
let num4=String(num3);
console.log(num4,typeof(num4));

console.log("***************************************************************************");
console.log("Coercion methods");
let n=10;
let n2="5";
console.log(n+n2,typeof(n+n2));
console.log(n-n2,typeof(n-n2));
console.log(n*n2,typeof(n*n2));
console.log(n/n2,typeof(n/n2));

//boolean coercion
console.log("3. boolean coercion");
let value=1;
if(value){
    console.log("True");
}else{
    console.log("False");
};

//4. equality coercion
console.log("4. equality coercion");
let a=1;
let b="1";
console.log(a==b,typeof(a==b));// it will ture beacuse it will check only values not datatype
console.log(a===b,typeof(a===b));// it will false because it will check both values and datatype

// Turthy and falsy values
 // turthy values =>true,"hi",1,[],{},-10,"0"
 //falsy values =>false,"",0,undefined,null,NaN,-0,0n
console.log("5. truthy and falsy values");

let numb=10;
if(numb){
    console.log("Truthy",numb);
}else{
    console.log("Falsy",numb);   
};
console.log("***************************************************************************");
console.log("operators");

console.log("1. Arithmetic operators");
let x=20;
let y=10;
console.log("Addition",x+y);
console.log("Subtraction",x-y);
console.log("Multiplication",x*y);
console.log("Division",x/y);
console.log("Modulus",x%y);

console.log("2. Assignment operators");
let a1=10;
a1+=5;
console.log("Addition assignment",a1);
a1-=3;
console.log("Subtraction assignment",a1);
a1*=2;
console.log("Multiplication assignment",a1);
a1/=2;
console.log("Division assignment",a1);
a1%=3;
console.log("Modulus assignment",a1);
console.log("3. Comparison operators");
let a2=10;
let b2=20;
console.log("Equal to",a2==b2);
console.log("Not equal to",a2!=b2);
console.log("Greater than",a2>b2);
console.log("Less than",a2<b2);
console.log("Greater than or equal to",a2>=b2);
console.log("Less than or equal to",a2<=b2);

console.log("4. Logical operators");
let a3=true;
let b3=false;
console.log("Logical AND",a3&&b3);
console.log("Logical OR",a3||b3);
console.log("Logical NOT",!a3);

console.log("5. Ternary operator");
let vote_age=20;
let can_vote=vote_age>18?"Eligible to vote":"Not eligible to vote";
console.log(can_vote);

console.log("***************************************************************************");
console.log("Template literals");
// template literals =>  template string is string literals it is used to embbed expressions and 
   //it enclosed with backticks(``) or  instead of string

   //example
   let name="Ramesh";
   let newage=25;
   let citys="Madurai";
   console.log(`Hello, my name is ${name} and I am ${newage} years old amd im from ${citys}.`);
    
console.log("***************************************************************************");
console.log("condition statements");
console.log("1. if else statement");

let lage=20;
if(lage>=18){
    console.log("You are eligible to vote.");
}else{
    console.log("You are not eligible to vote.");
}
console.log("2. switch statement");
let day=3;
switch(day){
    case 1: 
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
}
console.log("3. nested if else statement");
let marks=85;
if(marks>=90){
    console.log("Grade A");
}else if(marks>=80){
    console.log("Grade B");
}else{
    console.log("Grade C");
}

console.log("***************************************************************************");

console.log("Loops");
// loops => loop is a repate multiple times execute the code where the condition will be ture once the condition will be false it will stop the execution or break the code
console.log("1. for loop");
//for loop => for loop is used for repatedly multiple times for knowing the number of iterations
let num=10;
for(let i=0;i<num;i++){
console.log(i,"hello world");
};
console.log("***************************************************************************");
console.log("while loop");
// 2.while loop => while loop we are using unknow the times loop will be executed to repatedly multiple
let number=10;
let i=1;
let count =0;
while(count<number){
    if(i%2==0){
    console.log(i,"number print:=> ");
    }
    i+=1;
    count++;
}
console.log("********************************************************************");

console.log("DO-whileLoop");
//3. dowhile loop => do while loop is used to execuite the code atleast one time where the condition ture or false 
let nums=5;
let j=0;
do{
    console.log(j,"dowhile loop print");
    j++;
}while(j<=nums);

console.log("for-in loop");//=> for loop has store the object in keys and values 
let person={
    name:"ramesh",
    age:28,
    city:"madurai"
}

for(let details in person){
  console.log(details,":",person[details]);
}

console.log("********************************************************************");

console.log("for-of loop");
let fruit=["apple","banana","cherry","Orange"];
for(let Fruits of fruit){
    console.log(Fruits);
}
console.log("********************************************************************");

console.log("Function");
// function are named block it will perform some specific task and optionally it will return values ofr the user

function greet(str,age){ 
    return `hello ${str} im ${age} year old person`
};

console.log(greet("ramesh",26));

console.log("********************************************************************");

console.log("function Declaration");
// function Declaration is a way to define a function using function keywords and 
// it contain function name and code execute will call the function 

function function_name(){
    console.log("Hello world");
};
function_name();
console.log("********************************************************************");
console.log("function Expression");
// A hole function should be assign for a variable that is called function expression
const FE=function fun_name(){
    return "anonymous function";
};
 
console.log(FE());
console.log("********************************************************************");

console.log("named function");
let nfe=function greet(){
    return "hello world";
};
console.log(nfe());
console.log("********************************************************************");
console.log("Arrow function Expression");
let ArrowFE=()=>{
    return "hello Arrow function"
}
console.log(ArrowFE());
console.log("*********************************************************************");

console.log("parameters and arguments");
//parameters are nothing it is values to recevied on aruguments to assign variable 
// and then function will execute.

// agruments are nothing it is value are pass for parameters using variables to assign.

const para= function pa_arg(values1,values2){
    console.log("values1: ",values1, "values2: ",values2);
}
para(10,20);

console.log("Default Parameters");

function default_parameter(name="Guest",age){
console.log(name,age);
};
default_parameter(undefined,20);

console.log("rest parameters");
// rest parameter it will collect remaining argument in an real array.

const rest_parameter=function(a,b,c,d,e,...f){
console.log(a,b,c,d,e);
console.log(f);
};
rest_parameter(1,2,3,4,5,6,7,8,9,10);


