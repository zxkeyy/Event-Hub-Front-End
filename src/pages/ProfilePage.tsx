import {
  Alert,
  AlertDescription,
  AlertIcon,
  Box,
  Button,
  Divider,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Auth from "../services/Auth";
import { useState } from "react";

const ProfilePage = () => {
  if (!Auth.getToken()) {
    window.location.href = "/login";
  }

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [submitState, setSubmitState] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState("");
  const [errors, setErrors] = useState<any>({});
  const [passwordErrors, setPasswordErrors] = useState<any>({});

  const onSubmit = async () => {
    switch (submitState) {
      case "info":
        {
          setErrors({});
          let errors_temp: { [key: string]: any } = {};

          if (!name) {
            errors_temp.name = ["name error"];
          }
          if (!password) {
            errors_temp.password = ["password error"];
          }
          if (JSON.stringify(errors_temp) != "{}") {
            console.log(errors_temp);
            setErrors(errors_temp);
            window.scrollTo({ top: 0, left: 0, behavior: "instant" });
            return;
          }

          const hostForm = new FormData();
          hostForm.append("new_username", name);
          hostForm.append("current_password", password);

          try {
          } catch (errorEx: any) {
            console.log(errorEx);
            if (errorEx.response && errorEx.response.status === 400) {
              setErrors(errorEx.response.data);
            }
            window.scrollTo({ top: 0, left: 0, behavior: "instant" });
            return;
          }
        }
        break;
      case "password":
        {
          setPasswordErrors({});
          let errors_temp: { [key: string]: any } = {};
          if (!password) {
            errors_temp.password = ["password error"];
          }
          if (
            !newPassword ||
            !newPasswordConfirm ||
            newPassword != newPasswordConfirm
          ) {
            errors_temp.newPassword = ["new password error"];
          }
          if (JSON.stringify(errors_temp) != "{}") {
            console.log(errors_temp);
            setPasswordErrors(errors_temp);
            window.scrollTo({ top: 0, left: 0, behavior: "instant" });
            return;
          }

          const hostForm = new FormData();
          hostForm.append("current_password", password);
          hostForm.append("new_password", newPassword);

          onOpen();

          try {
          } catch (errorEx: any) {
            console.log(errorEx);
            if (errorEx.response && errorEx.response.status === 400) {
              setPasswordErrors(errorEx.response.data);
            }
            window.scrollTo({ top: 0, left: 0, behavior: "instant" });
            return;
          }
        }
        break;
      default:
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Enter your password</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontSize="sm">Password</Text>
            <Input
              isInvalid={false}
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            ></Input>
          </ModalBody>

          <ModalFooter>
            <Button  mr={3} onClick={onClose}>
              Close
            </Button>
            <Button onClick={() => onSubmit()} colorScheme="purple">Confirm</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        padding={20}
        style={{
          background:
            "linear-gradient(90deg, rgba(20,1,32,1) 0%, rgba(46,8,78,1) 81%, rgba(48,0,84,1) 100%)",
        }}
      >
        <Box
          border="1px"
          borderRadius={15}
          borderColor="whiteAlpha.200"
          bgColor="purple.900"
          padding={5}
          width="30%"
          display="flex"
          alignItems="center"
          flexDirection="column"
        >
          <Heading padding={2} fontSize="xl">
            Account
          </Heading>
          <Divider />
          <form
            onSubmit={(req) => {
              req.preventDefault();
              setSubmitState("password");
              onOpen();
            }}
          >
            <Box
              width="full"
              display="flex"
              alignItems="center"
              flexDirection="column"
            >
              <Box
                width="100%"
                display="flex"
                alignItems="center"
                flexDirection="column"
                gap={3}
              >
                <Box width="100%">
                  <Text fontSize="sm">Username</Text>
                  <Input
                    isInvalid={errors.name}
                    placeholder="Username"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.currentTarget.value)}
                  ></Input>
                </Box>
                <Box width="100%">
                  <Text fontSize="sm">Email</Text>
                  <Input
                    isInvalid={errors.email}
                    placeholder="Email"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.currentTarget.value)}
                  ></Input>
                </Box>
                <Divider />
                {errors.nonFieldError && (
                  <Alert status="error" variant="left-accent">
                    <AlertIcon />
                    <AlertDescription>
                      {errors.nonFieldError[0] + "\n"}
                    </AlertDescription>
                  </Alert>
                )}
                <Button type="submit" variant="solid" width="100%">
                  Update information
                </Button>
              </Box>
            </Box>
          </form>
          <Divider marginTop={3} />
          <Heading padding={2} fontSize="xl">
            Change password
          </Heading>
          <Divider />
          <form
            onSubmit={(req) => {
              req.preventDefault();
              setSubmitState("password");
              onOpen();
            }}
          >
            <Box
              width="full"
              display="flex"
              alignItems="center"
              flexDirection="column"
              marginTop={3}
            >
              <Box
                width="100%"
                display="flex"
                alignItems="center"
                flexDirection="column"
                gap={3}
              >
                <Box width="100%">
                  <Text fontSize="sm">New Password</Text>
                  <Input
                    isInvalid={passwordErrors.newPassword}
                    placeholder="New password"
                    type="text"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.currentTarget.value)}
                  ></Input>
                </Box>
                <Box width="100%">
                  <Text fontSize="sm">Confirm new Password</Text>
                  <Input
                    isInvalid={passwordErrors.newPassword}
                    placeholder="Confirm new password"
                    type="text"
                    value={newPasswordConfirm}
                    onChange={(e) =>
                      setNewPasswordConfirm(e.currentTarget.value)
                    }
                  ></Input>
                </Box>
                <Divider />
                {errors.nonFieldError && (
                  <Alert status="error" variant="left-accent">
                    <AlertIcon />
                    <AlertDescription>
                      {errors.nonFieldError[0] + "\n"}
                    </AlertDescription>
                  </Alert>
                )}
                <Button type="submit" variant="solid" width="100%">
                  Change password
                </Button>
              </Box>
            </Box>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default ProfilePage;
