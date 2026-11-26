function WithMessage(OriginalComponents){
  return function EnhancedComponents(props){
        return(
            <div>
                <h2>Welcome User!</h2>
                <OriginalComponents
                {...props}
                role="Developer" 
                />
            </div>
        );
    };
}

function HOC_Props(props) {
  return (
    <div>
       
       <h2>name:{props.name}</h2>
       <h2>Role:{props.role}</h2>
    </div>
  )
}

const EnhancedDetail= WithMessage(HOC_Props);
export default EnhancedDetail;