// An array is a collection of values (or) set of values.
// each and every values are separated by comma. 
// and every values areencolsed with square brackets.

console.log("Arrays");
console.log("Adding an elements in an array");
let arrays=[10,20,30,40,50];
console.log(arrays);

// Adding element in an array => 3 ways
//using push => it will add new element in last
console.log("using push");
let array=[];
array.push(12);
array.push(33,22);
console.log(array);

//using unshift => it will add  new element in beginning
console.log("using unshift");
array.unshift(1,2);
console.log(array);

console.log("using splice");
//using splice => it will add anywhere.
 array.splice(2,0,10);
 console.log(array);

 console.log("**********************************************************");
 console.log("removing element in arrays");
 console.log("using pop");
 // using pop => last element will be remove
  array.pop(22);
  console.log(array);
console.log("using shift");
  // using shift => it will remove the element in begnning

  array.shift(1);
  console.log(array);
console.log("using splice");
  // using splice => it will remove any where in specific position.
   array.splice(2,1);
   console.log(array);

   console.log("*********************************************************");
   console.log("accessing the element in array");
   //  accessing the element in array.

   let arr=[10,20,30,40,50,50,60,70,80,90,100];
   // using  length  how many element present in the array.
   console.log(arr,arr.length);

   //includes() method to identify the values in or not give by boolean values
console.log("includes() method");
console.log(arr.includes(100));

// indexof() method to matching the first elements

console.log("indexof() method");
console.log(arr.indexOf(50));

//last indexof() method to search the element in last

console.log("lastindexof() method");
console.log(arr.lastIndexOf(50));

//making an array empty.
console.log("making an array empty");

let arrrs=[10,20,30,40,50];
console.log(arrrs);
arrrs=[];
console.log(arrrs);
console.log("*****************************************************************");
// merge with two string.
console.log("merge with two string");
console.log("normally merge with two numbers");
// normally merge with two string
let str1=[1,2,3,4,5];
let str2=[6,7,8,9,10];
console.log(str1,str2)
let str3=str1+","+str2;
console.log(str3);

// using concat method  merge with two numbers
console.log("using concat method");
let str4=[1,2,3,4,5];
let str5=[6,7,8,9,10];

console.log(str4,str5);
let str6=str4.concat(str5);
console.log(str6);

// using spread operators.
console.log("using spread operators.");
let str7=[10,20,30,40,50];
let str8=[60,70,80,90,100];
let merge=[...str7, ...str8];
console.log(merge);

console.log("***********************************************************");
console.log("Array Flattening");
// array flattening means it converting a nested array into single level array

let falttening=[1,[2,3],[4,[5,6]]];
console.log(falttening.flat(1));
console.log(falttening.flat(Infinity));

console.log("***************************************************************");
console.log("some()method");
// some() atleat one element pass the given condition in an array
let some=[1,2,3,4,5,6,7,8,9,10];
let event_number=some.some(num=>num %2==0);
console.log(event_number);

console.log("*********************************************************************");
console.log("every()");
// every() all the element must pass the conditon even one condition fail means total statement will be fails.
let every=[1,2,3,4,5,6,7,8,9,10];
let add_number=every.every(num=>num%2!==0);
console.log(add_number);

console.log("**********************************************************************");
console.log("Join() method");
let fruits=["apple","Banana","cherry"];
console.log( fruits.join());// , is default
console.log(fruits.join("-"));
console.log(fruits.join(" "));

console.log("***********************************************************************");
console.log("sort()");
let Fruits=["apple","banana","cherry","apple","mango","banana"];
console.log(Fruits.sort());
// using numbers

let numbers=[1,10,2,45,11];
console.log(numbers.sort());// worng answer
console.log(numbers.sort((a,b)=>(a-b)));// ascending order
console.log(numbers.sort((a,b)=>b-a));  // descending order.


console.log("************************************************************************");
console.log("Removing Duplicate Elements");
// using  set() method.
let num=[1,2,3,4,5,2,3,4];
console.log([...new Set(num)]);

console.log("Fliter method");
// the fliter method using reduce the dulicate elements in indexs values.
let fliter=[1,2,3,4,4,5,6,6,5];
let unique=fliter.filter((item,index)=>fliter.indexOf(item)===index);
console.log(unique);


console.log("Reduce() method");
let reduce=[1,2,3,4,5];
let sum=reduce.reduce((acc,cur)=>acc+cur,0);
console.log(sum);

console.log("Find()");
let find=[1,2,3,4,5];
let sums = find.find(num => num > 3);
console.log(sums);

console.log(" Objects");
// An Object is a data structure used to store collection of releated data in keys and values pair 

console.log("creation of Object");
//1.Object literal
console.log("1.Object literal");
let details={
    fname:"ramesh",
    lname:"kumar",
    age:25,
    city:"madurai",
    function(){
     return ` hi ${this.fname}`   
    }
}
console.log(details);
console.log(details.function());

console.log("2.New Object()");
let obj=new Object();
obj.brand="toyata";
obj.model="lxi";
obj.year="2022";
obj.car=function(){
    return `${this.year} of the year`;
}
console.log(obj);
console.log(obj.car());

console.log("constructor function");
//3.constructor function.


