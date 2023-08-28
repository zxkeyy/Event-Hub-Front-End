import {
  Stack,
  Heading,
  Divider,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Alert,
  AlertIcon,
  AlertDescription,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";
import Auth from "../services/Auth";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nonFieldError, setNonFieldError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleRegister = async (
    username: string,
    email: string,
    password: string,
    confirmPassword: string
  ) => {
    setNonFieldError("");
    setUsernameError("");
    setEmailError("");
    setPasswordError("");

    if (password != confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }
    try {
      await Auth.register(username, email, password);
      window.location.href = "/";
    } catch (errorEx: any) {
      if (errorEx.response && errorEx.response.status === 400) {
        console.log(errorEx.response.data);
        errorEx.response.data?.non_field_error
          ? setNonFieldError(errorEx.response.data?.non_field_error[0])
          : "";
        errorEx.response.data?.username
          ? setUsernameError(errorEx.response.data?.username[0])
          : "";
        errorEx.response.data?.email
          ? setEmailError(errorEx.response.data?.email[0])
          : "";
        errorEx.response.data?.password
          ? setPasswordError(errorEx.response.data?.password[0])
          : "";
      }
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height={"100vh"}
    >
      <Box width="400px" padding="4">
        <form
          onSubmit={(req) => {
            req.preventDefault();
            handleRegister(username, email, password, confirmPassword);
          }}
        >
          <Stack spacing="3">
            <Heading>Register</Heading>
            <Divider />
            <Input
              placeholder="Username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              placeholder="Email"
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputGroup>
              <Input
                type={showPassword ? "text" : "password"}
                required
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputRightElement width="4.5rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            <InputGroup>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <InputRightElement width="4.5rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            {(nonFieldError ||
              usernameError ||
              emailError ||
              passwordError) && (
              <Alert status="error" variant="left-accent">
                <AlertIcon />
                <AlertDescription>
                  {nonFieldError && nonFieldError + "\n"}
                  {usernameError && (
                    <>
                      <b>Username: </b> <p>{usernameError + "\n"}</p>
                    </>
                  )}
                  {emailError && (
                    <>
                      <b>Email: </b>
                      <p>{emailError + "\n"}</p>
                    </>
                  )}
                  {passwordError && (
                    <>
                      <b>Password: </b>
                      <p>{passwordError + "\n"}</p>
                    </>
                  )}
                </AlertDescription>
              </Alert>
            )}

            <Button colorScheme="purple" type="submit">
              Register
            </Button>
          </Stack>
        </form>
      </Box>
    </Box>
  );
};

export default RegisterPage;
