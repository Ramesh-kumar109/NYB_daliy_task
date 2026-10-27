import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ComponentsPage from "./pages/ComponentsPage";
import Form_page from "./pages/React_forms_28-10-2026/Form_page";
import Navbar_page from "./pages/Navbar_page/Navbar_page";


function HomePage() {
  function sayHello() {
    alert("Hello!");
  }

  function sayWelcome() {
    alert("Welcome to React!");
  }

  function addNumbers() {
    const a = 10;
    const b = 20;
    alert(a + b);
  }

  return (
    <div>
      <h1>My React App</h1>

      <button onClick={sayHello}>Say Hello</button>
      <button onClick={sayWelcome}>Say Welcome</button>
      <button onClick={addNumbers}>Add Numbers</button>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/components" element={<ComponentsPage />} />
        <Route path="/forms" element={< Form_page />}/>
        <Route path="/navbar" element= {<Navbar_page/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
// import React from 'react'
// import State from './components/State/State'
// import JSX from './components/JSX/JSX'
// import Parent from './components/Props/Parent'

// const App = () => {
//   return (
//     <div>
//       <State/>
//       <JSX/>
//       <Parent/>
//     </div>
//   )
// }

// export default App




