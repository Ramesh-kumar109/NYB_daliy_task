// Global scope
console.log("Global scope");
console.log(` A Global scope we declare the variable outside function (or) block we can accessible that is Global Scope`);
var p=10;
function golbalscope(p){
console.log(p);
};
golbalscope(p);
// another example
let count=0;
function addcard(){
    count++;
    console.log("card item add "+count);
};
function removecard(){
    count--;
    console.log("card item remove "+count);
};
addcard();
addcard();
removecard();
console.log("================================================");
console.log("Function Scope");

function functionscope(){
    var w="hello";
    console.log(w);
};
//console.log(w); //we can't access from outside the function
functionscope();

// another example
function checkbalance(num){
  var balance=num;
  console.log("Balance:"+balance);
};
checkbalance(5000);
//console.log(balance);// it will throw an error not access in  variable outside of function
console.log("================================================");
console.log("Block Scope");
function blockscope(){
    if(true)
    {
      let bss=11;
      const bs="welcome";
       console.log(bss);
       console.log(bs);
    } //console.log(bss);// throw an error outside side block can't access
};
blockscope();
// another example
function vote(age){
    if(age>18){
       let result="adult";
       console.log(result+" voted person");
    }//console.log(result) can't access the data
};
vote(20);
function voted(age){
    while(age>18){
        let conclusion="major";
        console.log(conclusion);
        break;
    }
};//console.log(conclusion);// not accessable in blockscope
voted(19);


console.log("=============================================================")
console.log("recursive function");
function fact(num){
    if(num<=1){
        return 1;
    }return num* fact(num-1);
};
console.log(fact(5));
console.log("==============================================================");
function fibnacci(n){
if(n<=1){
return n;
}return fibnacci(n-1)+fibnacci(n-2);
}for(let i=0;i<10;i++){
  console.log(fibnacci(i));
}
function isarmstrong(num){
let str=num.toString();
let digit=str.length;

function sumofpower(num){
    if(num==0){
return 0;
    }
 let lastdigits=num%10;
 return Math.pow(lastdigits,digit)+sumofpower(Math.floor(num/10));
}
return sumofpower(num)==num;//true
}
console.log(isarmstrong(153));
//===========================================
console.log("GCD");
function GCD(a,b){
if(b==0)return a;
return GCD(b,a%b);
};
console.log(GCD(12,22));//2
//============================================
console.log("sum of digits");
function sumofdigits(num){
if(num==0)return 0
return (num%10)+sumofdigits(Math.floor(num/10));
};
console.log(sumofdigits(1234));//10
//=========================================
console.log("reverse string");
function reverse_str(str){
    if(str==""){
        return "";}
    return str[str.length-1]+reverse_str((str.slice(0,-1)));
};
console.log(reverse_str("Ramesh"));







