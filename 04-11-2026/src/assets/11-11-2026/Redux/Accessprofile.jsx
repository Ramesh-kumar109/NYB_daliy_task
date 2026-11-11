
function Accessprofile() {

    const count = useSelector(
        (state)=> {state.counter.value}
       );
  return (
    <div>
        <h2>count:{count}</h2>
        <p> Accessprofile</p>
    </div>
  );
}

export default Accessprofile;