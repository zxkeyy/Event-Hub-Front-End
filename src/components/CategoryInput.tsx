import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Box,
  Text,
  Skeleton,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useCategories from "../hookers/useCategories";

interface Props {
  category: number | null;
  setCategory: (category: number | null) => void;
}

const CategoryInput = ({ category, setCategory }: Props) => {
  const { data: categories, isLoading } = useCategories();

  return (
    <>
      {isLoading && <Skeleton width="100%" height={10} />}
      {categories && (
        <Box>
          <Text fontSize="sm">Category</Text>
          <Menu matchWidth>
            <MenuButton
              as={Button}
              rightIcon={<BsChevronDown />}
              variant="outline"
              textAlign="start"
              width="100%"
              overflow="hidden"
              fontWeight="normal"
            >
              {category
                ? categories.results.find(
                    (categoryRes) => categoryRes.id === category
                  )?.name
                : "Choose a category"}
            </MenuButton>
            <MenuList maxHeight={300} overflowY="scroll" zIndex={99999}>
              {categories.results.map((categoryRes) => (
                <MenuItem
                  key={categoryRes.id}
                  onClick={() => setCategory(categoryRes.id)}
                >
                  {categoryRes.name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Box>
      )}
    </>
  );
};

export default CategoryInput;
