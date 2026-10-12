
// what is Object..
const person={
    name:"ramesh",lname:"kumar",city:"madurai",age:25,method(){
        return (` name:${this.name} lastname:${this.lname} city:${this.city} age:${this.age}`);
    }
}
console.log({person});
console.log(person.method());

// using arrow function  in same function we cant access form the values result will be get undefine
const person_1={
    name:"ramesh",lname:"kumar",city:"madurai",age:25,method:()=>{
        return (` name:${this.name} lastname:${this.lname} city:${this.city} age:${this.age}`);
    }
};
console.log(person_1.name);
console.log(person_1.method());

// 1.Object creation.
// Object Literal using normal object
const details={
    name:"ramesh",lname:"kumar",city:"madurai",age:25,method(){
        return (` name:${this.name} lastname:${this.lname} city:${this.city} age:${this.age}`);
    }
}
console.log({details});
console.log(details.method());


// 2.new Object() 
console.log("****************************************************************************");
console.log(" using new Object ");
var car=new Object();
car.carname="sonnet";
car.brand="kia";
car.year="2025";
car.fuel="Diesel"
car.start=function(){
    return `${this.brand} ${this.carname} ${this.year} ${this.fuel} `;
}
console.log(car);
console.log(car.start());

//3.constructor function
console.log("****************************************************************************");
console.log(" uing Consturctor function in object");
 
function Person(name,age){
 this.name=name;
 this.age=age;
 };
Person.prototype.details=function(){
    return ` Hi my name is ${this.name} i'm ${this.age}year old person `;
};
 const p1=new Person("ramesh",25);
 const p2=new Person("kumar",26);

 console.log(p1.name);//ramesh
 console.log(p1.details());// Hi my name is ramesh i'm 25year old person 
 console.log(p2.name);
 console.log(p2.details());

 console.log(p1 instanceof Person);// true
 console.log(p1.constructor=== Person);// true
// another example with own way


function Bike( name,model,year,price){
this.name=name;
this.model=model;
this.year=year;
this.price=price;
};
// prototype we use the copy the values
  Bike.prototype.fun= function(){
      return `The new brand ${this.name} ${this.model} bikes are Comming soon in this ${this.year} and then price is${this.price}  and more built functions are geeting in this bike` ;
  };
 //creating the consturctor.
  let p3=new Bike("YAMAH","FZV3",2026,"1.75L");
  console.log(p3.name);
  console.log(p3.fun());
  console.log(p3 instanceof Bike);

console.log("*********************************************");
console.log(" using 'Class' Object-creation");
 class cars{
 constructor(brand,year){
    this.brand=brand;
    this.year=year;
 }
    //method( share via prototype)


    describe(){
   return `${this.brand}${this.year}`;
    };

    // static method: called on the class itself

    static info(){                      // why we need use in this method
        return "car class";
    }
 };
 const cars1=new cars("nissan",2026);
 const cars2=new cars("magnite",2026);

 console.log(cars1.describe());
 console.log(cars.info());
 console.log(cars2 instanceof cars );
 console.log("using Exten keyword");
  class Electric_car extends cars{
         constructor (brand,year,battery){
        super(brand,year)
        this.battery=battery;
         }

         display(){
            return` the car moadel is ${this.brand} and create at ${this.year} and battery${this.battery} Kwh`;
         }
  }
  const tesla=new Electric_car("tesla",2026,75);
  console.log(tesla.display());

 console.log("***************************************************************");
 console.log("object.create() method");
 const proto={greet(name){
    return ` hi ${this.name} `
 }};
 const copy=Object.create(proto);
 copy.name="jack";
 //proto.name="singer";
 console.log(copy.greet());
 
 console.log("=================================================================================");
 console.log("Object  properites and methods ");

 const variable={
    name:"ramesh",
    age:26,
    guest(){
        return `${this.name} ${this.age} ` 
    }
 };
 console.log(variable.name);
 console.log(variable.age);
 console.log(variable.guest());

 console.log("*******************************************************************8");
 console.log(" adding");

 const vari={
    name:"ramesh",
    lname:"kumar",
    age:26,
    guest(){
        return ` name =>${this.name} age =>${this.age} email =>${this.email} ` 
    }
 };

 vari.email="ramesh@gmail.com"; //=> adding in objects
vari.age=27; //=> updates in object
delete vari.lname; //=> deleteing the object
console.log(vari.guest());

console.log("check with loop");
console.log("************************************************************");
console.log("name" in vari);
console.log(vari.hasOwnProperty("age"));
 for(const key in vari){
console.log(key,vari[key]);
 };
 
 console.log(Object.keys(vari));// using keys get the result
 console.log(Object.values(vari)); // using values get the reuslt
 console.log(Object.entries(vari));// using entire get result like array.
   
console.log("***************************************************************");
console.log(" using Getter and setter");
const person_details={
    fname:"ramesh",
    lname:"kumar",
    
get fullname(){
    return ` ${this.fname} ${this.lname}`;
},
set fullname(values){
[this.fname,this.lname]=values.split(" ");
}
};
console.log(person_details.fullname);
person_details.fullname="raj kumar";
console.log(person_details)
console.log(person_details.fname);
 






