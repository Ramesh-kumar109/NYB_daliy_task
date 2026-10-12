console.log("For loop");
  var a=10;
  for(var i=1;i<=a;i++){
console.log(i);
  }
  //sum of number
  var nu=[10,20,30,40];
  var sum=0;
  for(let i=0;i<nu.length;i++){
    sum=sum+nu[i];
  }
  console.log(sum);

//-------------------------
// counting  down
var q=5;
for(let i=5;i>0;i--){
console.log(i);
}
//-------------------------
// prime number
var pm=19;
var flag=true;
if(pm<2){
    flag= false
}else{
    for(let i=2;i<pm;i++){
        if(pm%i===0){
            flag=false;
        }
    }
}
if(flag){
    console.log(pm+" prime number");
}else{
console.log(pm+" not a prime number");
}
//--------------------------------------------------------------------------------------------

console.log("While loop");
//for example
var a=5;
var i=1;
while(i<=a){
   console.log(i);
   i++;
}
//-----using while loop adding the value---------------------------------------------------
var a=10;
var sum=0
var i=0;
while(i<=a){
 sum=sum+i;
 i++;
 
}console.log(sum);
//-----------------------------------------
var a=17;
var flag=true;

if(a<2){
    flag=false;
}else{
    var i=2;
    while(i<a){
        
         if(a%i==0){
           flag=false
           break;
         }
           i++;
    }
    
}
console.log((flag=true)? a+"prime ":a+"not prime");
//-------------------------------------------------------------

console.log("for..in  loop");//==>using for..in loop it get the key values only
let user={
    fname:"ramesh",lname:"kumar",city:"madurai",age:25
}
 for(let keys in user){
console.log(keys,":",user[keys]);
 }
 //--------for..of.loop

 console.log("for..of..loop");
 let person={
    fname:"ramesh",lname:"kumar",city:"madurai",age:25
 }
 for(let key of Object.entries(person)){
    console.log(key);
 }

 //------------------------
// Analyze infinite loop scenarios and learn how to avoid them.
// forgetting to updates variable
var i=0;
while(i<5){
    console.log(i);
    i++;// missing means it will be infinite loop process
}
//undating the variable in the wrong direction
var i=1;
while(i<=1){  // direction should be changing means it never end it wil go for infinite loop
console.log(i);
i++;// 
}