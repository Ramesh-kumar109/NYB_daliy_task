function Click(){
    function eventHandle(){
       alert("button was click");
    }
    return(
        <div>
            <h2>OnClick</h2>
            <p>Onclick means its event handling method which means when the user click on
                the elements like Button, text,or image
            </p>
            <button onClick={eventHandle}>Click me</button>
        </div>
    );
}

export default Click;