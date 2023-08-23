import { Heading, Divider, Box } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Props {
  markdown: string;
}

const MarkdownDetailsBox = ({ markdown }: Props) => {
  return (
    <Box
      width={{ base: "100%", md: "60%", lg: "70%" }}
      border="1px"
      borderRadius={15}
      borderColor="whiteAlpha.200"
      bgColor="purple.900"
      padding={5}
      overflow="hidden"
    >
      <Heading fontSize="xl">Details</Heading>
      <Divider paddingTop={2} />
      <ReactMarkdown className="markdown" remarkPlugins={[remarkGfm]}>
        {markdown}
      </ReactMarkdown>
    </Box>
  );
};

export default MarkdownDetailsBox;
