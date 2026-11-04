import API from "./assets/API/API";
import PUT from "./assets/API/PUT";
import Patch from "./assets/API/Patch";
import Delete from "./assets/API/Delete"
import Promise from "./assets/API/Promise"
import Async from "./assets/API/Async"
import API_Responding_Handling from "./assets/API/API_Responding_Handling";
import ErrorState from "./assets/API/ErrorState";
import EmptyState from "./assets/API/EmptyState";
function App() {
  

  return (
    <>
      <API />
      <PUT />
      <Patch />
      < Delete/>
      <Promise />
      < Async/>
      < API_Responding_Handling/>
      < ErrorState/>
      <EmptyState/>  
    </>
  )
}

export default App
