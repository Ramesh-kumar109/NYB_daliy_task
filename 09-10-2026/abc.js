// debouncing means if a user try type something then js waits until user stop typing for,

function debouncing(callback,delay){
let item;
return function(...para){
clearTimeout(item)
item=setTimeout(()=>{
    callback(...para);

},delay)


};
}
function search_product(product){
console.log("Search Info Product",product);
}
const search1=debouncing(search_product,500);//debouncing

const read1=document.getElementById('search1');
read1.addEventListener('input',function(event){
    search1(event.target.value)
});


// without debouncing what we will get
const search=debouncing(search_product);//without debouncing
search("j")
search("ja")
search("jav")
search("java")
search("javaS")
search("javasc")
search("javascr")
search("javascri")
search("javascrip")
search("javascript")


const read=document.getElementById('search');
read.addEventListener('input',function(event){
   
search(event.target.value)
});
