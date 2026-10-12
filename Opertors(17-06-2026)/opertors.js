//Operators
console.log("Arithmetic Operators")
//1. Arithmetic Operators:
//  +,-,*,/,%,++,--

let a=10
let b=6
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a**b)
console.log(a/b)
console.log(a%b)
console.log(++a)
console.log(--b)
//------------------------------

console.log("Assignment Operators")
//2. Assignment Operators:
//  =, +=, -=, *=, /=, %=

let c=30
let d=10
console.log(c+=d)
console.log(c-=d)
console.log(c*=d)
console.log(c/=d)
console.log(c%=d)
console.log(c**=d)
//------------------------------

console.log("Comparison Operators")
//3. Comparison Operators:
//  ==, ===, !=, !==, >, <, >=, <=

let x=10
let y=8
console.log(x>y)
console.log(x<y)
console.log(x>=y)
console.log(x<=y)
console.log(x==y)
console.log(x===y)
console.log(x!=y)
console.log(x!==y)

console.log("Logical Operators")

// 4. Logical Operators:
//  &&, ||, !
let p=true
let q=false
console.log(p && q)
console.log(p || q)
console.log(!p)

console.log("string Operators")
//5. string Operators:
let str1="Ramesh"
str1+=" Kumar"
console.log("my full name is "+`${str1}`+" i am a Associate software engineer at NYB-infotech")

console.log("Ternary Operator")
//6. Ternary Operator:
var user_pin=12345
console.log((user_pin===1234)?"welcome Ramesh Kumar sbi Atm":"Sorry your pin is incorrecr plz check your pin and try again")


console.log("typeof Operators")
//7. typeof operator
let arr=[1,2,3,4,5]
console.log(typeof(arr))// it will return object because array is a type of object in javascript
console.log( Array.isArray(arr))// either we can use Array.isArray() method or (ref variable instanceof Array) to check whether the variable is an array or not


console.log("Bitwise Operators")
//8.Bitwise Operators:
//  &, |, ^, ~, <<, >>, >>>
let m=5
let n=3
console.log(m&n)
console.log(m|n)
console.log(m^n)
console.log(~m)
console.log(m<<1)
console.log(m>>1)
console.log(m>>>1)