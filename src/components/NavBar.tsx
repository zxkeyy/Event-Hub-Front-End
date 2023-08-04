import { HStack, Image } from '@chakra-ui/react'
import logo from "../assets/logo.jpeg"
import ColorModeSwitch from './ColorModeSwitch'
import SearchField from './SearchField'

const NavBar = () => {
  return (
    <HStack bgColor="purple.800" padding={2}>
        <Image src={logo} boxSize='60px'/>
        <SearchField/>
        <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar