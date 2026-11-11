
import { useSelector } from "react-redux";

function Profile1() {

  const name = useSelector(
    (state) => state.user.name
  );

  return (
    <div>
      <h2>Profile Component</h2>

      <h3>Username: {name}</h3>
    </div>
  );
}
export default Profile1;
