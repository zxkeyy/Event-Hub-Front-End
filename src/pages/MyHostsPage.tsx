import {
  useToast,
  useDisclosure,
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Box,
  Divider,
  HStack,
  Heading,
  Stack,
  Link,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import useUser from "../hookers/useUser";
import useClubs from "../hookers/useClubs";
import { deleteClub } from "../hookers/useClub";
import { BiLoaderCircle } from "react-icons/bi";
import ClubCardHorizontal from "../components/ClubCardHorizontal";
import { FcPlus } from "react-icons/fc";
import Auth from "../services/Auth";

const MyHostsPage = () => {
  if (!Auth.getToken()) {
    window.location.href = "/login";
  }

  const userData = useUser();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef(null);

  const onShare = (id: number) => {
    navigator.clipboard.writeText(window.location.host + "/hosts/" + id);
    toast({
      title: "Link Copied.",
      status: "success",
      position: "bottom-right",
      duration: 3000,
      isClosable: true,
    });
  };

  const {
    data: clubs,
    isLoading,
    refetch,
  } = useClubs(
    {
      ordering: "name",
      owner: userData && userData.data ? userData.data.id : -1,
    },
    userData ? !userData.isLoading : false
  );

  const [tempId, setTempId] = useState(0);
  const onDelete = async () => {
    await deleteClub(tempId);
    setTempId(0);
    refetch();
  };

  return (
    <>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Host
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button
                colorScheme="red"
                onClick={async () => {
                  onDelete();
                  toast({
                    title: "Host Deleted.",
                    status: "success",
                    position: "bottom-right",
                    duration: 5000,
                    isClosable: true,
                  });
                  onClose();
                }}
                ml={3}
              >
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        padding={20}
        style={{
          background:
            "linear-gradient(90deg, rgba(20,1,32,1) 0%, rgba(46,8,78,1) 81%, rgba(48,0,84,1) 100%)",
        }}
      >
        <Box width="50%">
          <Box
            border="1px"
            borderRadius={15}
            borderColor="whiteAlpha.200"
            bgColor="purple.900"
            padding={5}
            display="flex"
            alignItems="center"
            flexDirection="column"
            marginBottom={3}
          >
            <Heading fontSize="2xl">Your Hosts</Heading>
            <Divider marginY={2} />
            <HStack
              display="flex"
              justifyContent="start"
              width="100%"
              
            >
              
            </HStack>
          </Box>
          <Link href="/create-host">
            <Box
              border="1px"
              borderRadius={15}
              borderColor="whiteAlpha.200"
              bgColor="purple.900"
              padding={5}
              display="flex"
              alignItems="center"
              flexDirection="column"
              marginBottom={3}
              fontWeight="bold"
            >
              Add a Host
              <FcPlus size={40} />
            </Box>
          </Link>

          <Box
            border="1px"
            borderRadius={15}
            borderColor="whiteAlpha.200"
            bgColor="purple.900"
            padding={5}
            display="flex"
            alignItems="center"
            flexDirection="column"
          >
            <Stack spacing={6} width="100%">
              {isLoading && <BiLoaderCircle />}
              {clubs?.results.map((club) => (
                <ClubCardHorizontal
                  key={club.id}
                  club={club}
                  onDelete={() => {
                    setTempId(club.id), onOpen();
                  }}
                  onShare={() => onShare(club.id)}
                />
              ))}
            </Stack>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default MyHostsPage;
