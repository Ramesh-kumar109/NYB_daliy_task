function Passing_arguments(){

    function handlepassing(name,event){
        console.log(name);
        console.log(event.type)
    }
    return(

        <div>
            <h2>Passing Arguments and event handling</h2>
            <button onClick={()=>handlepassing("ramesh",event)}>
             click me
            </button>

        </div>
    );
}

export default Passing_arguments;