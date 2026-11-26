

function withMessage(OriginalComponent) {
  return function EnahanceComponents(){
    return(
        <>
        <h2>this is Highter components.</h2>
        < OriginalComponent/>
        </>
    );
  }
}

export default withMessage