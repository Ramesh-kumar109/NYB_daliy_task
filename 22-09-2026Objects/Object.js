// control property object.
const user={ name:"kumar"};
Object.defineProperty(user,"id",{
   value:101,
   writable:false,//=> can't change form values.
   enumerable:false, // hidden form loop anad object.keys
   configurable:false  // can't delete values
});

user.id=102;//=> it can't declare the values.
console.log(user.id);
console.log(Object.keys(user));
delete user.id;
console.log(user.id);
console.log(user);
console.log(Object.getOwnPropertyDescriptor(user,"id")); //=> to display the element are the present

console.log("*******************************************************************");
console.log("===================================================================");
console.log("Lock an Object");
console.log(" 1.Object.preventExtension() method");
    
// 1.Object.preventExtension() method  using this we can't add new property
 const obj={name:"raj"};
 Object.preventExtensions(obj);
 obj.age=26;     // can't add 
 obj.name="sara";// can update
 obj.id=1;       // can delete 
delete obj.name;
console.log(Object.isExtensible(obj));
console.log("**********************************************************************");
console.log("===================================================================");
console.log("2.object.seal() method");
//  2.Object.seal() method  using this we can't add new property and updates

const seal={name:"kumar"};
Object.seal(seal);
seal.age=22;     // we can't add new property 
delete seal.name;// we cant delete
seal.name="sara";  // we can update
console.log(Object.isSealed(seal));
console.log("**********************************************************************");
console.log("===================================================================");

//3.Object.freeze() method  using this methd we can't add, delete, update
console.log("3.Object.freeze() method ");
const freeze={name:"raju bhai"};
Object.freeze(freeze);
 freeze.age=26;
 delete freeze.name;
 freeze.name="kumar";
 console.log(Object.isFrozen(freeze));
console.log("***********************************************************************");
console.log("=========================================================================");

console.log("copying the object");
console.log("Normal Copying");
const copy1={name:"ramesh"};
const copy2=copy1;// pointing the same reference variable.
console.log("normal copy=>"+copy2.name);
console.log("normal copy=>"+copy1.name);
console.log("***********************************************************************");
console.log("=========================================================================");

console.log("shallow Copying");

const shallow={
  name:"ramesh",
  age:25,
  address:{city:"Tamil Nadu"}  
};

const copy3={...shallow};// shallow copy
copy3.name="yogesh";
console.log(shallow.name); 

copy3.address.city="tamil nadu";
console.log(shallow.address.city);

console.log("***********************************************************************");
console.log("=========================================================================");
console.log("Deep copy");

const deep={
    name:"ramesh",
    age:25,
    address:{ city:"tamil nadu"}
}
 const copy5=structuredClone(deep); // deep copy
 deep.address.city="madurai";
 console.log(deep.address.city);
 
 console.log("************************************************************************");
 console.log("========================================================================");
 console.log("using for-in loop");
 const common={
    name:"ramesh",
    age:25,
    city:"madurai"
 };
 for(const keys in common){
    console.log(keys,common[keys]);
 };

console.log("***************************************************************************");

 //using object.key and foreach
 Object.keys(common).forEach(key=>{
console.log(key,common[key])
 })
console.log("***************************************************************************");
 // using object.values() looing
 console.log("object.values()");
for(const val of Object.values(common)){
    console.log(val);
};
console.log("***************************************************************************");

//  using object.entries()
console.log("object.entries()");
 for(const[ ke,va] of Object.entries(common) ){
  console.log(`${ke} ${va}`);
 };
console.log("=============================================================================");
 console.log("Date Object");

 const now=new Date();
 console.log(now);
 console.log(now.getFullYear());
 console.log(now.getDate());
 console.log(now.getTime());
 console.log(now.getHours());
 console.log(now.getMinutes());

console.log("=============================================================================");
console.log("Template literal");
var p1={
    name:"ramesh",
    city:"madurai",
    age:26
};

console.log(`${p1.name} ${p1.city} ${p1.age}`);

console.log("================================================================================");
console.log("Math Object");
console.log("1. math.round() method");
var a=4.5;// round the integer of nearest digits
var a2=4.9;
var a3=4.4;
var a4=-4.9
var a5=-4.1
console.log(Math.round(a));
console.log(Math.round(a2));
console.log(Math.round(a3));
console.log(Math.round(a4));
console.log(Math.round(a5));

console.log("*********************************************************************************");
console.log("math.floor() method");
 var b=4.5;// round the integer by negative
var b1=4.9;
var b2=4.1;
var b3=-4.9;
var b4=-4.5;
 console.log(Math.floor(b));
 console.log(Math.floor(b1));
 console.log(Math.floor(b2));
 console.log(Math.floor(b3));
 console.log(Math.floor(b4));

console.log("*********************************************************************************");
console.log("math.ceil() method");
 var c=5.9;
 var c1=5.1;
 var c2=-4.5;
 var c3=-5.9;
 console.log(Math.ceil(c));
 console.log(Math.ceil(c1));
 console.log(Math.ceil(c2));
 console.log(Math.ceil(c3));
 
 console.log("*********************************************************************************");
 console.log("math.random() method");
var d=4.5;
var d1=4.5;
console.log(Math.random(0,5));
console.log(Math.random(10,11));

console.log("==================================================================================");
console.log("String object");
 const s1="Hello";
 const s2=new String("Hello");  // object will show
 console.log(s1+" => "+typeof(s1));// 
 console.log(s2+" => "+typeof(s2));
 console.log(s2==s1);  // loos equality convert
 console.log(s1===s2);// different types
 console.log("*************************************************************************");
 const str=" Ramesh kumar ";

 console.log(str.length);//14 include space.
 console.log(str.toUpperCase());// RAMESH KUMAR
 console.log(str.toLowerCase());// ramesh kumar
console.log("***************************************************************************");
 console.log("searching in string object");
 console.log(str.indexOf("kumar"));//8 
 console.log(str.includes("Ramesh"));// True
 console.log(str.startsWith(" Ramesh")); //True
 console.log(str.endsWith("kumar ")); //True

 console.log("***************************************************************************");
 console.log("getting the string");
 console.log(str.slice(8,13));
 console.log(str.substring(0,7));

 console.log("*****************************************************************************");
 console.log("string replace and split method");
 console.log(str.replace("Ramesh","mani"));
 console.log(str.split(" "));
 console.log(str.trim());
 console.log(str.charAt(1));
 console.log(str[2]);
 console.log(str.repeat(2));
 console.log(str.padStart(30,"*"));

 console.log("DOM");