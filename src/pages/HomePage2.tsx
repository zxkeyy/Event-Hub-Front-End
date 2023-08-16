import { Box, Button, Center, HStack, Heading, Text } from "@chakra-ui/react";
import useEventQueryStore from "../store";
import HomePageHero from "../components/HomePageHero";

const HomePage2 = () => {
  const clearQuery = useEventQueryStore((s) => s.clearQuery);
  clearQuery();
  return (
    <>
      <HomePageHero />
      <Box bgColor="black" height={screen.availHeight}></Box>
    </>
  );
};

export default HomePage2;
