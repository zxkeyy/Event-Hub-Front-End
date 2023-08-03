import useCategories, { Category } from "../hookers/useCategories";
import { Button, Skeleton, Text, Wrap, WrapItem } from "@chakra-ui/react";

interface Props {
  onClickCategory: (category: Category | null) => void;
  selectedCategory: Category | null;
}

const CategoryGrid = ({ selectedCategory, onClickCategory }: Props) => {
  const { data: categories, error, isLoading} = useCategories();

  return (
    <>
      {error && <Text>{error}</Text>}
      <Wrap>
        {isLoading && <Skeleton height={10} width={200}/>}
        {categories.map((category) => (
          <WrapItem key={category.id}>
            <Button
              variant={selectedCategory === category ? "solid" : "outline"}
              bgColor={selectedCategory === category ? "purple.500" : ""}
              onClick={() => {
                selectedCategory === category
                  ? onClickCategory(null)
                  : onClickCategory(category);
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
