// Promise.all() => run multiple promise  at the same time 
// and  wait for all promise for successful.

console.log("promise");
const Login=new Promise((resolve,reject)=>{
    let success=true;
    if(success)
    {
        resolve("id's are present");
    }else{
        reject("id's are not present");
    }
})

.then((result)=>console.log(result))
.catch((error)=>console.log(error));

console.log("****************************************************************************");
console.log("promise.all() method");

let p1= new Promise((resolve,reject)=> setTimeout(()=> resolve("user data"),2000));
let p2= Promise.resolve("promise p2");
let p3= true;
let p4 = Promise.reject("reject"); 

Promise.all([p1 ,p2, p3,p4])
.then((response)=>{
    console.log("response: ",response);
})
.catch((error)=>{
    console.log("error: ",error);
});

console.log("******************************************************************************");
console.log("promise.race");



let promise1= new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("promise1 method come "),1000)
})
 let promise2= new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("promise2 mehod come "),1500)
 })

 let promise3=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("promise3 method come"),2500)
 })


 Promise.race([promise1,promise2,promise3])
 .then((response)=>{
    console.log('response',response);
 })
 .catch((error)=>{
    console.log("error:", error)
 });

console.log("*******************************************************************************");
console.log("promise.allsettled() method");


let p5 = new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        resolve("execute the user function")
    },1000)
});
 let p6= new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        reject("execute the  product function")
    },1000)
});

 let p7= new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        resolve("execute the order function")
    },1000)
});

 Promise.allSettled([p5,p6,p7])
 .then((response)=>{
    console.log("response: ",response);
 })//.catch((error)=>{
    //console.log("error: ",error);
// })
console.log("*******************************************************************************");
console.log("Promises any() method");
 let promise_any= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("slow process function");
    },1000)
 });

 let promise_any2= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("fast process function")
    },500)
 });
  let promise_any3= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("reject process")
    },300)
  });
  Promise.any([promise_any,promise_any2,promise_any3])
  .then((response)=>{
    console.log("response:",response);
  }).catch((error)=>{
    console.log("error:",error);
  })
  console.log("******************************************************************************");
  console.log("Async & Await");
 // normal function 
  function getname(sname){
    return sname
  };

  console.log("normal function:=>",getname("ramesh"));
// using async method

async function get(){
    return "ramesh"
};

let gname=get();
console.log(gname);

// using normal into async function

function name(){
    return new Promise((resolve,reject)=>{
        resolve("resolve method")
    })
};
let s =name().then((response)=>{
    console.log("response: ",response);
})