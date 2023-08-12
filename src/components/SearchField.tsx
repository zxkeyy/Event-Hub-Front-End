import { Button, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useEventQueryStore from "../store";
import { useNavigate } from "react-router-dom";

const SearchField = () => {
  const navigate = useNavigate();
  const setSearchText = useEventQueryStore((s) => s.setSearch);
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        navigate("/events");
        if (ref.current) setSearchText(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement>
          <Button variant="unstyled" paddingLeft={4} type="submit">
            <BsSearch />
          </Button>
        </InputLeftElement>
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="search"
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchField;
