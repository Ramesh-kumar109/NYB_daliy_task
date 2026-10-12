// An Object is data structure it will store collection of related data keys and values pairs.
const users={
    fname:"Ramesh",
    age:25,
    city:"madurai",
    greets:function(){
        return ` hi ${this.fname} im ${this.age} year old person im form ${this.city}`
    }
}
console.log(users.greets());

console.log("Creation of Object");
console.log("1.Object Literal");
 //1. Object Literal
 //its is normal object way to write the property inside the curly brackets.

const user={
    fname:"Ramesh",
    age:25,
    city:"madurai",
    greets:function(){
        return ` hi ${this.fname} im ${this.age} year old person im form ${this.city}`
    }
}
console.log(user.fname);
console.log(user.greets());

console.log("2.new object()");
// 2. New object()
//  it will create empty object and writen in property form curly barckets inside the object 

let car=new Object();
car.name="kia";
car.brand="sonnet";
car.fuel="petrol";
car.about=function(){
    return`the car name is ${this.name} brand has ${this.brand} fuel type has ${this.fuel} `  
}
console.log(car.about());

console.log("3.constructor function");
// 3. constructor function
//  its a regular function it will create multiple object with the same property and methods

function person(name,age){
        this.name=name;
        this.age=age;
}
person.prototype.greet= function(){
    return`hi,i'm ${this.name},${this.age}`;
}
const p1=new person("ramesh",25);
const p2=new person("kumar",26);
console.log(p1.name);
console.log(p2.greet());

console.log("4.Object.create");
// 4. Object .create
// it will create new empty object new object can use property and methods
const proto={
    user_detalis(name,age){
       return`${this.name},${this.age}`
    }
}
let copy=Object.create(proto);
copy.name="sanjai";
copy.age=22;
console.log(copy.user_detalis());


console.log("5.Class");
//5.a class is a blue print of creating objects and its will create instance new object that class with new
class cars {
constructor(brand,model){
this.brand=brand;
this.model=model;
}

display(){
    return`car brand ${this.brand} ${this.model}`
}

   describe(){
    return "class car";
}
}
const car1=new cars("kia",2022);
const car2=new cars("nissan",2022);
console.log(car1.display());
console.log(car2.describe());

console.log("*********************************************************************");
console.log("Object property and methods");
console.log("getters and setters methods");
// getters and setters methods are get read in values in getters methos and
//  write the proprerty form setters method this happen in running the own logic code

const identify={
    fname:"NYB",
    lname:"infotech",
    get fullname(){
        return`${this.fname} ${this.lname}`;
    },
    set fullname(value){
         [this.first,this.last]=value.split(" ");
    }
}
console.log(identify.fullname);
identify.fullname="ramesh kumar"
console.log(identify.first);

console.log("control property of an Object");
//  its  how behave the object property  in  where the property can change,delete, and hidden
// for example

const use={};
// 1. Object.defineproperty()

Object.defineProperty(use,"name",{
    value:"ramesh kumar",
    writable:false, // can't change form the values
    enumerable:false, // hiden form the loop and object keys and values
    configurable:false   // can't delete
});
use.name="suresh";
delete use.name
console.log(use.name);
console.log("*****************************************************************");
//2.objet.preventExtension()
// uing in this method we can't add the new property. 
console.log("2.objet.preventExtension()");
const a={name:"raju",city:"madurai"};
Object.preventExtensions(a);
a.age=25;// cant add age
a.name="sara";// can modify
//delete a.name;// can delete
a.city="salem";
console.log(a,a.age);

console.log("*****************************************************************");
console.log("3.object.seal() methods");
//using in this method we cant add property and delete
const b={name:"sukumar"};
Object.seal(b);
b.age=25;// we cant add property
b.name="rajesh";// we can modify
delete b.name;// we cant delete
console.log(b);

console.log("*****************************************************************");
console.log("4.Object.freez");
const c={name:"suresh"};
Object.freeze(c);
// using this method we cant add property, modified and delete.
c.age=22;//we cant add
c.name="mani";//we cant modify
delete c.name;// we cant delete
console.log(c);
console.log("*****************************************************************");
console.log("Copying Object");
// it is object mean  creating a new Object with te same data 
// Assigning it only copy form the reference .

console.log("1.Normal copy");
//Normal copy
// it is usually refers to using assign one variable to another variable
//  it doesnt copy form the object it only copy form the reference variable  
const copy1={name:"ramesh"};
const copy2=copy1;
copy2.name="suresh";
console.log(copy1);
console.log(copy2);
console.log(copy1===copy2);

console.log("Shallow copy");
//2.shallow copy 
// in this method create new object copied form top level Property
// 

const shallow={
    name:"rajesh",
    age:25,
    address:{city:"tamil nadu"}
};

const shallow2={...shallow};

shallow2.name="raju";
shallow2.age=27;
shallow2.address.city="madurai";
console.log(shallow);
console.log(shallow2);
console.log(shallow.address.city);
console.log(shallow2.address.city);

console.log("3.deep copy");
// 3.deep copy
// it will duplicate thecopy of object include nested array and object 


const deep={
    name:"ramesh",
    age:25,
    address:{city:"madurai"}
}

const deep2=structuredClone(deep);

deep2.name="subash"
deep2.age=27;
deep2.address.city="salem"
console.log(deep);
console.log(deep2);



console.log("Template literal");
//Template literal is a string literal it is embedded experssion 
// it is enclosed with the backtakits (``) and instead of string Quotes.

const names={
    name:"ram",
    city:"madurai"
};
console.log(`${names.name},${names.city}`);

console.log("*******************************************************************");
console.log("math Object");
//it will perform property and methods for mathematical opertion.
console.log("Math.round() method");
// it will perform round the digits near by values
console.log(Math.round(4.5));
console.log(Math.round(4.9));
console.log(Math.round(4.1));
console.log(Math.round(-4.5));

console.log("Math.floor() method")
// it will perform round the digits down the values

console.log(Math.floor(4.5));
console.log(Math.floor(4.1));
console.log(Math.floor(4.9));
console.log(Math.floor(-4.9));

console.log("Math.celi() method")
// it will perform the  round the nearly digits to positive
console.log(Math.ceil(4.5));
console.log(Math.ceil(4.1));
console.log(Math.ceil(4.9));
console.log(Math.ceil(-4.5));

console.log("Date");
const date= new Date();
console.log(date);
console.log(date.getMonth());
console.log(date.getDay());

console.log("String Object");

const str="Banana";
const str2= new String("Banana");
console.log(str,typeof(str));
console.log(str2,typeof(str2));

console.log("****************************************************************");
console.log("DOM fundamental");
console.log("Reading DOM property");
const input=document.getElementById('username');
console.log(input.value);
console.log(input.type);
console.log(input.className);
console.log(input.disabled);
console.log(input.id);


// find the second smallest number.
const number=[45,12,78,9,34];
 const sort=number.sort((a,b)=>a-b);
 console.log(sort);
  console.log(sort[1]);






