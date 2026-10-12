    // if statement
    var age=20;
    if(age>18){
        console.log(age+" Eligible to vote");
    }
  // another example of if statement
  var atm=1234;
  if(atm==1234){
    console.log("Atm pin is valid");
  }

  //------if else statement------------------------------------
   var age=15;
   if(age>18){
   console.log(age+" you are eligible to votes for this year");
   }else{
    console.log(age+" you are not eligible to vote for this year");
   }

   // another example of if else statement
   var pin=1234;
   if(pin==1234){
     console.log(pin+" your pin is valid");
   }else{
    console.log(pin+" your pin is invalid number plz try to again");
   }
   //--------------if- elseif-else statement-----------------------------
 var mark=39;
 if(mark>=90 && mark<=100){
    console.log(mark+" A grade");
 }
 else if( mark>=70 && mark<90){
console.log(mark+" B grade");
 }
 else if(mark>=45 && mark<70){
 console.log(mark+" C grade");
 }
 else{
    console.log(mark+" Fail the exam");
 }
//------ another example
var pen=100;
if(pen>50){
console.log("Hero pen you bought this price rs: "+pen);
}else if(pen>30){
console.log("stylish pen you bought this price rs: "+pen);
}else if(pen>10){
console.log("mark pen you bought this pirce rs:"+pen);
}else{
    console.log("not Avaliable this price in pen rs: "+pen);
}
//-------------switch statement-----------------------------
/* 
var menu=prompt("please option your food \n 1.Dosa \n 2.sambar rice \n 3.white rice \n 4.curd rice");
switch(menu){
case "1":
    console.log("Dosa will be ready for five minutes");
    break;
case "2":
    console.log("sambar rice will be ready");
    break;
case "3":
    console.log("white rice will be ready soon ");
    break;
case "4":
    console.log("curd rice is ready");
    break;
    default:
        console.log("you foods are not Avaliable in our hotel");
};


//----another example of switch statement

var car= prompt("Enter your choice! \n 1.baleno \n 2.Kia sonnet \n3.Nissan magnite \n 4.Duster \n 5.i20 asta");
switch(car){
   case"1":
       console.log("baleno car price at 5L"); 
        break;
        case"2":
       console.log("Kia sonnet car price at 9L"); 
        break;
        case"3":
       console.log("Nissan magnite car price at 8L"); 
        break;
        case"4":
       console.log("Duster car price at 4L"); 
        break;
        case"5":
       console.log("i20 asta car price at 5L"); 
        break;
        default:
            console.log("you are searching out of car plz search the valid cars");
};
*/
//-------------------------using funtion method-----------------
var car= prompt("Enter your choice! \n 1.baleno \n 2.Kia sonnet \n3.Nissan magnite \n 4.Duster \n 5.i20 asta");

function details(car){
switch(car){
    case"1":
       return "baleno car price at 5L"; 
     case"2":
       return " Kia sonnet car price at 9L"; 
    case"3":
       return "Nissan magnite car price at 8L" 
    case"4":
       return "Duster car price at 4L"; 
   case"5":
       return "i20 asta car price at 5L"; 
        default:
            return"you are searching out of car plz search the valid cars";
}
}
 console.log(details(car));


// -----truthy values----------
if("0"){
    console.log("zero is a truthy value");
}else{
console.log("zero is not a truthy value");
}
// -----falsy values----------
let m=""
if(m){
    console.log( m+" it is truthy value");
}else{
    console.log(m+" it is falsy value");
}
//----------------------------------------------

console.log("Ternary operator");

var age=19;
var result=(age>18)?"you are eligible so enter in this hall":"you are not eligible so you are not enter in tis hall";
console.log(result);
