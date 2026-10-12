
const fname="Ramesh"
const age=26;
const email= "rameshkumar@123.com"


function details(fname,age,email){

    if(fname){
        fname=""
        console.log(fname);
    }
if(age>18 && age<60){
    console.log("valid age");
}
if(email==email){
 console.log("email invaild");
}
if (!email.includes("@")) {
    console.log("invalid email");
   }else{
    console.log("valid email");
   }
}
details(fname,age,email);



console.log("*************************************************************");


function start(a,b,c,callback){
    const sum = a + b+c;
    console.log(sum);
    callback(sum);
};

function add(sum){
    console.log("adding the values",sum);
};

start(10,20,30,add);



console.log("*************************************");
const employees = [
  { id: 1, name: "Ravi", department: "IT", salary: 45000 },
  { id: 2, name: "Priya", department: "HR", salary: 55000 },
  { id: 3, name: "Arjun", department: "IT", salary: 65000 },
  { id: 4, name: "Sneha", department: "Finance", salary: 50000 },
  { id: 5, name: "Kiran", department: "IT", salary: 75000 }
];

//1. get all it employees.
const itEmployees = employees.filter((item) => item.department === "IT");
console.log(itEmployees);
//2.Get employees earning more than 50000.
const earning= employees.filter((item)=>item.salary>"50000"); 
console.log(earning);
//3.Calculate the total salary.
const totalSalary = employees.reduce((total, item) => total + item.salary, 0);
console.log(totalSalary);
//4.Find the highest-paid employee. 
const highest_salari = employees.reduce((highest, employee) =>
    employee.salary > highest.salary ? employee : highest);
console.log(highest_salari);

//5.Return an array containing only employee names. 
const ename = employees.map((item) => item.name);
console.log(ename);
 
//6.Sort employees by salary in descending order. 
const descending_order = employees.sort((a, b) => b.salary - a.salary);
console.log(descending_order);



console.log("***************************************************************************");
console.log("4.question");
const users = [
  { id: 1, name: "Ravi", email: "ravi@test.com" },
  { id: 2, name: "Priya", email: "priya@test.com" },
  { id: 1, name: "Ravi", email: "ravi@test.com" },
  { id: 3, name: "Arjun", email: "arjun@test.com" }
];

//	1.Removes duplicate users based on id. 
const duplicate = users.filter((user, index, array) =>
    index === array.findIndex((item) => item.id === user.id));
console.log(duplicate);
// 2. Returns a new array 
const array = [...users];
console.log('copied array:=>', array);
//3.does not modify the original array.
const modify = [...users];
console.log(modify);

console.log("***********************************************************************");
console.log("5.questions")
function createCounter() {
    let value = 0;

    return {
        increment() {
            return ++value;
        },
        decrement() {
            return --value;
        },
        reset() {
            value = 0;
            return value;
        },
        getValue() {
            return value;
        }
 };
}
const counter = createCounter();
counter.increment();
counter.increment();
counter.decrement();
console.log(counter.getValue()); 
counter.reset();
console.log(counter.getValue());

console.log("**************************************************************************");
console.log("6.question");










