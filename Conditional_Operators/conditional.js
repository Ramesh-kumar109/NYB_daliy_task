// conditional operators
function checkPin(pin){
if(pin===12345){
   console.log("welcome Ramesh")
}
}
let pin=12345
checkPin(pin)
//------------------------------
if(pin!=12345){
console.log("code execution not completed")
}
//------------------------------

//if-else statement

let number=1234556
if(number===12345){
    console.log("welcome to sbi Atm")
}
else{
    console.log("Your pin is incorrect plz check your pin and try again")
}
//if-else-if statement

let marks=80
if(marks>90){
    console.log("A+ grade outstanding")
}
else if(marks>80){
    console.log("B grade very good")
}
else if(marks>70){
    console.log("C grade very good")
}
else{
    console.log("D grade need to improve")
}


//For example
//Prime number check
function isPrime(num,divisor=2){ 
if(num<=1){
    return (num+" is not prime number");
}
if(divisor*divisor>num){
    return (num+" is prime number");
}
if(num%divisor===0){
    return (num+" is not prime number") ;
}
return isPrime(num,divisor+1);
}
console.log(isPrime(15));

/*

function printPrime(n,current=2){
    if(current>n){
        return;
    }
    if(isPrime(current)){
        console.log(current+" is a prime number");
    }
    printPrime(n,current+1);    
}
printPrime(30);
*/


// Switch condition//
// without using function method //

var menu="dosa"
switch(menu){
    case"dosa":
                console.log("dosa is available")
        break;
        case"vada":
                console.log("vada is available")
                break;
        case"poori":
                console.log("poori is available")
                break;
        default:
            console.log("item not available")
}
// with using function method //

function checkMenu(menu){
switch(menu){
    case"dosa":
                return "dosa is available";
                break;
    case"vada":
                return "vada is available"; 
                break;
    case"poori":
                return "poori is available";
                break;
        default:
            return "item not available";
}
}
console.log(checkMenu("rice"));


//user choice //
const uc=prompt("choose Option\n1.Balance\n2.Mini Statement\n3.printing passbook\n4.Enter your deposite\n5.change your pin")

switch(uc){
    case "1":
       console.log("1.Balance Rs:10000");
        break;
    case "2":
        console.log("2.Mini Statement will be print");
        break;
    case "3":
        console.log("3.printing passbook");
        break;
    case "4":
        console.log("4.Enter your deposite amount");
        break;
    case "5":
        console.log("5.Pin change Option");
        default:
        console.log("option not Avaliable");          

}

//using function method  using user_choose//

function userchoice(UC){
switch(UC){
    case "1":
        return("1.Balance Rs:10000");
        break;
    case "2":
        return("2.Mini Statement will be print");
        break;
    case "3":
        return("3.printing passbook");
        break;
    case "4":
        return("4.Enter your deposite amount");
        break;
    case "5":
        return("5.Pin change Option");
        default:
        return("option not Avaliable");          

}
}
const UC=prompt("choose Option\n1.Balance\n2.Mini Statement\n3.printing passbook\n4.Enter your deposite\n5.change your pin")
console.log(userchoice(UC));



//ternary condition //

console.log("ternary condition ");
let grade=99;
let result=(grade>90&grade<=100)?"A+ grade":(grade>80&grade<=90) ?" A grade":(grade>=50&grade<=80)?"B grade":grade<=35& grade>50?"C grade":"Fail the exam";
console.log(result);



