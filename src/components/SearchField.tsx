import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch} from "react-icons/bs"

const SearchField = () => {
  return (
    <InputGroup>
        <InputLeftElement children={<BsSearch/>}/>
      <Input borderRadius={20} placeholder="search" variant="filled"/>
    </InputGroup>
  );
};

export default SearchField;
