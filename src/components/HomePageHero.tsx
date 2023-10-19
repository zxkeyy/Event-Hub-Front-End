import { Heading, HStack, Button, Text, Box } from "@chakra-ui/react";
import { useRef } from "react";
import { Link } from "react-router-dom";

const HomePageHero = () => {
  const ref = useRef(null);

  return (
    <Box
      bgImage={
        "https://unsplash.com/photos/9XngoIpxcEo/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjkyMTk3ODg5fA&force=true&w=2400"
      }
      height={screen.availHeight}
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
        <Heading fontSize={{base: "xl", md: "4xl", xl: "7xl"}} fontWeight="bold">
          ALL EVENTS IN ONE PLACE
        </Heading>
        <Text fontSize={{base: "1xl", xl: "2xl"}} fontWeight="bold">
          Looking for upcoming events?
        </Text>
        <HStack>
          <Button
            onClick={() => {
              window.scrollTo(0, window.innerHeight)
            }}
            size={{base:"md", md:"lg"}}
            fontSize={{base:"2xl", md:"4xl"}}
            padding={{base:5, md:7}}
            borderRadius={4}
            colorScheme="purple"
            bgColor="purple.400"
          >
            Explore
          </Button>
          <Link to="/events" content="fit">
            <Button
              size={{base:"md", md:"lg"}}
              fontSize={{base:"2xl", md:"4xl"}}
              borderRadius={4}
              colorScheme="purple"
              variant="outline"
              color="purple.400"
            >
              Search
            </Button>
            <div ref={ref}></div>
          </Link>
        </HStack>
      </div>
    </Box>
  );
};

export default HomePageHero;
