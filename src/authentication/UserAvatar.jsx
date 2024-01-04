import { useContext } from "react";
import { UserContext } from "../App";

function UserAvatar() {
  const { user } = useContext(UserContext);

  return <div>{user}</div>;
}

export default UserAvatar;
