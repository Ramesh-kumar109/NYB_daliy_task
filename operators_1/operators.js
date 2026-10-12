// Arithmetic operators
console.log("1.Arithmetic operators");
var a=2;
var b=3;
var c=a+b;
console.log("Add: "+ c);// 5 adding the two values
var d=a-b;
console.log("Sub: "+ d);// -1 subtracting the two values
var e=a*b;
console.log("Mul: "+ e);// 6 multiplying the two values
var f=a/b;
console.log("Div: "+ f);// 0.6666666666666666 dividing the two values
var g=a%b;
console.log("Percentage: "+ g);// 2 getting the remainder of the two values
var h=++a; 
console.log("Increment: "+ h);// 3 incrementing the value of a by 1
var i=--b;
console.log("Decrement: "+ i);// 2  decrementing the value of b by 1
var j=a**b;
console.log("Exponent: "+ j);// 8 raising the value of a to the power of b
//---------------------------------------------------------------------------------------
console.log("3.Assignment operators");
var x=5;// assigning the value 5 to x
console.log("x: "+ x);// assigning the value 5 to x
var y=2;
x+=y;
console.log(x);// adding the value of y to x and assigning the result to x
x-=y;
console.log(x);// subtracting the value of y from x and assigning the result to x
x*=y;
console.log(x);// multiplying the value of y with x and assigning the result to x
var x=5,y=3;
x**=y;
console.log(x);// raising the value of y to the power of x and assigning the result to x
x/=y;
console.log(x);// dividing the value of y with x and assigning the result to x
x%=y;
console.log(x);// getting the remainder of the value of y with x and assigning the result to x
//---------------------------------------------------------------------------------------
console.log("4.Comparison operators");
var a=10;
var b=20;
console.log(a==b);// false the condition will check a and b equal or not
console.log(a!=b);// true  the condition will check a is not equal to b
console.log(a<b);// true the condition will check a is less than b
console.log(a>b);// false the condition will check a is greater than b
console.log(a<=b);// true the condition will check a is less than or equal to b
console.log(a>=b);// false the condition will check a is greater than or equal to b
//---------------------------------------------------------------------------------------
console.log("5.Logical operators");
var a=10;
var b=10;
console.log(true&&false);// both values are true means the condition will true otherwise false
console.log(true||false);// at least one of the values is true
console.log(!true);// if the value is true means the condition will false
//---------------------------------------------------------------------------------------
console.log("5.Ternary operators");
let pin=1234;
let result=(pin==1234)?"valid pin":"invalid pin";
console.log(result);

let Age=20;
let result1=(Age>=18)?"eligible to vote":"not eligible to vote";
console.log(result1);
//---------------------------------------------------------------------------------------
console.log("Template literals");
let name="Ramesh";
let age=26;
console.log(`Hello, my name is ${name} and I am ${age} years old.`);
//---------------------------------------------------------------------------------------
//multi-line strings
let message=`This is a multi-line string.
It can span multiple lines without using escape characters.`;
console.log(message);
//-------------------Embedded Expressions with variables--------------------------------------------------------------
let f_name="ramesh";
let l_name="kumar";
console.log(`${f_name} ${l_name}`);
//---------------------------------------------------------------------------------------
console.log("operators precedence");
 let q=2;
 let w=5;
 console.log(q*w/q+(w-q)**q);// multip opertors are appared in one experssion so it follow by operators preedence method

