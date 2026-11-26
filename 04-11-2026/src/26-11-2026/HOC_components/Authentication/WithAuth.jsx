function WithAuth(OriginalComponent) {
  return function ProductDash(props) {
    const isLogged=true;
    if(!isLogged){
        return <h2>Please login First</h2>

    }
    return <OriginalComponent {...props} />
  };
}

export default WithAuth;