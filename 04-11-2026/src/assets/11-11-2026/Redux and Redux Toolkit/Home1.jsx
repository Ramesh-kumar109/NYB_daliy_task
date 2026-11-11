
import { useSelector, useDispatch } from "react-redux";

import {
  changeName,
  resetName,
  updateName
} from "../Redux and Redux Toolkit/CreateSlice";

function Home1() {

  const { name } = useSelector(
    (state) => state.user
  );

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Home Component</h2>

      <h3>Name: {name}</h3>

      <button onClick={() => dispatch(changeName())}>
        Change Name
      </button>

      <button onClick={() => dispatch(resetName())}>
        Reset Name
      </button>

      <button onClick={() => dispatch(updateName("Arun"))}>
        Update Name
      </button>

    </div>
  );
}

export default Home1;
