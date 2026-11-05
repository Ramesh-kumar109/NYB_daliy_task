


function Child(username) {
  return (
          <div>
            <h2>child components</h2>
            <GrandChild username={username}/>
          </div>
  );
}

export default Child