import Navbar from "./assets/28-10-2026/trail_workout/Navbar"
import Course from "./assets/28-10-2026/trail_workout/Course"
import Expression from "./assets/28-10-2026/JSX_Concepts/Expression"
import Javascript_Expression from "./assets/28-10-2026/JSX_Concepts/Javascript_Expression"
import CallFunction_Expression from "./assets/28-10-2026/JSX_Concepts/CallFunction_Expression"
import Dynamic_rendering from "./assets/28-10-2026/JSX_Concepts/Dynamic_Rendering"
import Props from "./assets/28-10-2026/Props _states/props"
import State from "./assets/28-10-2026/Props _states/state";
import Parent_to_child from "./assets/28-10-2026/Component_Communication/parent_to_child"
//import Child_to_parent from "./assets/28-10-2026/Component_Communication/parent_to_child"

function Child({handleClick}){
  return <button onClick={()=>handleClick("ramesh")}>click me</button>
}

function App() {
  function showmessage(name){
    alert("Button clicked!."+name)
  }
  return (
  <>
   <Navbar/>
  <Course></Course>
  <Expression/>
  <Javascript_Expression/>
  <CallFunction_Expression/>
  <Dynamic_rendering/>
  <Props name="ramesh"/>
  <State/>
  <Parent_to_child name="Sanjai kumar"/>

  <Child handleClick={showmessage}/>

   </>
  );
}

export default App;
