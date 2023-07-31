import { HStack, Image } from '@chakra-ui/react'
import logo from "../assets/logo.jpeg"
import ColorModeSwitch from './ColorModeSwitch'

const NavBar = () => {
  return (
    <HStack justifyContent="space-between">
        <Image src={logo} boxSize='60px'/>
        <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar