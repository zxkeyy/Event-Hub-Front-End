import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  HStack,
  Textarea,
  Text,
  Box,
  Link,
} from "@chakra-ui/react";
import { BsInfoCircle } from "react-icons/bs";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Props {
  body: string;
  setBody: (body: string) => void;
}

const DetailsInput = ({ body, setBody }: Props) => {
  return (
    <Tabs isFitted>
      <TabList>
        <Tab>Details</Tab>
        <Tab>Preview</Tab>
      </TabList>
      <TabPanels>
        <TabPanel paddingX={1}>
          <Link
            fontSize="xs"
            textColor="whiteAlpha.600"
            isExternal
            href="https://www.markdownguide.org/getting-started/"
          >
            <HStack>
              <Text>learn more about Markdown</Text>
              <BsInfoCircle />
            </HStack>
          </Link>

          <Textarea
            width="100%"
            minHeight="300px"
            placeholder="Details about the event."
            value={body}
            onChange={(e) => setBody(e.currentTarget.value)}
          />
        </TabPanel>
        <TabPanel paddingX={1}>
          <Link
            fontSize="xs"
            textColor="whiteAlpha.600"
            isExternal
            href="https://www.markdownguide.org/getting-started/"
          >
            <HStack>
              <Text>learn more about Markdown</Text>
              <BsInfoCircle />
            </HStack>
          </Link>
          <Box
            border="1px"
            borderRadius={10}
            borderColor="whiteAlpha.300"
            paddingX={3}
            minHeight="300px"
          >
            <ReactMarkdown className="markdown" remarkPlugins={[remarkGfm]}>
              {body}
            </ReactMarkdown>
          </Box>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default DetailsInput;
