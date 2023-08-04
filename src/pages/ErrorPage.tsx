import { Box, Center, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Center padding={10}>
        <Box bgColor="purple.900" padding={10} borderRadius={20}>
          <Heading>
            {isRouteErrorResponse(error) ? "Win raye7 kho?" : "Oops..."}
          </Heading>
          <hr></hr>
          <Text padding={5}>
            {isRouteErrorResponse(error)
              ? "Invalid page 404"
              : "Unexpected error"}
          </Text>
        </Box>
      </Center>
    </>
  );
};

export default ErrorPage;
