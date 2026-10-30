function Event_Object(){

    function Eventhandle(event){
         console.log("event type",event.type);
         console.log("event target",event.target);
    }
    return(

        <div>
              <h2>Event Object</h2>
              <button onClick={Eventhandle} >  
                click Me
              </button>
        </div>
    );
}

export default Event_Object;