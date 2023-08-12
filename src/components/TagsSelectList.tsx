import { Box, Checkbox, Link, Skeleton, Stack, Text } from "@chakra-ui/react";
import useEventQueryStore from "../store";
import useTags from "../hookers/useTags";
import { useState } from "react";

interface Props {
  listLength: number;
}

const TagsSelectList = ({ listLength }: Props) => {
  const { data: tags, isLoading } = useTags();
  const selectedTags = useEventQueryStore((s) => s.eventQuery.tags);
  const setSelectedTags = useEventQueryStore((s) => s.setTags);

  const [seeAll, setSeeAll] = useState(0);

  if (selectedTags === undefined) return;
  if (isLoading)
    return (
      <Stack>
        {[...Array(listLength).keys()].map((n) => (
          <Skeleton key={n} width={150} height={6} />
        ))}
      </Stack>
    );
  return (
    <Stack>
      {seeAll === 1 && (
        <>
          {tags?.results.map((tag) => (
            <Box
              key={tag.id}
              onChange={() =>
                selectedTags?.length != 0 && selectedTags?.includes(tag.id)
                  ? setSelectedTags(selectedTags.filter((id) => id != tag.id))
                  : setSelectedTags([...selectedTags, tag.id])
              }
            >
              <Checkbox
                colorScheme="purple"
                isChecked={selectedTags?.includes(tag.id)}
              >
                {tag.name}
              </Checkbox>
            </Box>
          ))}
          <Link onClick={() => setSeeAll(0)}>
            <Text fontSize="sm" as="u">See less</Text>
          </Link>
        </>
      )}

      {seeAll === 0 && (
        <>
          {tags?.results.slice(0, listLength).map((tag) => (
            <Box
              key={tag.id}
              onChange={() =>
                selectedTags?.length != 0 && selectedTags?.includes(tag.id)
                  ? setSelectedTags(selectedTags.filter((id) => id != tag.id))
                  : setSelectedTags([...selectedTags, tag.id])
              }
            >
              <Checkbox
                colorScheme="purple"
                isChecked={selectedTags?.includes(tag.id)}
              >
                {tag.name}
              </Checkbox>
            </Box>
          ))}
          {tags && tags?.results.length > listLength && (
            <Link onClick={() => setSeeAll(1)}>
              <Text fontSize="sm" as="u">See all</Text>
            </Link>
          )}
        </>
      )}
    </Stack>
  );
};

export default TagsSelectList;
