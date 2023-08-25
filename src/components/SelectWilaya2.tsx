import {
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import useEventQueryStore from "../store";
import { BsChevronDown } from "react-icons/bs";

const wilayas = [
  "Adrar",
  "Chlef",
  "Laghouat",
  "Oum El Bouaghi",
  "Batna",
  "Béjaïa",
  "Biskra",
  "Béchar",
  "Blida",
  "Bouïra",
  "Tamanrasset",
  "Tébessa",
  "Tlemcen",
  "Tiaret",
  "Tizi Ouzou",
  "Algiers",
  "Djelfa",
  "Jijel",
  "Sétif",
  "Saïda",
  "Skikda",
  "Sidi Bel Abbès",
  "Annaba",
  "Guelma",
  "Constantine",
  "Médéa",
  "Mostaganem",
  "Msila",
  "Mascara",
  "Ouargla",
  "Oran",
  "El Bayadh",
  "Illizi",
  "Bordj Bou Arréridj",
  "Boumerdès",
  "El Tarf",
  "Tindouf",
  "Tissemsilt",
  "El Oued",
  "Khenchela",
  "Souk Ahras",
  "Tipaza",
  "Mila",
  "Aïn Defla",
  "Naâma",
  "Aïn Témouchent",
  "Ghardaïa",
  "Relizane",
  "El MGhair",
  "El Menia",
  "Ouled Djellal",
  "Bordj Baji Mokhtar",
  "Béni Abbès",
  "Timimoun",
  "Touggourt",
  "Djanet",
  "Ain Salah",
  "Ain Guezzam",
];

const SelectWilaya2 = () => {
  const setWilaya = useEventQueryStore((s) => s.setWilaya);
  const selectedWilaya = useEventQueryStore((s) => s.eventQuery.wilaya);

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<BsChevronDown />}
        variant="solid"
        textAlign="start"
        width="100%"
        overflow="hidden"
      >
        {selectedWilaya ? wilayas[selectedWilaya - 1] : "All"}
      </MenuButton>
      <MenuList maxHeight={300} overflowY="scroll">
        <MenuItem onClick={() => setWilaya(null)}>All</MenuItem>
        <MenuDivider />
        {[...Array(58).keys()].map((n) => (
          <MenuItem key={n + 1} onClick={() => setWilaya(n + 1)}>
            {wilayas[n]}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SelectWilaya2;
