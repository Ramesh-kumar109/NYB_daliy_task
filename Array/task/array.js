// using different  datatype in array
var arr=[1,"true",null,undefined,"ramesh,",10n,3.14];
console.log(arr);
console.log(typeof(arr));

// using different datatype arrays 

var mixeddatatype=[
    1,"JavaScript",true,null,undefined,
    {id:1,name:"Ramesh",city:"madurai",},function(){return("hi Hello")},[1,2,3]];
    console.log(mixeddatatype);
     mixeddatatype.forEach((iteam,index)=>{
        console.log(`${index}:${typeof(iteam)}=>`,iteam);
     });

     console.log("============================================");
     console.log(" array an element using index");
      var arr=[1,2,3,4,5,{name:"ramesh"},"true"];
       console.log(arr[0]);
       console.log(arr[5]);
       console.log(arr[6]);
       console.log(arr[2]);
    console.log("============================================");
    console.log(" Adding the Element in array");
    console.log("*********************************************");
    console.log("1.push() method");//=>  when we  use push method it will add the element form last
    var a=[1,2,3];
    a.push(true);
    a.push(false);
    a.push("ramesh");
    console.log(a);

     console.log("*********************************************");
     console.log("2.unshift() method");//=> when we use unshift() method it will add the element form beginning
     var b=[1,2,3];
     b.unshift(0);
     b.unshift("negative number will be start");
     b.unshift(-1);
    console.log(b);
    console.log("**********************************************");
    console.log("3.splice() method");//=> when we use for splice() methed add the element any where
    var c=[1,2,3];
    c.splice(3,0,4); // syntax for reference variable.splice(index,removing,insert)
    console.log(c);

    console.log("==============================================");
    console.log("Removing the Element in array");
    console.log("1.pop () method");
    var d=[1,2,3,4,5];// when we use this method it will removing form index of last digits.
    d.pop(4);
    console.log(d);
    console.log("*********************************************");
    console.log("2.shift() method ");
      var e=[1,2,3,4,5];
      e.shift(0);// when we use this method  it will remove form indexof first digits
      console.log(e);
       console.log("*********************************************");
       console.log("3.splice () method");
       var f=[1,2,3,4,5,67];
       f.splice(5,1); // we use this method index value and how many index are we delete.

       console.log(f);
       console.log("=============================================");
       console.log("1.Arrays length() method")
       var g=[1,2,3,4,5];
       console.log(g+"  array length  =>"+g.length);
       g=[10,20,30,40,50];
       console.log(g+" length =>"+g.length);
       console.log("************************************************");
       console.log("2.includes() method"); 
       var h=[10,20,30,40,50];// it will find the values  and return ture or false will given
       console.log(h.includes(60));//false
       console.log(h.includes(30));//ture
       console.log("************************************************");       
       console.log("3.indexof() method");
       var i=[1,2,3,4,5,6,7,2,8,9,10];// it will search the values form beginning 
       console.log(i.indexOf(1)+" index are present in the value");
       console.log(i.indexOf(2)+" index are present in the that value");
       console.log(i.indexOf(2,2));// second search values.
       console.log("*************************************************");
       console.log("4.lastindexof() method");
       var j=['a','b','c','d','a','e','f'];
       console.log(j.lastIndexOf("a"));// it will  search last of the index
       console.log(j.lastIndexOf("a",2));// lastof index it will search values are present at 2nd index
       
       console.log("==================================================================");
       console.log(" Making array Empty");
       var k=[10,20,30,40,50];
       console.log(k);
       k=null;//[]
       console.log("it will create empty array =>"+k);

       console.log("====================================================================");
       console.log("concat with two number");
       var m1=[10,20,30];
       var m2=[40,50];
       var m3= m1.concat(m2);
       console.log(m3);
       console.log("concat with two number => "+m1+","+m2);
      
       //merge with two string
       console.log("merge with two string");
       var m4=["ramesh"];
       var m5=["kumar"];
       var m6= [m4+" "+m5];
       console.log(m4.concat(m5));
       console.log("mering with two string =>"+m6);
       console.log("*****************************************");
       // using spreed operators merge numbers with two array
       console.log("spreed(...) Operators ");
       var m7=[10,20,30];
       var m8=[40,50];
       var merge=[...m7,...m8];
       console.log(merge);
     console.log("*******************************************");
       //using spreed opertors merge with two string
       var m9=["ramesh"];
       var m10=["kumar"];
       var merge1=[...m9,...m10];// using spreed(...)method combaining two string.
       console.log(merge1);








