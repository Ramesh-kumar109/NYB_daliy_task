console.log("DOM fundamental");
console.log("Reading DOM property");
const input=document.getElementById('username');
console.log(input.value);
console.log(input.type);
console.log(input.className);
console.log(input.disabled);
console.log(input.id);

console.log("***********************************************");
console.log("Searching DOM in Elements");
// we have four types
//1.getElementById() 2. getElementByClassName()
//3.Queryselector()  4. QueryselectorAll()

console.log("1.getElementbyId()");
let para=document.getElementById('para');
console.log(para.textContent);

console.log("2.getelementbyclassName()");
let text=document.getElementsByClassName('id');
console.log(text);
//console.log(text[1].textContent);

console.log("3.getelementByTagName()");
let tagname=document.getElementsByTagName('p');
console.log(tagname.length);

console.log("4. queryselector()");
let head=document.querySelector('#header');
console.log(head.textContent);
let message= document.querySelector('.id');
console.log(message.textContent);

console.log("5.queryselectorAll()");
let fruits=document.querySelectorAll('.fruits');
console.log(fruits);

console.log("******************************************************************************");
console.log("DOM Transvering");
//it is travelling form parents child and siblings elements from Html Dom using JS

let child=document.getElementById('child');
// get parent element
console.log(child.parentElement.textContent);
// next element siblings
console.log(child.nextElementSibling.textContent);
// get previous element.
console.log(child.nextElementSibling.previousElementSibling.textContent);

console.log(child.parentElement.children);

console.log("********************************************************************************");
console.log("Adding Event listeners");

const button=document.getElementById('click');
button.addEventListener('click',()=>{
    alert("you are click the button");
});

console.log("****************************************************************************")
console.log("creating DOM element in Dynamically");

let p=document.createElement('p');
p.textContent="Hi Im creating DOM element in Dynamically"
document.getElementById('div').append(p)
console.log(p);

console.log("************************************************************************");
console.log("Asynchronous");
// which is used to  start the task and continue executing without waiting for task complete

console.log("settimeout()");
// which is used to the function wll be execute after giving the some spcific time it will execute.
setTimeout(()=>{
    console.log("function execute");
},1000)

console.log("setInterval()");
let count=0
let timmer=function(){
    count++;
    console.log(count,"execute intervals");
    if(count==5){
        clearInterval(intervalstop);
    }
}
let intervalstop=setInterval(timmer,1000);
console.log("****************************************************************");
console.log("cleartimeout()");

let time=function(){
    console.log("execute the settimeout")
};

let stoptimeout=setTimeout(time,6000);
clearTimeout(stoptimeout);
console.log("cleartimeout will be execute");

console.log("*****************************************************************")
console.log("Event Bubbling");
let fruit=document.getElementById('fruit');
fruit.addEventListener('click',()=>{
    console.log("parent click")
});

let apple=document.getElementById('child5');
apple.addEventListener("click",(event)=>{
    //event.stopPropagation()
    console.log("child click")
});

console.log("************************************************************");
console.log("Event capturing");
let parents=document.getElementById('parents');
parents.addEventListener('click',()=>{
    console.log("parent click");
},true);

let child6=document.getElementById('child6');
child6.addEventListener("click",()=>{
console.log("child clicked");
},true);

console.log("*****************************************************");
console.log("Event Delegation");
// which is uesed to attach one event Listener in parent element for 
// separate event listener in child element 

let vegetables=document.getElementById('vegetables');
vegetables.addEventListener('click',(event)=>{
    if(event.target.tagName==="LI"){
        console.log("you click: ",event.target.textContent);
    }
});
console.log("***********************************************************");
console.log("callback function");
let sum=0;
function start(a,b,c,callback){
 sum=a+b+c;
 callback(sum);
}
function messages(sum){
console.log(sum)
}
start(12,12,12,messages);
console.log("*************************************************************");
console.log("Promise");
const promise1=new Promise((resolve,reject)=>{
    let date=false;
    if(date){
    resolve("Data is received");
    }else{
        reject("Data is not received");
    }
})
promise1.then((respond)=>{
    console.log(respond)
})
promise1.catch((respond)=>{
    console.log(respond);
});