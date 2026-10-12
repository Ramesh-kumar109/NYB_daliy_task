// throttling is technique the limits 
// how frequently a function executes even when an event happens repeatedly
let count=0;
function scroll(){
    count++;
    document.getElementById('scroll')
    .textContent="execuite" + count +"Times";
    console.log("scroll",count);
}
window.addEventListener('scroll',scroll);
//with throttling 
let count1=0;
function throttle(callback,delay){
    let time=0;
    return function (...para){
        const now=Date.now();
        if(now -time>=delay){
            time=now;
            callback(...para)
        }
    }
}
function handleScroll(){
    count1++;
    document.getElementById('scroll1')
    .textContent="execuite" + count1 +"Times";
    console.log("scroll",count1);
}
const throttlescroll=throttle(handleScroll,500)
window.addEventListener('scroll',throttlescroll);
// with throttling the scroll handler runs at most once every 500 ms 