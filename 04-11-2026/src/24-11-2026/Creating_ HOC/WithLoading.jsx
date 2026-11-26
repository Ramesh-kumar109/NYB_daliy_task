function WithLoading(WrappedComponent) {
  return function EnhancedComponent(props) {
    if (props.isLoading) {
      return <h2>Loading...</h2>;
    }

    return <WrappedComponent {...props} />;
  };
}

export default WithLoading;