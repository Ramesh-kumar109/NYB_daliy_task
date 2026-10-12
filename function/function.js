function calling(name){
    console.log(`Hello,${name}`);

}
calling("Ramesh");
//-------function with multiples parameters----//

function add(a,b){
console.log(a+b);
}
add(10,20);
//-------function with default parameters----//
function name(fname="kumar"){
      console.log(" Hello "+fname);
}

let r="ramesh"
name(r);
//----------------------------------------
//---function Experssion------
///1.anonymous function( using without name assign to variable)

const fname=function(lname){
    return` Hi Hello,${lname}`;

}
console.log(fname("Ramesh"));

 // different beetween var  let  const
var a=10;
console.log(a);
a=12;
console.log(a);
var a=20;
console.log(a);


//----------------------------


//---------------------------
//console.log(v);
//let v;
//console.log(v);/// not initization

//let v//  again not declaration
//console.log(v);


const h=50;
console.log(h);

let p=10;
console.log(p);




