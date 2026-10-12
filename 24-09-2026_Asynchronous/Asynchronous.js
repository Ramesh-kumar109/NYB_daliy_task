//syntax=
// setTimeout(function,delay);

function message(){
      console.log("welcome to javaScript");
};

setTimeout(message,1000); //=> no need to call it will automatic execuite.

console.log("*****************************************************************");

// syntax for setinterval()=> setinteral(function,delay);

let count=0;

let timer= function(){
    count++;
    console.log(count +" printing the number");
    if(count===5){
        clearInterval(intervalId);
    }
};
let intervalId = setInterval(timer,1000);// using clearintervl only we can stop timeinteval method

console.log("***********************************************************************************");
console.log("Cleartimeout() method");
let wait=setTimeout(()=>{
    console.log("I'm waiting for Few minutes");
},5000);


clearTimeout(wait)
console.log("cleartimeout");

console.log("===================================================================================");

console.log("Event bubbling");

const Parent = document.getElementById("parent");
const child  = document.getElementById("child");
 
Parent.addEventListener('click', function () {
    console.log("parent click");
});

child.addEventListener('click',function (event){
    event.stopPropagation();// if we need to stop the parent method mans we use it.
    console.log("child button");
});

console.log("Event capturing");
const parent1 = document.getElementById("parent1");
const child1= document.getElementById("child1");
parent1.addEventListener('click',()=>{
    console.log("parent click");
},true);
child1.addEventListener('click',()=>{
    console.log("child click");
},true);

console.log("Event Delegration");

const item = document.getElementById("item");
item.addEventListener("click", (event) => {      
    if (event.target.tagName === "LI") {
        console.log("clicked:"+ event.target.textContent);// it doesn't work
    }
});

// saparte means work
const apple = document.getElementById('apple');
apple.addEventListener('click',()=>{
console.log("clicked: apple");
});
const banana = document.getElementById('banana');
banana.addEventListener('click',()=>{
console.log("clicked: Banana");
});
const cherry = document.getElementById('cherry');
cherry.addEventListener('click', () => {
    console.log("clicked: cherry");
});
console.log("============================================================================");
console.log("Normal event");
const button= document.getElementById('btn');
button.addEventListener("click",()=>{
    console.log("button was clicked");
});
// this concepts has doubts:
/*console.log("Thottle");
function throttle(func, delay) {
    let lastTime = 0;
    return function () {
        const currentTime = Date.now();
        if (currentTime - lastTime >= delay) {
            func();
            lastTime = currentTime;
        }
    };
}
function handle_scroll(){
console.log("scrolling...");
}
window.addEventListener("scroll", throttle(handle_scroll, 1000));
*/