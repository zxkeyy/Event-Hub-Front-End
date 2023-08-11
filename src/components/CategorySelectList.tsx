import { Box, Checkbox, Link, Stack, Text } from "@chakra-ui/react";
import useCategories from "../hookers/useCategories";
import useEventQueryStore from "../store";
import { useState } from "react";

interface Props {
  listLength: number;
}

const CategorySelectList = ({ listLength }: Props) => {
  const { data: categories } = useCategories();
  const selectedCategoryId = useEventQueryStore((s) => s.eventQuery.category);
  const setSelectedCategoryId = useEventQueryStore((s) => s.setCategory);

  const [seeAll, setSeeAll] = useState(0);

  return (
    <Stack>
      {seeAll === 1 && (
        <>
          {categories?.results.map((category) => (
            <Box
              key={category.id}
              onChange={() =>
                selectedCategoryId != null && selectedCategoryId === category.id
                  ? setSelectedCategoryId(null)
                  : setSelectedCategoryId(category.id)
              }
            >
              <Checkbox
                colorScheme="purple"
                isChecked={category.id === selectedCategoryId}
              >
                {category.name}
              </Checkbox>
            </Box>
          ))}
          <Link onClick={() => setSeeAll(0)}>
            <Text as="u">See less</Text>
          </Link>
        </>
      )}

      {seeAll === 0 && (
        <>
          {categories?.results.slice(0, listLength).map((category) => (
            <Box
              key={category.id}
              onChange={() =>
                selectedCategoryId != null && selectedCategoryId === category.id
                  ? setSelectedCategoryId(null)
                  : setSelectedCategoryId(category.id)
              }
            >
              <Checkbox
                colorScheme="purple"
                isChecked={category.id === selectedCategoryId}
              >
                {category.name}
              </Checkbox>
            </Box>
          ))}
          {categories && categories?.results.length > listLength && (
            <Link onClick={() => setSeeAll(1)}>
              <Text as="u">See all</Text>
            </Link>
          )}
        </>
      )}
    </Stack>
  );
};

export default CategorySelectList;
