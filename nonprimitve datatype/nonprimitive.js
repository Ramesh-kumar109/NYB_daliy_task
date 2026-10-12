// Object

var a={Fname:"Ramesh",Lname:"kumar",City:"madurai", age:25 ,company: "NYB-infotech"};
console.table(a);

var obj1={value:20};
var obj2={value:20};
var obj3=obj1;
console.log(obj1===obj2);// false why because values are same but it differet object and different reference hold on init
console.log(obj1===obj3);// ture  same object reference here.

let user={
    name:'raamesh',
    age:25,
    city:'madurai'
};
console.table(user);
user.name='ramesh';
console.table(user);
delete user.name;
console.table(user);
console.log('age'in user);

for( key in user){
    console.table(key+': '+user[key]);
}
let person={
    name:'ramesh',
    age:25,
    city:'madurai',
    company:'NYB',
    location:'Hyd',
    salari:25000
};

console.log(person);
for(up in person){
console.log(up+':'+person[up]);
}

console.log(person.salari);
//-----Array------
//---homogenous array---
var a=[10,20,30];
var b=[40,50,60];
var c=a.concat(b);
console.log(c);
//--------heterogenous------
var a=[1,2,3,4,5];
var b=[10,20,[1,2,3,4,5],'be','Ramesh'];
 console.log(a);
console.log(b);
//----Function

//Program
function num(a,b){
    console.log("Add:"+(a+b));
    console.log("Sub:"+(a-b));
    console.log("Mul:"+(a*b));
    console.log("Div:"+(a/b));
    console.log("Percentage:"+ a%b);
};
num(10,20);
num(510,220);
num(20,40);

//Date
 let date= new Date();
  console.log(date);
  console.log(date.getMonth()+" month");
  console.log(date.getHours(),date.getMinutes());
  console.log(date.getDay());


//-----typeof value----
var a=10;
var b="Ramesh";
var c=true;
var d=10n;
var e;
var f=null;
var g=Symbol("ramesh");

console.log(a,typeof(a));// number
console.log(b,typeof(b));// string
console.log(c,typeof(c));// boolean
console.log(d,typeof(d));// Bigint
console.log(e,typeof(e));// undefine
console.log(f,typeof(f));// Null but i will give as object in js
console.log(g,typeof(g));//symbol

//------------------ map

let map=new Map();
map.set('name',"ramesh");
map.set(1,"one");
 let objkey={
    id:1
 };
 console.log(map.set(objkey,"object as key"));
 console.log(map.has("name"))
 map.delete(1);
 console.log(map.size);



  //-----weak map--
 
  let wm=new WeakMap();
 let obj4={
    name:"ramesh",age:25
 }
 wm.set(obj4,"some data");
 console.log(obj4);
//obj4=null;
console.log(obj4);// null
//----set---------------
  
let set=new Set([1,2,2,3,4,4,5,5]);
console.log(set.add(9));
console.log(set.add(9));
console.log(set.has(2))
console.log(set.delete(9));
console.log(set.size);

//--weakset--

let ws=new WeakSet();
let ob={ name:"ramesh"};
ws.add(ob);
ws.has(ob);
console.log(ws.has(ob));
ob=null;
console.log(ob);
 