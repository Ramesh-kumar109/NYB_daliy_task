

function ReducerFunction(state,action) {
    switch(action.type){
        case"Increment":
        return state + 1;
        case"Decrement":
        return state - 1;

        case"Reset":
        return 0;
         default:
            return state;
    }
  
}

export default ReducerFunction