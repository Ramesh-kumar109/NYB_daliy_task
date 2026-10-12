// event delegration => this concepts
let furits=document.getElementById('iteam');
furits.addEventListener("click",(event)=>{
if(event.target.tagName==='LI'){
    console.log("You clicked:"+event.target.textContent);
}
});

//  normal event => once clicked means  function will be start like trigger.

let submit=document.getElementById('sub');
submit.addEventListener("click",()=>{
    console.log("You details are save my database.");
});

//throtling.=>it is a technique used to limit when the function will execuite.
console.log("throtling concepts");
function throttle(fun, delay){
   let lastTime = 0;
   return function(){
    const currentTime = Date.now();
    if(currentTime - lastTime >= delay){
        fun();
        lastTime = currentTime;
    }
   };
};
function handleScroll(){
    console.log("scrolling!");
};
  window.addEventListener("scroll",
        throttle(handleScroll, 1000)
  );

console.log("===============================================================================");
console.log("Debouncing method");

let debouncing= document.getElementById('de');
debouncing.addEventListener("input",()=>{
    let time;
    clearTimeout(time);
     time=setTimeout(()=>{
console.log(" search iteam "+debouncing.value);
    },2000);
    
});

console.log("================================================================================");
console.log("callback function");

function start(name,callback){
console.log("Hello "+name);
callback()
};

function message(){
    console.log("this product are most valuable price");
};

start("ramesh",message);

console.log("=================================================================================");
console.log("Promises");

let promises= new Promise((resolve,reject)=>{
    let sucess=false;
    if(sucess){
          resolve('Data is recevied');
    }else{
        reject('Data is not recevied');
    }
});
promises.then((result) => {
console.log(result);
});
promises.catch((error)=>{
    console.log(error);
});
// another example using settimeout

let promise= new Promise((resolve)=>{
 setTimeout(()=>{
    resolve("enter the Project")
 },1000)
});
promise.then((result)=>{
    console.log(result);
});
console.log("===========================================================================");
console.log("revision");
console.log("promise concepts");

let login= new Promise((resolve,reject)=>{
    let data=true;
    if(data){
        resolve("id and password are correct");
    }else{
        reject("id and passowrd are invalid")
    }
});
login.then((result)=>{
           console.log(result);
});
login.catch((error)=>{
    console.log(error);
});

console.log("performance concepts");

// using thortling concepts
/** 
function thortling(fun,delay){
let last_time=0;
return function(){
    let current_time= Date.now();
    if(current_time-last_time >=delay){
        fun();
        last_time=current_time;
    }
};
};

function scroll(){
    console.log("Scolling!");
}
 window.addEventListener("scroll",thortling(scroll,1000));
*/
     
console.log(" revision of debouncing");
let bouncing= document.getElementById('id');
bouncing.addEventListener('input',()=>{
       let timer
       clearTimeout(timer);
       timer=setTimeout(()=>{
          console.log("searching: "+bouncing.value);
       },2000)
});
console.log("callfunction");
function NYB(name,callback){
console.log("hello"+name);
callback();
};
function soft(){
    console.log("welcome to my website");
};
NYB("ramesh",soft);
console.log("***********************************************************************");
console.log("Event delegration");
let del=document.getElementById('de');
del.addEventListener('click',(event)=>{
    if(event.target.tagName==="LI"){
        console.log("your click on"+event.target.textContent);
    }
});
console.log("************************************************************************");
console.log(" event bubbling");

let bubble=document.getElementById('pa');
let bubble1=document.getElementById('child');
let bubble2=document.getElementById('child1');
bubble.addEventListener('click',()=>{
    console.log("Parent class");
});
bubble1.addEventListener('click',()=>{
   // event.stopPropagation();
    console.log("child class");
});
console.log("*************************************************************************");
console.log("event capturing");
let cap=document.getElementById('par');
let cap1=document.getElementById('ch');
let cap2=document.getElementById('ch1');

cap.addEventListener('click',()=>{
    console.log("parent come");
},true);
cap1.addEventListener('click',()=>{
    console.log("child");
},true);

console.log("*******************************************************************************");
console.log("Asynchronous concepts");
let tim =setTimeout(()=>{
    console.log("I'm waiting  for the project let make me for confort for that");
},1000);

clearTimeout(tim);
console.log("clearTimeout has been excuited");

console.log("******************************************************************************");
console.log("setinterval method");
let int=setInterval(()=>{
console.log("setinterval will be execuited");
},1000);
clearInterval(int);
console.log('clearinterval will follow');
console.log("*******************************************************************************");
console.log("adding element form the DOM");
let heading = document.createElement("h1");//=> create
heading.textContent="Revision on Dom Concepts";//=>data insert
document.getElementById('add').appendChild(heading);
console.log(heading);

console.log("******************************************************************************");
console.log("removing element form te Dom");
let remove=document.getElementById('in');
remove.remove();

console.log("*****************************************************************************");
console.log("DOM Traversing");

let child=document.getElementById('sf');
console.log(child?.nextElementSibling);
console.log(child.nextElementSibling.previousSibling);
