function Props(props){
return (
    <div>
        
         <h1>Props</h1>
        <p>props are used to pass data from one react components to another components
            usually from parent components to child components.
        </p>
        <h3>Hello: {props.name}!</h3>
    </div>
);
}
export default Props;