import  UserContext from "./UserContext";
import { useContext } from "react";

function Profile() {
  const username = useContext(UserContext);
  return (
    <h2>Welcome: {username}</h2>
  );
}

export default Profile;