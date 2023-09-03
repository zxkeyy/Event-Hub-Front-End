import {
  Stack,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Box,
  Heading,
  Divider,
  Alert,
  AlertDescription,
  AlertIcon,
  Link,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import Auth from "../services/Auth";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  if (Auth.getToken()) {
    window.location.href = "/";
  }

  const handleLogin = async (username: string, password: string) => {
    try {
      await Auth.login(username, password);
      window.location.href = "/";
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        console.log(error.response.data.non_field_errors[0]);
        setErrorMessage(error.response.data.non_field_errors[0]);
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
      <Box width="300px" padding="4">
        <form
          onSubmit={(req) => {
            req.preventDefault();
            handleLogin(username, password);
          }}
        >
          <Stack spacing="3">
            <Heading>Login</Heading>
            <Divider />
            <Input
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <InputGroup>
              <Input
                type={showPassword ? "text" : "password"}
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
            <Text fontSize="2xs">Don't have an account? <Link href="/register" textColor="purple.200">register here.</Link></Text>
            {errorMessage && (
              <Alert status="error" variant="left-accent">
                <AlertIcon />
                <AlertDescription>{errorMessage}</AlertDescription>
              </Alert>
            )}

            <Button colorScheme="purple" type="submit">
              Login
            </Button>
          </Stack>
        </form>
      </Box>
    </Box>
  );
};

export default LoginPage;
