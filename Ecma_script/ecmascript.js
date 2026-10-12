// map
console.log("using Map concept");
const map=new Map();
map.set(1, 23)// adding the map keys and values
   .set(2,"kumar")
   .set(3,"sanjai");
 console.log(map);// it will give the whole map
 console.log(map.get(1));// it will give the value of key 1
 console.log(map.has(3));// it will check the key 3 is present or not
 console.log(map.size);// it will give the size of map

 for(key of map.keys()){
console.log(key);
 }
 map.delete(2);
 console.log(map)
//--------set
console.log("set concept");
const set=new Set();
set.add(1,21)
.add(2,22)
.add(3,33)
.add(4,"ramesh")
.add(2,22)
console.log(set);
console.log(set.size);
console.log(set.has(3));
console.log(set.delete(4));
console.log(set.size)

//---------------------------
//task for phone number
const number=new Set();
number.add(8)
 .add(1)
 .add(1)
 .add(0)
 .add(8)
 .add(4)
 .add(9)
 .add(9)
 .add(3)
 .add(0)
 console.log(number.size);
 console.log(number);

//-------- weak map
 const wm=new WeakMap();
 let obj1={
    fname:"ramesh"
 }
 let obj2={
    lname:"kumar"
 }
 let obj3={
    fname:"sanjai"
 }
wm.set(obj1,"hello")
wm.set(obj2,"hello")
wm.set(obj3,"hello")
console.log(wm);
console.log(wm.has(obj2))
wm.delete(obj2);
//console.log(wm.has(obj4));