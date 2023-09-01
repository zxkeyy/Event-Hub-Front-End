import {
  Box,
  HStack,
  Input,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Tag,
  TagCloseButton,
  TagLabel,
  useDisclosure,
} from "@chakra-ui/react";
import useTags, { postTag } from "../../hookers/useTags";
import { useRef, useState } from "react";
import { BsPlusLg } from "react-icons/bs";

interface Props {
  tags: number[];
  setTags: (tags: number[]) => void;
}

const TagsAdd = ({ tags, setTags }: Props) => {
  const [search, setSearch] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data: tagsRes, refetch } = useTags();
  const input = useRef<HTMLInputElement>(null);

  const onNewTag = async (name: string) => {
    const response = await postTag(name);
    setTags([...tags, response.id]);
    refetch();
  };

  return (
    <Box>
      <HStack padding={2} wrap="wrap">
        {tags.map((tag) => (
          <Tag key={tag} variant="solid">
            <TagLabel>
              {tagsRes?.results.find((tagI) => tagI.id === tag)?.name}
            </TagLabel>
            <TagCloseButton
              onClick={() => setTags([...tags.filter((tagI) => tagI != tag)])}
            />
          </Tag>
        ))}
      </HStack>

      <Menu
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        matchWidth
        initialFocusRef={input}
      >
        <Input
          ref={input}
          onFocus={() => onOpen()}
          onChange={(e) => {
            onOpen();
            setSearch(e.currentTarget.value);
          }}
          value={search}
        />
        <MenuButton as={Box} />
        <MenuList
          maxHeight={300}
          marginBottom={10}
          overflowY="scroll"
          onFocus={() => input.current?.focus()}
        >
          <MenuItem icon={<BsPlusLg />} onClick={() => onNewTag(search)}>
            Add a new tag "{search}"
          </MenuItem>
          <MenuDivider />
          {tagsRes &&
            tagsRes.results
              .filter((tag) => tag.name.indexOf(search) > -1)
              .map((tag) => (
                <MenuItem
                  key={tag.id}
                  onClick={() => {
                    if (!tags.includes(tag.id)) setTags([...tags, tag.id]);
                  }}
                >
                  {tag.name}
                </MenuItem>
              ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default TagsAdd;
