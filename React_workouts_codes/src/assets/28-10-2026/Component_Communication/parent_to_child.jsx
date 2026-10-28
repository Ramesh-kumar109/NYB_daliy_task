function Parent_to_child(props){
  return(
     <div>
        <h1>Components Communication</h1>
        <h2>Parent to child components  using props</h2>
        <h1>name: {props.name}</h1>
     </div>
  );
}

export default Parent_to_child;