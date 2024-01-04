import LoginForm from "../authentication/LoginForm";
import Heading from "../ui/Heading";
import { useContext } from "react";
import { UserContext } from "../App";

function Account() {
  const { user } = useContext(UserContext);
  console.log(user);

  return (
    <>
      <Heading as="h1">Login to your account</Heading>
      {!user ? <LoginForm /> : <div>Hello {user}</div>}
    </>
  );
}

export default Account;
