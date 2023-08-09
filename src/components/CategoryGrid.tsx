import useCategories from "../hookers/useCategories";
import { Button, Skeleton, Wrap, WrapItem } from "@chakra-ui/react";
import useEventQueryStore from "../store";

const CategoryGrid = () => {
  const { data: categories, isLoading } = useCategories();
  const selectedCategoryId = useEventQueryStore((s) => s.eventQuery.category);
  const setSelectedCategoryId = useEventQueryStore((s) => s.setCategory);

  return (
    <>
      <Wrap>
        {isLoading && <Skeleton height={10} width={200} />}
        {categories?.results.map((category) => (
          <WrapItem key={category.id}>
            <Button
              size={{ base: "sm", md: "md" }}
              variant={selectedCategoryId === category.id ? "solid" : "outline"}
              bgColor={selectedCategoryId === category.id ? "purple.500" : ""}
              onClick={() => {
                selectedCategoryId === category.id
                  ? setSelectedCategoryId(null)
                  : setSelectedCategoryId(category.id);
              }}
              borderColor="purple.600"
            >
              {category.name}
            </Button>
          </WrapItem>
        ))}
      </Wrap>
    </>
  );
};

export default CategoryGrid;
