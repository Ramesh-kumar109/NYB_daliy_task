function getdata(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Data has present");
        },1000);
    })
}

async function fetchdata(){
    try{
        const data=await getdata();
        console.log(data);
    }catch(error){
     console.log("error: ",error);
    }finally{
        console.log("response completed");
    }
}
fetchdata();

console.log("*****************************************************************************");
function newdata(){
      return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            reject("server error");
            console.log("******************************************************************");
        },1000);
      })
}

async function fetch(){
    try{
        const run= await newdata();
        console.log(run);
    }catch(error){
        console.log("error: ",error);
    }finally{
        console.log("Request completed");
    }
}
fetch();
console.log("*****************************************************************************");
console.log("Array Destructuring");
  let fruits=["apple","banana","cherry"]; // ['apple', 'banana', 'cherry']
  console.log(fruits);
  // using array destructuring

  let [first,second,third]=fruits;//destruucring arrays 
  console.log("first furits name=> ",first);
  console.log("second furits name=> ",second);
  console.log("third furits name=> ",third);
  console.log(fruits[0])//arrays



  //using function method

  function details(name,age,role){
      console.log("using function method in array destructuring");
    console.log("name=> ",name);
    console.log("age=> ",age);
    console.log("role=> ",role);
  };
  details("ramesh",25,"Web Developer");

  //try the code that might cause an error here 
  //throw means create your own error when a condition is wrong 
  //catch means catch and handle that error 

  //try , throw ,and catch
/*  try {
    let age = 15;
    if(age < 18){
        throw new Error("age is not eligible  it must be above 18")
    }
      console.log("you are eligible")
  }catch (error)
{
    console.log(error.message)
}
*/
console.log("Object Destructuring");
const obj={
    name:"ramesh",
    age:26,
    tool:"javascript"      // normal object declare
};

// object Destructuring

const{name,age,tool}=obj;
console.log(name);
console.log(age);
console.log(tool);

let user={fname:"kumar",age:22};

let {fname,ages}=user
fname="ram";
console.log(fname);
console.log(user.fname);

console.log("iterator");
const number=[10,20,30];
const iterator=number[Symbol.iterator]();   // array can iterable
console.log(iterator.next());
console.log(iterator.next());           // objet will iterator here
console.log(iterator.next());
console.log(iterator.next());

console.log("Generator");

function* generators(){      // normal generator
    yield 10;
    yield 20;
    yield 30
};

const numbers=generators();
console.log(numbers.next());
console.log(numbers.next());
console.log(numbers.next());
console.log(numbers.next());



// using loop

function* generator(){
    yield 10;
    yield 20;
    yield 30;
};
for(const num of generator()){
    console.log(num);
}