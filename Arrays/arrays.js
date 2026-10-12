let furits=["apple","banana","Orange"];
console.log(furits);// 
console.log(furits[0]);// it will fetch the value form index
console.log(furits.push("Mango"));// add the values form array
console.log(furits);

console .log("Add the elements")

// add to the end
//push()--> the element should be add form last of an array
let a=[1,2,3]
a.push(4);
a.push(5,6,7);
console.log(a);
//------------------------------------------------------------
// Add to the Beginning
//shift
let ar =[1,2,3,4,5];// the element should be add form the initial value
ar.unshift(0);
console.log(ar);
//-------------------------------------------------------------

// adding value in  specific postion  using "splice " method
  var arr=[1,2,3,4];
  arr.splice(5,0,5);// first we need to 5th index should be zero after that value should be insert 
  arr.splice(4,0,8);
  console.log(arr);
//-------------------------------------------------------------

// using index directly
 var ars=[10,20,30,40]; // we can insert the data anywhere using index method
 ars[4]=50;
 ars[6]=90  // index should be insert but 5 index are empty
 console.log(ars);

//-------------------------------------------------------------


//...() -->  Add the element without mutating the original(return new array) 
let b=[1,2,3,];
let newarr=[...b,4]
let newarr2=b.concat(4,5,6,7);

console.log(newarr2);
console.log(newarr);
//-------------------------------------
console .log("finding  the elements")

// **finding elements**//

// 1.find()
var array=[10,20,30,40,50,120];  //50 matching the first value
console.log(array.find(x=>(x>40)));
//----------------------------------------------
// 2. indexof()---> find the index value will be provide

     //    1.findindex()
      var array=[10,20,30,40,50,120]; //50 matching the first value
      console.log(" Findindex value:"+array.findIndex(x=>(x>40))); 

      //   2.indexof()
      var array=[10,20,120,30,40,50,120];// it will provied for first index number
      console.log("the element present in the "+array.indexOf(120)+" index");
      // 3.lastindexof()
       var array=[10,20,30,120,40,50,120]; //it will  find provied for lastindex number
       console.log(array.lastIndexOf(120));
//----------------------------------------------------
 // 3.includes()---> find the value it will be provide  ture or flase     
        var array=[10,20,30,120,40,50,120];
       console.log(array.includes(120));
       console.log(array.includes(60));
 //----------------------------------------------------
 // 4. filter() ---> it will provide for all the matching element     
       var array=[10,20,30,120,40,50,120];

       var c=array.filter(x=>(x>30));
       console.log(c);
//----------------------------------------------------------
console .log("Remvoing the specific elements")

// **Remvoing the specific elements **

// 1. filter()

var arr=[1,2,3,4,5];
var newarry=arr.filter(x=>x!==3);
console.log(newarry);// it will values are not euqal means objects are store in reference variable

// 2.splice()
  var arr=[1,2,3,4,5];
  arr.splice(2,1);// remove from '2'->index and 1->how many values
  console.log(arr);//[1,2,4,5,]

  // 3. spread+ slice()
 var arr=[1,2,3,4,5];
  var index=2;
var newarrs=[...arr.slice(0,index),...arr.slice(index+1)];
console.log(newarrs);//[1,2,4,5] => only remove form 2 index 


// 4.indexof()+splice()
 var arr=[1,2,3,4,2,5];
 var index= arr.indexOf(2)
 if(index!==-1) arr.splice(index,1)
  console.log(arr);//[1,3,4,2,5] => only first value 2  will be remove 
//------------------------------------------------------------------------------------

// **Remvoing all  the elements **

console .log("Remvoing all  the elements")

// 1.arr.length=0 to assign means removing all the data
    var arr=[1,2,3,4,5];
    arr.length=0;
    console.log(arr);//[] removing all the elements

// 2.arr.splice()
    var arr=[1,2,3,4,5];
    arr.splice(0,arr.length)
    console.log(arr);

 // 3.arr[] to assign new variable
    var arr=[1,2,3,4,5];
    arr=[];
        console.log(arr);


//--------------------------------------------------------------
console.log('Combining of two array');
// **Combining of two array**
  // 1. spread syntax

  var arr1=[1,2,3];
  var arr2=[4,5,6];
  var com=[...arr1,...arr2];
  console.log(com);

  // 2.concat()
  var arr1=[11,12,13];
  var arr2=[14,15,16];
  var com1= arr1.concat(arr2);
  console.log(com1);
// 3. merged two arrays and remove duplicate data
  var r=[1,2,3,4];
  var m=[4,5,6,7,8,];
  let  merge=[...new Set([...r,...m])];
   console.log(merge);

//----reusable code----
  function combining(a,b){
    return [...a,...b]
  };
   console.log(combining([1,2,3,4],[5,6,7,8]));
   
//----------------------------------------------------------------
console.log(" copy of an array")
//*copy of an array**//
 //1.using spread method 
var arr=[1,2,3,4,5];
var arr2=[...arr];
arr2.push(6);
console.log(arr2);

//2.using slice()
 var arr=[1,2,3];
 var arr2= arr.slice();
 arr2.push(4);
 console.log(arr+" before changing")
console.log(arr2 +" after changing");

// 3. Array.form

