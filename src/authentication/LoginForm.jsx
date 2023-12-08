import { useState } from "react";
import useLogin from "./useLogin";
import FormRow from "../ui/FormRow";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Spinner from "../ui/Spinner";
import Form from "../ui/Form";
import Modal from "../ui/Modal";
import SignupForm from "./Signupform";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) return;

    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label="Email address">
        <Input
          type="email"
          id="email"
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
      </FormRow>

      <FormRow label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
      </FormRow>

      <FormRow>
        <Button size="large" disabled={isLoading}>
          {isLoading ? <Spinner /> : "Log in"}
        </Button>

        {
          // Modal window with registration form
        }
        <Modal>
          <Modal.Open opens="form">
            <Button size="large" disabled={isLoading} variation="secondary">
              {isLoading ? <Spinner /> : "Register"}
            </Button>
          </Modal.Open>
          <Modal.Window name="form">
            <SignupForm />
          </Modal.Window>
        </Modal>
      </FormRow>
    </Form>
  );
}

export default LoginForm;
