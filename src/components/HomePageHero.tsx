import { Heading, HStack, Button, Text, Box } from "@chakra-ui/react";

const HomePageHero = () => {
  return (
    <Box
      bgImage={
        "https://unsplash.com/photos/9XngoIpxcEo/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjkyMTk3ODg5fA&force=true&w=2400"
      }
      height={screen.availHeight - 162} // -150 for NavBar
      bgSize="cover"
      bgPos="center"
      bgAttachment="fixed"
      bgBlendMode="overlay"
      bgColor="blackAlpha.100"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <div>
        <Heading fontSize="8xl" fontWeight="bold">
          ALL EVENTS IN ONE PLACE
        </Heading>
        <Text fontSize="2xl" fontWeight="bold">
          Looking for upcoming events?
        </Text>
        <HStack>
          <Button
            size="lg"
            fontSize="4xl"
            padding={7}
            borderRadius={4}
            colorScheme="purple"
            bgColor="purple.400"
          >
            Explore
          </Button>
          <Button
            size="lg"
            fontSize="4xl"
            borderRadius={4}
            colorScheme="purple"
            variant="outline"
            color="purple.400"
          >
            Search
          </Button>
        </HStack>
      </div>
    </Box>
  );
};

export default HomePageHero;
