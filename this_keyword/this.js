// function => using  method calling
// normal function
console.log("using this function method calling");
const variable={ fname:"ramesh",lname:"kumar",age:26,function(){
console.log(this.fname,this.age);
}};
variable.function();


console.log("====================================================");
console.log("using plain function");
function usig_this(){
 console.log(this);// undefine (or) Window {window: Window, self: Window, document: document, name: '', location: Location, …}
} usig_this();


console.log("====================================================");
// function => using arrow method  object will can't inherit 
console.log("using arrow function method");
let person_info={fname:"sanjai",lname:"kumar",age:24,method:()=>
    console.log(this.fname,this.age)};
person_info.method();

console.log("====================================================");
console.log("  using constructor(new)");
// function using  constructor.  => when we using this constructor means it will create new constructor 
 function value(name){
    this.name=name;
} const p=new value("ramesh");
console.log(p);

console.log("=====================================================");
console.log(" using regular function");


const bike={
    brand:"FZ",
    model:"V3",
    display(){
        console.log(`this bike name is ${this.brand} and model for ${this.model}`);
    },
    display_arrow:()=> // in arrow function we cant use  loss the data
       console.log(`this bike name is ${this.brand} and model for ${this.model}`)  
};
bike.display();
bike.display_arrow();




console.log("=======================================================================");
console.log("Call() method");
function calling(value){
console.log(`${value} Hi i'm ${this.name} form ${this.city}`);
};

let person_details={name:"ramesh",city:"madurai"};
calling.call( person_details,"Hello");

//another example for call () method.
function  method(mark){
    if(this.mark>=45){
          console.log(` ${this.name} this person pass the exam  and he score ${this.mark}  and he get grade ${this.grade}`)
    }else{
          console.log(` ${this.name} this person Fail the exam  and he score ${this.mark}  and he get grade ${this.grade="F"}`)
    }
};
const grade_details={name:"sanjai",mark:90,grade:"A"};
const grade_details1= {name:"kumar",mark:80,grade:"A"};
const grade_details2 = {name:"Ramesh",mark:45,grade:"A"};
const grade_details3 ={name:"manoj",mark:20,grade:"f"};
                    

method.call(grade_details);
method.call(grade_details1);
method.call(grade_details2);
method.call(grade_details3);

console.log("=============================================================");
console.log("apply () method");
function add(a,b,c){
let sum=a+b+c;
console.log(sum);
};
let n=[1,2,3];
add.apply(null,n);

// another example
function details(gretting,punctuation){
console.log(`${gretting} ${this.name} ${punctuation} `);
};
const detail={name:"javascript"}
details.apply(detail,["Hi","!"]);


// another example
function sap(a,b,c,d,e){
    let sum=0;
   sum=a+b+c+d+e
    console.log(sum);
};
let num=[1,2,3,4,5];
sap.apply(null,num);

console.log("=========================================");
console.log("blind() method");
function bindof(grettings){
console.log(`${grettings} ,I'm ${this.name} im form ${this.city}`);
};
const det={name:"raju",city:"madurai"};
const newname=bindof.bind(det,"hi");
newname();
