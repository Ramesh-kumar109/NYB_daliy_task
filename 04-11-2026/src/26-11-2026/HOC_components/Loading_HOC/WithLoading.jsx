function WithLoading(OriginalComponents) {
  return function Data({ isLoading, ...props }) {
    if (isLoading) {
      return <p>Loading....</p>;
    }
    return <OriginalComponents {...props} />;
  };
}

export default WithLoading;