function button(){
    alert("your username and password are saved our database");
};

// variales

//variables are named in memory block,
// which is used to either store or access the value from the memory
var a=10;
let b=20;
const c=30;
var d=a*b+c
console.log(a+b+c);
console.log(d);
/* Primitive data types
     * A primitive Datatype is not an Object and no methods of its own it will store directly form the value not by reference
 (or) 
    *A primitive Datatype has single values are stored in singles memory that is called primitive datatype


/*
 Types of Primitive datatyes 
1. String
2.Number
3.Boolean
4.undefine
5.Null
6.BigInt
7symbols
*/

// 1. string:
// A  string is a collection of All Kind of Charaters which are enclosed by either Single Quotes or double quotes
//  for Example:
var a="Ramesh";
var z="Kumar";
console.log(a+" "+z);// typeof a is to find the variable which datatype has store
console.log("typeof "+typeof(a)+" datatype");//string

//2.Number
// A Number datatype will store numeric values both Integer and Decimal  number
 // for example

 var a=20 ,s=20.4;
 console.log(a+s);
 console.log(typeof(a+s));// number
 // 3. Boolean
 //  A boolean datatype is a special datatype it  will return some values either ture or false
 // for example:
 var a=10;
 var q='10';
 console.log(a==q,typeof(a)); // boolean

 //4.undefine
 // A undefine is a variable are create and it doesn't allocate the values result will come as undefine
 // for example
  var k;
  console.log(k);
  console.log(typeof(k)); //undefine

  // 5.null
  // A null is a keyword which is represent by empty memory block for browser
  // for example:
   var a=null;
   console.log(a);
   console.log(typeof(a));// Object
 //6.bigInt
 // A bigint is special datatype used to represent integers of arbitary Precision 
 // for Example:
  var a=1234567891232347+1;
  var r= BigInt(1234567891232347)+1n;
  console.log(a,typeof(a))//number
  console.log(r,typeof(r))// bigInt
 // 7.Symbols
 // Symbols are creates a unique, object property keys to avoid nameing collision.
 // for example
 var a=Symbol("id");
 var x=Symbol("id");
 console.log(a==x);
 console.log(typeof(a==x));