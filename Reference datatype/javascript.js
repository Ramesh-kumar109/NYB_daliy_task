let obj={
    name: "Ramesh",Age:24,city:"madurai",salaries: 20000, isMarried: false,workmode:"work from home",
};
console.log(obj)

//array have to types
//1. homogenous array
//2. heterogenous array

// array--- homogenous array
let arr=[10,20,30,40,50,9.7,5.01]
console.log(arr)
//array--- heterogenous array
let a=[10,20,30,"hello welcome to my code world",true,[1,2,3,4,5]]
console.log(a)

//function
function arthimetic(number1, number2) {
    console.log("arthimetic",number1+number2);
    console.log("arthimetic",number1*number2);
    console.log("arthimetic",number1-number2);
    console.log("arthimetic",number1/number2);
    console.log("code Execution completed");
    return number1+number2;
}
console.log("Result:", arthimetic(264, 300));

//  tassk-- date

let date=new Date();
console.log(date);



//1.set
let set=new Set();
set.add("Ramesh");
set.add(24);
set.add("madurai");
set.add(24);
console.log(set);

//2.WeakSet
let weakset=new WeakSet();
let obj1={name:"Ramesh",age:24,city:"madurai"};
let obj2={name:"Ramesh",age:24,city:"madurai"};
weakset.add(obj1);
weakset.add(obj2);
console.log(weakset);



//3.map
let map=new Map();
map.set("name","Ramesh");
map.set("age",24);
map.set("city","madurai");
console.log(map.get("name"));//Ramesh
console.log(map);

//4.WeakMap

var weekMap=new Map();
weekMap.set("1","Monday");
weekMap.set("2","Tuesday");
weekMap.set("3","Wednesday");
weekMap.set("4","Thursday");
weekMap.set("5","Friday");
weekMap.set("6","Saturday");
weekMap.set("7","Sunday");
console.log(weekMap.get("1"));
console.log(weekMap);


    