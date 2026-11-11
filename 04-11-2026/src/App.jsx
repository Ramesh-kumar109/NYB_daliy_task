


// // import { useState } from 'react'
// // import API from "./assets/API/Curd"
// // import Read from './assets/API/Read'
// // import Update from './assets/API/Update'
// // import Delete from "./assets/API/Delete"
// // import SearchAPi from "./assets/Search and Fliter/SearchAPI"
// // import ClientsideFliter from './assets/Search and Fliter/ClientsideFliter'
// // import Sorting from './assets/Search and Fliter/Sorting'
// // import DynamicRendering from './assets/Search and Fliter/DynamicRendering'
// // import ContextApi from './05-11-2026/ContextApi'
// // import UseProvider from './05-11-2026/UseProvider'

// import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
// // import Home from "./assets/React_Router/Home";
// // import About from "./assets/React_Router/About";
// // import Contact from "./assets/React_Router/Contact";
// // function App() {


// //   return (
// //     <>
// //       <API />
// //       <Read />
// //       <Update />
// //       <Delete/>
// //       < SearchAPi/>
// //       < ClientsideFliter/>
// //       < Sorting/>
// //       < DynamicRendering/>
// //       < ContextApi/>
// //       < UseProvider/>
// //     </>
// //   )
// // }

// // export default App

// // function App() {
// //   return (
// //     <BrowserRouter>
// //       <nav>
// //         <Link to="./Home">Home</Link>|
// //         <Link to="./About">About</Link>|
// //         <Link to="./Contact">Contact</Link>|
// //       </nav>
// //       <Routes>
// //         <Route path="/Home" element={<Home />} />
// //         <Route path="/About" element={<About />} />
// //         <Route path="/Contact" element={<Contact />} />
// //       </Routes>
// //     </BrowserRouter>
// //   );
// // }
// // export default App;
// // function App() {
// //   return (
// //     <BrowserRouter>
// //       <nav>
// //         <NavLink to="/Home" ClassName={({isActive})=>isActive?"active":""}>Home</NavLink>{" "}
// //         <NavLink to="/About">About</NavLink>{" "}
// //         <NavLink to="/Contact">Contact</NavLink>
// //       </nav>
// //       <Routes>
// //         <Route path="/Home" element={<Home />} />
// //         <Route path="/About" element={<About />} />
// //         <Route path="/Contact" element={<Contact />} />
// //       </Routes>
// //     </BrowserRouter>
// //   );
// // }
// // export default App;

// // function App() {
// //   return (
// //     <BrowserRouter>
    
// //       <Routes>
// //         <Route path="/Student/:id/:name" element={<Student />} />
// //       </Routes>
// //     </BrowserRouter>
// //   );
// // }
// // export default App;

// // import Home from "./assets/05-11-2026/React_router/Home";
// // import About from "./assets/05-11-2026/React_router/About";
// // import Contact from "./assets/05-11-2026/React_router/Contact";

// // function App(){
// //   return(
// //     <>
// //         <BrowserRouter>
// //         <Routes>
// //            <Route path="/" element={<Navigate to="/Home" />} />
// //           <Route path="/Home" element={<Home/>}/>
// //           <Route path="/About" element={<About/>}/>
// //           <Route path="/Contact" element={<Contact/>}/>
// //         </Routes>
// //         </BrowserRouter>
// //     </>
// //   );
// // }
// // export default App;

// // import Student from "./assets/05-11-2026/React_router/Student";
// // function App(){

// //   return(
// //     <>
// //   <BrowserRouter>
// //   <Link to="/Student/101/ramesh">Student 101</Link>
// //   <br />
// //   <Link to="/Student/102/Kumar">Student 102</Link>
// //   <Routes>
// //     <Route path="/Student/:id/:name" element={<Student />}/>
// //   </Routes>
// //   </BrowserRouter>
// //     </>
// //   );
// // }
// // export default App;

// import Dashboard from "./assets/05-11-2026/React_router/Dashboard";
// import Home from "./assets/05-11-2026/React_router/Home";
// import Profile from "./assets/05-11-2026/React_router/Profile";
// import Setting from "./assets/05-11-2026/React_router/Setting";
// import Page_404 from "./assets/05-11-2026/React_router/Page_404";
//  import Student from "./assets/05-11-2026/React_router/Student";

// function App() {
//   return (
//       <BrowserRouter>
//       <Link to="/">Go to home page</Link>
//       <Routes>
//         <Route path="/Dashboard" element={<Dashboard/>}/>
//         <Route path="/Home" element={<Home/>}/>
//         <Route path="/Profile" element={<Profile/>}/>
//         <Route path="/Setting" element={<Setting/>}/>
//         <Route path ="*" element={<Page_404/>}/>
//         <Route path='/CreateSlice' element ={<CreateSlice/>}/>
//         <Route path="/Student/:id/:name" element={<Student />}/>
//         <Route/>

//       </Routes>
//       </BrowserRouter>
//   )
// }

// export default App




// import React from 'react'



// // function App() {
// //   const name ={ name: "Kumar" }

// // function Child({username}) {
// //   return (
// //     <div>
// //         <h2>Child components</h2>
// //         <GrandChild username={username}/>
        
// //     </div>
// //   )
// //     }

// //   function GrandChild({username}) {
// //   return (
// //     <div>
// //         <h2>GrandChild components</h2>
// //         <h2>hi hello my name is: {username.name}</h2>
// //     </div>
// //   )
// //     }

// //   return (
// //     <>
// //     <Child username={name}/>
// //     </>
// //   )
// // }

// // export default App

// // import User from "./assets/05-11-2026/Context API/Propsdrilling/User"
// // import Profile from "./assets/05-11-2026/Context API/Propsdrilling/Profile"

// // function App() {
// //    const  username = "ramesh";
// //   return (
    
// //     <div>
// //       <User.Provider value={username}>
// //         <h1>My application</h1>
// //         <Profile/>
// //       </User.Provider>
// //     </div>
// //   )
// // }

// // export default App

// //  provider

// // import User from "./assets/05-11-2026/Context API/Propsdrilling/User"
// // import Profile from "./assets/05-11-2026/Context API/Propsdrilling/Profile"

// // function App() {
// //    const  username = "ramesh";
// //   return (
    
// //     <div>
// //       <User.Provider value={username}>
// //         <h1>My application</h1>
// //         <Profile/>
// //       </User.Provider>
// //     </div>
// //   )
// // }

// // export default App

// // consumer

// // import User from "./assets/05-11-2026/Context API/Propsdrilling/User"
// // import Profile from "./assets/05-11-2026/Context API/Propsdrilling/Profile"
// // function App() {
// //   return (
    
// //     <div>
// //       <User.Provider value="ramesh">
// //         <Profile/>
// //       </User.Provider>
// //     </div>
// //   )
// // }

// // export default App



// // import User from "./assets/05-11-2026/Context API/Propsdrilling/User"
// // import Profile from "./assets/05-11-2026/Context API/Propsdrilling/Profile"
// // function App() {
// //   return (
    
// //     <div>
// //       <User.Provider value="ramesh">
// //         <Profile/>
// //       </User.Provider>
// //     </div>
// //   )
// // }

// // export default App
// // import {useReducer} from "react"

// // function ReducerFunction(state, action) {
// //   switch (action.type) {
// //     case "Increment":
// //       return state + 1
// //     case "Decrement":
// //       return state - 1
// //     case "Reset":
// //       return 0
// //     default:
// //       return state
// //   }
// // }

// // function App() {

// //   const [count ,dispatch]=useReducer(ReducerFunction,0);

// //   return (
// //     <div>
// //       <h2>count:{count}</h2>
     
// //      <button onClick={()=>{dispatch({type:"Increment"})}}>Increment</button>

// //      <br />
// //      <br />
// //      <button onClick={()=>{dispatch({type:"Decrement"})}}>Decrement</button>

// //      <br />
// //      <br />
// //      <button onClick={()=>{dispatch({type:"Reset"})}}>Reset</button>

// //     </div>
// //   )
// // }

// // export default App














// // import {useReducer} from "react"
// // const initialState={
// //     name:"",
// //     email:"",
// //     age:0
// //   }
// // function ReducerFunction(state, action) {
// //   switch (action.type) {
// //     case "Update_name":
// //       return {
// //         ...state, name: action.payload
// //       };
// //     case "Update_email":
// //       return {
// //         ...state, email: action.payload
// //       };
// //     case "Update_age":
// //       return {
// //         ...state,age:action.payload
// //       };

// //     case "Reset":
// //       return initialState;

// //     default:
// //       return state
// //   }
// // }

// // function App() {

// //   const [state ,dispatch]=useReducer(ReducerFunction,initialState);

// //   return (
// //     <div>
// //       <h2>Student Details</h2>

// //       <input
// //           placeholder="Enter your name"
// //           value={state.name}
// //           onChange={(e)=>{
// //             dispatch({
// //               type:"Update_name",
// //               payload: e.target.value
// //             })
// //           }}
// //       />

// //       <br /><br />

// //       <input
// //           placeholder="Enter your Email"
// //           value={state.email}
// //           onChange={(e)=>{
// //             dispatch({
// //               type:"Update_email",
// //               payload: e.target.value
// //             })
// //           }}
// //       />

// //       <br />
// //       <br />

// //       <input
// //           placeholder="Enter your age"
// //           value={state.age}
// //           onChange={(e)=>{
// //             dispatch({
// //               type:"Update_age",
// //               payload: e.target.value
// //             })
// //           }}
// //       />


// //          <h3> Student Information</h3>

// //          <p>Name:{state.name}</p>
// //          <p>Email:{state.email}</p>
// //          <p>age:{state.age}</p>

// //          <button onClick={()=>dispatch({type:"Reset"})}>Reset</button>

// //     </div>
// //   )
// // }

// // export default App



// // import useComponents from './assets/05-11-2026/Custom_Hook/useComponents'

// // function App() {

// //   const {count,increment,decrement}=useComponents();
// //   return (
// //     <div>
// //       <h2>count:{count}</h2>
// //       <button onClick={increment}>increment</button>
// //       <br />
// //       <br />
// //       <button onClick={decrement}>increment</button>
// //     </div>
// //   )
// // }

// // export default App


// //  import UseCountertwo from "./assets/05-11-2026/Custom_Hook/useCountertwo";
// // function App() {
// //   return (
// //     <div>
// //       <UseCountertwo/>
// //     </div>
// //   )
// // }

// // export default App
// // import Form_Handling from './assets/06-11-2026/Custom_Hook/Form_Handling'

// // function App() {

// //   return (
// //     <div>
// //        < Form_Handling/>
// //     </div>
// //   )
// // }

// // export default App

// // import UseRef from "./assets/06-11-2026/Advance_React/UseRef";

// // function App() {
// //   return (
// //     <div>
// //       <UseRef/>
// //     </div>
// //   )
// // }

// // export default App


// // import Dom_Reference from "./assets/06-11-2026/Advance_React/Dom_Reference";

// // function App() {
// //   return (
// //     <div>
// //       < Dom_Reference/>
// //     </div>
// //   )
// // }

// // export default App


// // import Uncontrolled from "./assets/06-11-2026/Advance_React/Uncontrolled";
// // import Resuable from "./assets/06-11-2026/Advance_React/Resuable";
// // 

// // function App() {
// //   return (
// //     <div>
// //       <Uncontrolled />
// //       <Resuable name="Login"/>
// //       <Resuable name="Register"/>
// //       <Resuable name="submit"/>
      
// //     </div>
// //   )
// // }

// // export default App



// // import ComponentCopostion from "./assets/06-11-2026/ComponentCopostion";

// // function App() {
// //   return (
// //     <div>
// //       < ComponentCopostion >
// //       <h2>Student details</h2>
// //       <h2>Student :Ramesh</h2>
// //       <h2>Course: react</h2>
// //       </ComponentCopostion>
// //     </div>
// //   )
// // }

// // export default App

// // import ErrorHandling from "./assets/06-11-2026/Advance_React/ErrorHandling";

// // function App() {
// //   return (
// //     <ErrorHandling/>
// //   )
// // }

// // export default App


// // import UserContext from "./assets/06-11-2026/Context_Api/UserContext";
// // import Profile from "./assets/06-11-2026/Context_Api/Profile";
// // import Home from "./assets/06-11-2026/Context_Api/Home";

// // function App() {
// //   const username="ramesh";
// //   return (
// //     <div>
// //        <UserContext.Provider value={username}>
// //         <Profile/>
// //         <Home/>
// //        </UserContext.Provider>
// //     </div>
// //   )
// // }

// // export default App


// // // using props drilling methods
// // import Child from './assets/06-11-2026/Context_Api/Child'

// // function App() {
// //   const name ="kumar",email="ramesh@123.com"

// //   return (
// //     <>
// //      <Child name={name} email={email} />    
// //     </>
// //   )
// // }

// // export default App;


// // consumer and provider


// // import SchoolPrincipal from "./assets/06-11-2026/Context_Api/SchoolPrincipal"
// // import Staff from "./assets/06-11-2026/Context_Api/Staff";

// // function App() {

// //   return (
// //     <div>
// //     <SchoolPrincipal.Provider value="ramesh">
// //       < Staff/>

// //     </SchoolPrincipal.Provider>
  
// //     </div>
// //   )
// // }

// // export default App


// // redux

// // import {useSelector,useDispatch} from "react-redux"

// // import {increment,decrement} from"./assets/10-11-2026/Redux/CreateCounter"
// // function App() {

// //   const count =useSelector(
// //     (state)=>state.count.count
// //   );
// //   const dispatch= useDispatch();
// //   return (
// //     <div>
// //           <h1>count:{count}</h1>
// //           <button onClick={()=>dispatch(increment())}>Increment</button>
// //           <br />
// //           <br />
// //           <button onClick={()=>dispatch(decrement())}>Decrement</button>

// //           <button onClick={()=>dispatch(reset())}>Reset</button>
// //     </div>
// //   )
// // }

// // export default App



// // import UserContext from "./assets/11-11-2026/ContextAPI/UserContext";
// // import GlobalState from "./assets/11-11-2026/ContextAPI/GlobalState"

// // function App() {
// //   const name="Ramesh"
// //   return (
// //     <>
// // <UserContext.Provider value={name}>
// // < GlobalState/>
// // </UserContext.Provider>
// //     </>
// //   )
// // }

// // export default App

// // Global access te data using useState

// // import UserContext from './assets/11-11-2026/Globalstate_with _Usestate/UserContext'
// // import Home from "./assets/11-11-2026/Globalstate_with _Usestate/Home"
// // import {useState} from "react"
// // function App() {
// //   const [name, setName]=useState("ramesh");
// //   return (
// //     <div>
// //         <UserContext.Provider value={{name,setName}}>
// //           <Home/>
// //         </UserContext.Provider>
// //     </div>
// //   )
// // }

// // export default App


// // using consumer

// // import Principal from "./assets/11-11-2026/Consumer/Principal";
// // import Staff from "./assets/11-11-2026/Consumer/Staff";
// // function App() {

// //   const name= "ramesh";
// //   return (
// //     <>
// //        <Principal.Provider value={name}>
// //         <Staff/>
// //        </Principal.Provider>
// //     </>
// //   )
// // }

// // export default App





// import { useSelector,useDispatch } from "react-redux";
// import {increment,decrement,reset} from "./assets/11-11-2026/Redux and Redux Toolkit/CreateSlice"
// function App() {

//   const count= useSelector((state)=>state.Counter.value);

//   const dispatch =useDispatch();
//   return (
//     <>
//        <h2>count:{count}</h2>

//       <button onClick={() => dispatch(increment())}>Increment</button>
//        <br />
//        <br />
//       <button onClick={() => dispatch(decrement())}>Decrement</button>

//       <br/>

//       <button onclick={()=>dispatch(reset())}>Reset</button>
//     </>
//   )
// }

// export default App


import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import Dashboard from "./assets/05-11-2026/React_router/Dashboard";
import Home from "./assets/05-11-2026/React_router/Home";
import Profile from "./assets/05-11-2026/React_router/Profile";
import Setting from "./assets/05-11-2026/React_router/Setting";
import Page_404 from "./assets/05-11-2026/React_router/Page_404";
 import Student from "./assets/05-11-2026/React_router/Student";
import Home1 from "./assets/11-11-2026/Redux and Redux Toolkit/Home1";
import Profile1 from "./assets/11-11-2026/Redux and Redux Toolkit/Profile1";
import AccessHome from "./assets/11-11-2026/Redux/AccessHome"
import Accessprofile from "./assets/11-11-2026/Redux/Accessprofile"

function App() {
  return (
      <BrowserRouter>
      <Link to="/">Go to home page</Link>
      <Routes>
        <Route path="/Dashboard" element={<Dashboard/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/Setting" element={<Setting/>}/>
        <Route path ="*" element={<Page_404/>}/>
        <Route path='/Home1' element ={<Home1/>}/>
        <Route path="/Profile" element ={< Profile1/>}/>
        <Route path="/Student/:id/:name" element={<Student />}/>
        <Route path="/AccessHome" element ={<AccessHome/>}/>
        <Route path="/Accessprofile" element ={<Accessprofile/>}/>
        <Route/>

      </Routes>
      </BrowserRouter>
  )
}

export default App