import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ButtonIcon from "../ui/ButtonIcon";
import useLogout from "./useLogout";
import { useContext } from "react";
import { UserContext } from "../App";

function Logout() {
  const { logout, isLoading } = useLogout();
  const { setUser } = useContext(UserContext);

  function handleLogout() {
    logout();
    setUser("");
  }

  return (
    <ButtonIcon onClick={handleLogout}>
      {<HiArrowRightOnRectangle />}
    </ButtonIcon>
  );
}

export default Logout;
