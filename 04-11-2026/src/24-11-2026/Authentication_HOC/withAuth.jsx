function withAuth(WrappedComponent) {
  return function ProtectedComponent(props) {

    if (!props.isAuthentication) {
      return <h2>Please Login First!</h2>;
    }

    return <WrappedComponent {...props} />;
  };
}

export default withAuth;