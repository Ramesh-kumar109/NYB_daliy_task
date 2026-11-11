// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// //import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// import ReactDom from "react-dom/client";
// import App from "./App.jsx";
// import CreateStore from "./assets/11-11-2026/Redux and Redux Toolkit/CreateStore";
// import { Provider } from "react-redux";

// ReactDom.createRoot(document.getElementById("root")).render(
//   <Provider store={CreateStore}>
//     <App />
//   </Provider>
// );

import ReactDom from "react-dom/client";
import App from "./App.jsx";
import Create from "./assets/11-11-2026/Redux/Create";
import { Provider } from "react-redux";

ReactDom.createRoot(document.getElementById("root")).render(
  <Provider store={Create}>
    <App />
  </Provider>
);

//browser router  local host path name using that we can able to see the result related to particular topic 
//without browser router we have create react appliaction again and again to see the related topic result
//without browser router we have to comment the previous  topics in app.jsx then we  have to write agian app.jsx  
