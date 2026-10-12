// develope a small program
console.log("----Datatype----")
let fname="ramesh";
let age=25;
let mark=[80,85,90,70,40];
let address;
let flag=true;
let empty=null;
console.log(fname,typeof(fname));
console.log(age,typeof(age));
console.log(mark,typeof(mark));
console.log(address,typeof(address));
console.log(flag,typeof(flag));
console.log(empty,typeof(empty));
console.log("======================================");
console.log("----------Operators----------");

let total=mark[0]+mark[1];
let adult= age>=18;
let vote= adult && flag;
console.log("sum of first two mark "+total)
console.log(`you are eligible for voted person you age is ${age}`);
console.log("======================================================");
console.log("turthy and falsy");
let values=[0,-0,'false',NaN,null,undefined,"","hello",[],{},50,0n]
for (v of values){
    console.log(v,"=>",v?"turthy":"falsy");
}
console.log("===================================================");
console.log("Condition Statement")
function grade(num){
if(num>80 && num<=100){
    return(num+" A+ grade");
}else if(num>=60 && num<=80){
return(num+" A grade");
}else if(num>=45 && num<60){
return(num+" B grade");
}else{
    return(num+" F grade ");
}
};
console.log(grade(90));

console.log("===============================");
console.log("Looping condition");
 for(let i=0 ;i<mark.length;i++){
    console.log(`mark ${i+1}:${mark[i]} =>grade ${grade(mark[i])}`);
 };

 console.log("===============================================================");
 console.log("Function using parameter");
 function function_name( name,course,city){  
     console.log(`welcome to our campus your name plz  my name is ${name} i'm joining on this ${course} course im from ${city}`);  
 };
function_name( "ramesh","javascript","madurai");
console.log("================================================================");
 console.log("using defalut parameter");
 function function_name( name,course="CSE course",city){  
     console.log(`welcome to our campus your name plz  my name is ${name} i'm joining on this ${course} course im from ${city}`);  
 };
function_name( "ramesh","javascript","madurai");
function_name("kumar",undefined,"salem")
console.log("====================================================================");
console.log("rest parameter");

function lname(...ma){
let sum=0,av=0;
if(ma==0){
    return"No marks  are getting";
}
sum=ma.reduce((sum,ma)=>(sum+ma))
av=sum/ma.length;
return av.toFixed(2);
};
console.log(lname(45,50,55,60,70));
console.log(lname());




//-------------------------
function sand(){      //without parameters
    return "hello";
};
console.log(sand());

 function sand1(a,b){ // with parameters
    console.log( a*b);
    console.log(arguments) ;
 };
 sand1(2,5);