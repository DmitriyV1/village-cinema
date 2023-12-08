import { useQuery } from "@tanstack/react-query";
import LoginForm from "../authentication/LoginForm";
import Heading from "../ui/Heading";

function Account() {
  const user = useQuery({ queryKey: ["user"] });
  console.log(user);

  return (
    <>
      <Heading as="h1">Login to your account</Heading>
      {user?.data?.id === "" || user.data === undefined ? (
        <LoginForm />
      ) : (
        <div>Hello {user?.data?.email}</div>
      )}
    </>
  );
}

export default Account;
