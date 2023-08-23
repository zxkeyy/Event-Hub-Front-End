import {
  Box,
  Divider,
  HStack,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import useEventQueryStore from "../store";
import SelectWilaya from "../components/SelectWilaya";
import EventCarousel from "../components/EventCarousel";

const HomePage2white = () => {
  const clearQuery = useEventQueryStore((s) => s.clearQuery);
  clearQuery();

  const bgGradient = useColorModeValue(
    "linear-gradient(90deg, rgba(234,240,244,1) 0%, rgba(234,240,244,1) 100%)",
    "linear-gradient(90deg, rgba(20,1,32,1) 0%, rgba(46,8,78,1) 81%, rgba(48,0,84,1) 100%)"
  );
  return (
    <>
      
      <Box bgGradient={bgGradient} display="flex" justifyContent="center">
        <Box
          height="2xl"
          width={{ base: "85%", md: "60%" }}
          paddingTop={10}
          paddingX={10}
          bg="white"
          marginY={5}
          border="1px"
          borderRadius={15}
          borderColor="gray.300"
        >
          <Heading>RECOMMENDED</Heading>
          <Divider />
          <HStack paddingY={10}>
            <Heading>Events in</Heading>
            <SelectWilaya />
          </HStack>
          <EventCarousel />
        </Box>
      </Box>
    </>
  );
};

export default HomePage2white;
