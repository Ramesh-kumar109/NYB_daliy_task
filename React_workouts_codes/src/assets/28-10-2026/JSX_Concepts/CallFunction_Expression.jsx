function CallFunction_Expression(){
    function first_method(){
        return "first method process";
    }

    return(
        <div>
            <h2>2.calling function Expression concepts</h2>
            <p>A function call from another function with in javascript concepts 
                using jsx concepts in curly braces</p>
                <h3>{first_method()}</h3>
        </div>
    );
}
export default CallFunction_Expression;