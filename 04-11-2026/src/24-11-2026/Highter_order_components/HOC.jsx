function WithMessage(OriginalComponent){
    return function EnhancedComponent(){
        return(
            <div>
                <h2>Welcome to react</h2>
                <OriginalComponent/>
            </div>
        );
    };
}
// normal component
function HOC() {

  return (
    <div>
        <h2>hello user!</h2>
    </div>
  )
}

// Enhance the user Component
const EnhancedUser = WithMessage(HOC);

export default EnhancedUser