console.log("using for loop method");
// using  for loop method find the index and values are present.
var furits=["Apple","Banana","Orange","Grapes"];
for(let i=0;i<furits.length;i++){// fetch the values
    console.log(i+"th index present=>"+furits[i]);
};

console.log("**************************************************");
console.log("Using for-of method");
// using for-of method
var furit=["Apple","Banana","Orange","Grapes"];
for(const fur of furit){
    console.log(fur);
};
console.log("**************************************************");
console.log("Using for-Each method");
var value=[10,20,30,40,50,];
value.forEach(function(item,index){
console.log((index+"=>"+item));
});


console.log("==================================================");
console.log("Using Array flattening");
var values=[1,[2,3],[4,[5,6]]];
console.log(values.flat());
console.log(values.flat(2));// specify deep   => why we using flat(2)
console.log(values.flat(3));// flatten compeletely depth.  => why we using flat(3)
console.log(values.flat(Infinity));// flatten  using infinity  =why we using flat(infinity).

console.log("====================================================");

console.log("some() method");//atleast one element will pass the condition  return true or flase will be provide.
var number=[1,2,3,4,5,6,7,8,9,10];
var even_num=number.some(num=>num%2==0);
console.log(even_num);
 var number=[1,2,3,4,5,6,7,8,9,10];// another  example odd number present or not
const  odd_number=number.some(num=>num%2!=0)
console.log(odd_number);
console.log("=================================================================="); 
console.log("*****************************************************");
console.log("every() method");
 var num=[2,4,6,8];
 const every=num.every(num=>num%2==0);
 console.log(every);

 //another example
 var num=[1,2,3,4,5];
 const every2=num.every(num=>num%2==0);
 console.log(every2);

 // another example
 var a=[];// even empty array can pass as the this condition it wil return true 
 console.log(a.every(num=>num>10));
console.log("=================================================================="); 
 console.log("*****************************************************");
 console.log("Join() method");
var furits=["Apple","Orange","grapes"];
console.log(furits.join());
console.log(furits.join(","));
console.log(furits.join("-"));
console.log(furits.join(""));

console.log("=================================================================="); 
console.log("*****************************************************");
console.log("sort() method");
var arr=[1,108,49,62,2];
console.log(arr.sort()); 
console.log(arr.sort((a,b)=>a-b));//ascending order
console.log(arr.sort((a,b)=>b-a));// descending order

console.log("=================================================================="); 
console.log("*****************************************************");
console.log("Removing duplicates in an Elements");
console.log("using set()method ");
var nu=[1,2,1,2,3,4,5,3,4,5];
console.log([...new Set(nu)]);

console.log("*******************************************************************");
console.log("using for fliter() method ");
var nu1=[1,2,3,1,2,3,4,5,4,5];
const unqiue=nu1.filter((item,index)=>nu1.indexOf(item)==index);
console.log(unqiue+"find first occurance value");

console.log("last occurance value");
var nu2=[1,2,3,2,4,5,4];
const newnu2=nu2.filter((item,index)=>nu2.lastIndexOf(item)==index);
console.log(newnu2+"last values occurance find");

console.log("*******************************************************************");
console.log("using for Reduce() method ");
var reduce=[1,2,3,4,5];
const sum= reduce.reduce((acc,cur)=>acc+cur,0);
console.log(sum);

console.log("===================================================================");
console.log(" map() method");
var map=[1,2,3,4,5,2,3,4,5,1];
var newmap= [...new Set(map.map(item=>item))];
console.log(newmap);// 1,2,3,4,5
 var user=[{id:1,name:"kumar"},
           {id:2,name:"sanjai"},
           {id:1,name:"kumar"}];

const van=[...new Set(user.map(user=>user.name))];
console.log({van});

console.log("======================================================================");
console.log("For-each() method");

var number=[1,2,5,3,4,5,1,2,3,4];
const vari=[];
number.forEach(iteam =>{
if(!vari.includes(iteam)){
      vari.push(iteam); 
   }
});
console.log(vari);



