import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  Divider,
  HStack,
  Heading,
  Link,
  Stack,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import EventCardHorizontal from "../components/EventCardHorizontal";
import useEvents from "../hookers/useEvents";
import { BiLoaderCircle } from "react-icons/bi";
import useUser from "../hookers/useUser";
import { deleteEvent } from "../hookers/useEvent";
import { useRef, useState } from "react";
import Auth from "../services/Auth";
import { FcPlus } from "react-icons/fc";

const MyEventsPage = () => {
  if (!Auth.getToken()) {
    window.location.href = "/login";
  }

  const userData = useUser();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef(null);

  const onShare = (slug: string) => {
    navigator.clipboard.writeText(window.location.host + "/events/" + slug);
    toast({
      title: "Link Copied.",
      status: "success",
      position: "bottom-right",
      duration: 3000,
      isClosable: true,
    });
  };
  const [tempSlug, setTempSlug] = useState("");
  const onDelete = async () => {
    await deleteEvent(tempSlug);
    setTempSlug("");
    refetch();
  };

  const {
    data: events,
    isLoading,
    refetch,
  } = useEvents(
    {
      ordering: "name",
      owner: userData && userData.data ? userData.data.id : -1,
    },
    userData ? !userData.isLoading : false
  );

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
              Delete Event
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
                    title: "Event Deleted.",
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
            <Heading fontSize="2xl">Your Events</Heading>
            <Divider marginY={2} />
            <HStack
              display="flex"
              justifyContent="start"
              width="100%"
              height={10}
            >
              <Button height="100%">Upcoming</Button>
              <Button height="100%">Past</Button>
            </HStack>
          </Box>
          <Link href="/create-event">
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
              Add an Event
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
              {events?.results.map((event) => (
                <EventCardHorizontal
                  key={event.id}
                  event={event}
                  onDelete={() => {
                    setTempSlug(event.slug), onOpen();
                  }}
                  onShare={() => onShare(event.slug)}
                />
              ))}
            </Stack>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default MyEventsPage;
