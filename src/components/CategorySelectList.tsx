import { Box, Checkbox, Link, Skeleton, Stack, Text } from "@chakra-ui/react";
import useCategories from "../hookers/useCategories";
import useEventQueryStore from "../store";
import { useState } from "react";

interface Props {
  listLength: number;
}

const CategorySelectList = ({ listLength }: Props) => {
  const { data: categories, isLoading } = useCategories();
  const selectedCategoryId = useEventQueryStore((s) => s.eventQuery.category);
  const setSelectedCategoryId = useEventQueryStore((s) => s.setCategory);

  const [seeAll, setSeeAll] = useState(0);

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
            <Text fontSize="sm" as="u">See less</Text>
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
              <Text fontSize="sm" as="u">See all</Text>
            </Link>
          )}
        </>
      )}
    </Stack>
  );
};

export default CategorySelectList;
