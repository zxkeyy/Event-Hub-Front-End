import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Divider,
  Heading,
} from "@chakra-ui/react";
import SelectWilaya2 from "./SelectWilaya2";
import CategorySelectList from "./CategorySelectList";
import TagsSelectList from "./TagsSelectList";
import DateFilter from "./DateFilter";

const EventSearchFilters = () => {
  return (
    <Box border="1px" borderColor="gray.600" borderRadius={10} padding={10}>
      <Heading>Filters</Heading>
      <Divider />

      <Accordion defaultIndex={[0, 1, 2, 3]} allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left" fontWeight="bold">
                Wilaya
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <SelectWilaya2 />
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left" fontWeight="bold">
                Category
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <CategorySelectList listLength={5} />
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left" fontWeight="bold">
                Tags
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <TagsSelectList listLength={5} />
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left" fontWeight="bold">
                Date
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <DateFilter />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default EventSearchFilters;
