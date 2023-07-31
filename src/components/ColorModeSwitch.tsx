import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack padding={2}>
      <Switch colorScheme="green" isChecked={colorMode === "dark"} onChange={toggleColorMode} />
    </HStack>
  );
};

export default ColorModeSwitch;
