function Expression(){
    // in function
    function call(name){
      return name;
    }
    return (
      <div>
        <h2>1.JSX Expression concepts.</h2>
        <p>where the expression allow the javascript  variables,values, function result,calculation inside
            the JSX where the javascript expression inside the curly braces</p>
        <h2>Hello {call("ramesh")}!</h2>
      </div>
    );
}
export default Expression;