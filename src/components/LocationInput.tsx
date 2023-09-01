import {
  InputGroup,
  Input,
  InputRightElement,
  IconButton,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Select,
} from "@chakra-ui/react";
import { BsGeoAltFill, BsChevronDown } from "react-icons/bs";

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

interface Props {
  isOnline: boolean;
  setIsOnline: (isOnline: boolean) => void;
  wilaya: number | null;
  setWilaya: (wilaya: number) => void;
  locationName: string;
}

const LocationInput = ({
  isOnline,
  setIsOnline,
  wilaya,
  setWilaya,
  locationName,
}: Props) => {
  return (
    <>
      <Select>
        <option onClick={() => setIsOnline(false)} value="in person">
          In Person
        </option>
        <option onClick={() => setIsOnline(true)} value="online">
          Online
        </option>
      </Select>
      {!isOnline && (
        <>
          <InputGroup marginTop={2}>
            <Input value={locationName} readOnly></Input>
            <InputRightElement>
              <IconButton
                size="sm"
                aria-label="Choose location"
                icon={<BsGeoAltFill />}
              />
            </InputRightElement>
          </InputGroup>
          <Menu matchWidth>
            <MenuButton
              as={Button}
              rightIcon={<BsChevronDown />}
              variant="outline"
              textAlign="start"
              width="100%"
              overflow="hidden"
              fontWeight="normal"
              marginTop={2}
            >
              {wilaya ? wilayas[wilaya - 1] : "Wilaya"}
            </MenuButton>
            <MenuList maxHeight={300} overflowY="scroll" zIndex={99999}>
              {[...Array(58).keys()].map((n) => (
                <MenuItem key={n + 1} onClick={() => setWilaya(n + 1)}>
                  {wilayas[n]}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </>
      )}
    </>
  );
};

export default LocationInput;
