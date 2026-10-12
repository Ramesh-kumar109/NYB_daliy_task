///   function declaration
function fname(){
    console.log("Hello Ramesh");
};
fname();



/// function Expression--> when a create  a function should be assign a variable
// named function
let lname=  function Lname(){
    console.log("Hello kumar");
  }
  //lname();// ReferenceError: Lname is not defined  we can't call the function because it will be assign the variable
  lname();

//with-parameter
let add=function calcuate(a,b){
    return a+b;
}
console.log(add(56,6));


// arrow function
 let number=(a,b)=>{
    return a+b;
 }
 console.log(number(12,20));

 //shorter version

  let num=(a,b)=>a+b
 console.log(num(50,20));


 //Default parameters
  function string(name="Guset"){
      console.log("Hello "+name+" welcome to my world");
  };
  string();// the value 
  string("Ramesh");


 // clousure

 function bankaccount( balance){
         return function deposit(amount){
            balance=balance+amount;
            console.log("Balance: "+balance);
         }
 }
  let account= bankaccount(1000);
  account(1500);


  // this keyword: using inside an object


  let student={
    fname:"Ramesh",
    age:25,
    display: function(){
       console.log( this.name);
        console.log( this.age);
    }
  };
  student.display();


  // this keyword: using regular function

function show(){
     console.log(this);
}
show();

// this keyword: using arrow function

 const students={
    fname:"Ramesh",
    show: function(){
        const display=()=>{
console.log( this.fname);
        };
        display();
    }
  };
  students.show();


  // changing of this
 // inside an object method
  const person={
    name:"ramesh",
    showname: function(){
        console.log(this.name);
    }    
  };
  person.showname();

// using call method
   
function showname(){
    console.log("Hello "+this.name);
};
const person1={name:"ramesh"};
const person2={name:"kumar"};
showname.call(person1);
showname.call(person2);


//using bind() function 

const person3={name:"ramesh"};
function greet(){
    console.log(this.name);
};
const newfunction=greet.bind(person3);
newfunction();
