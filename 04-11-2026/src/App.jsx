// import { useState } from 'react'
// import API from "./assets/API/Curd"
// import Read from './assets/API/Read'
// import Update from './assets/API/Update'
// import Delete from "./assets/API/Delete"
// import SearchAPi from "./assets/Search and Fliter/SearchAPI"
// import ClientsideFliter from './assets/Search and Fliter/ClientsideFliter'
// import Sorting from './assets/Search and Fliter/Sorting'
// import DynamicRendering from './assets/Search and Fliter/DynamicRendering'
// import ContextApi from './05-11-2026/ContextApi'
// import UseProvider from './05-11-2026/UseProvider'

import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
// import Home from "./assets/React_Router/Home";
// import About from "./assets/React_Router/About";
// import Contact from "./assets/React_Router/Contact";
 import Student from "./assets/React_Router/Student";
// function App() {


//   return (
//     <>
//       <API />
//       <Read />
//       <Update />
//       <Delete/>
//       < SearchAPi/>
//       < ClientsideFliter/>
//       < Sorting/>
//       < DynamicRendering/>
//       < ContextApi/>
//       < UseProvider/>
//     </>
//   )
// }

// export default App

// function App() {
//   return (
//     <BrowserRouter>
//       <nav>
//         <Link to="./Home">Home</Link>|
//         <Link to="./About">About</Link>|
//         <Link to="./Contact">Contact</Link>|
//       </nav>
//       <Routes>
//         <Route path="/Home" element={<Home />} />
//         <Route path="/About" element={<About />} />
//         <Route path="/Contact" element={<Contact />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }
// export default App;
// function App() {
//   return (
//     <BrowserRouter>
//       <nav>
//         <NavLink to="/Home" ClassName={({isActive})=>isActive?"active":""}>Home</NavLink>{" "}
//         <NavLink to="/About">About</NavLink>{" "}
//         <NavLink to="/Contact">Contact</NavLink>
//       </nav>
//       <Routes>
//         <Route path="/Home" element={<Home />} />
//         <Route path="/About" element={<About />} />
//         <Route path="/Contact" element={<Contact />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }
// export default App;

function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/Student/:id/:name" element={<Student />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;