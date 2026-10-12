/*let num=8;
let i
let flag=true;
if(num<=1){
    flag=false
}
else{
for(i=2;i<num;i++){
    if(i%num===0)
    {
        flag=false;
        break;
    }
}
    if(flag==true){
        console.log(num +' is prime number');
    }
    else{
        console.log(num+'is not prime number');
    }

}
*/
/*
let n=15;
let flag=true;
let i
if(n<=1){
    flag=false
}
else{
    for(i=2;i<n;i++){
        if(n%i===0){
            flag=false;
            break;
        }
    }
}
if(flag===true){
   console.log(n+' is prime numer');
}
else{
       console.log(n+' is not prime numer');

}
/*
// prefect number //
 let number=prompt("enter the number");
 let sum=0;
 let o
 for(o=1;o<number;o++){
    if(number%o===0){
          sum+=o;
    }
    
 }
 if(sum==number & number>1){
    console.log(number+"is a prefect number");
 }
 else{
    console.log(number+"is a not prefect number");
 }

*/
// odd number //
/*
let i;
let n=7;
    if(n%2===0){
        console.log(n+'is even number');
    }
    else{
 console.log(n+"is odd number");}
*/
/*
// while loop using even number//
let i=1;
let count=0;
while(count<10){
    if(i%2===0){
       console.log(i);
       count++;// this loop will run for 10 values
}  
       i+=1; 
       //count++// here the value will be increase 
  }  


let input="";
while(input!=="exit"){
input=prompt("Type 'exit' to stop:");
}
console.log("loop end");

//do while loop//

//syntax//
/*
do{
---code---
}while(condition);
*/
/*
//----sum of digits-----//
let sum=0;
let rem=0;
let number=1234;
do{
    rem=number%10;
    sum=sum+number%10;
    number=parseInt(number/10);//why we are using parseInt means numer/10 it wil come decimal value like 11.5,2.6  if we use pareInt mean it will round the value
}while(number>0)
console.log(sum);
*/

/*
// we using function method//
function sumofdigits(num){
    if(num<0){
       num=num*-1;
    }
    let sum=0;
    let rem=0;
    do{
        rem=num%10;
        sum+=rem;
       // num=num/10 |0;// bitwise or here using....
         num=parseInt(num/10);

    }while(num>0);
    return sum;
}

let num=prompt("Enter the number");
console.log("sum of digits:"+sumofdigits(num));

*/

//for...of loop// it will provide as object values---->looping with string
let fname="Ramesh";
for(let a of fname){
    console.log(a);
}


//---->looping with string
let lname=["ramesh","yogesh","siva"];
for(let Lname of lname ){
    console.log(Lname);
}

//for...in loop  (it will provide as key value---->looping with string
 let value={ffname:"ramesh",lname:"kumar",age:25,citiy:"madurai"};
 for(let cha in value){
    console.log(cha+':'+value[cha]);
 }





