import { Box, Input, Text } from "@chakra-ui/react";
import useEventQueryStore from "../store";
import { useRef } from "react";

const DateFilter = () => {
  const setStartDateGt = useEventQueryStore((s) => s.setStartDateGt);
  const setStartDateLt = useEventQueryStore((s) => s.setStartDateLt);
  const refGt = useRef<HTMLInputElement>(null);
  const refLt = useRef<HTMLInputElement>(null);

  return (
    <Box>
      <Text fontWeight="bold" fontSize="sm" paddingTop={2} paddingBottom={1}>
        From:
      </Text>

      <Input
        ref={refGt}
        type="date"
        onChange={() =>
          refGt.current
            ? setStartDateGt(refGt.current?.value)
            : setStartDateGt(null)
        }
      ></Input>

      <Text fontWeight="bold" fontSize="sm" paddingTop={2} paddingBottom={1}>
        To:
      </Text>

      <Input
        ref={refLt}
        type="date"
        onChange={() =>
          refLt.current
            ? setStartDateLt(refLt.current?.value)
            : setStartDateLt(null)
        }
      ></Input>
    </Box>
  );
};

export default DateFilter;
