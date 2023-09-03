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
  useDisclosure,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { BsGeoAltFill, BsChevronDown } from "react-icons/bs";
import SelectLocationMap from "../SelectLocationMap";
import { useState } from "react";

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
  setLocationName: (locationName: string) => void;
  locationId: string;
  setLocationId: (locationId: string) => void;
  error_name: boolean;
  error_id: boolean;
  error_wilaya: boolean;
}

const LocationInput = ({
  isOnline,
  setIsOnline,
  wilaya,
  setWilaya,
  locationName,
  setLocationName,
  locationId,
  setLocationId,
  error_id,
  error_name,
  error_wilaya,
}: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [position, setPosition] = useState({ lat: 36.7538, lng: 3.0588 });

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
            <Input
              isInvalid={error_name}
              value={locationName}
              placeholder="Location name"
              onChange={(e) => setLocationName(e.currentTarget.value)}
            ></Input>
            <InputRightElement>
              <IconButton
                border={error_id ? "2px" : ""}
                borderColor={error_id ? "red.300" : ""}
                size="sm"
                aria-label="Choose location"
                icon={<BsGeoAltFill />}
                onClick={onOpen}
              />
            </InputRightElement>
          </InputGroup>
          <Menu matchWidth>
            <MenuButton
              as={Button}
              border={error_wilaya ? "2px" : "1px"}
              borderColor={error_wilaya ? "red.300" : "whiteAlpha.300"}
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
          <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Choose a location</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <SelectLocationMap
                  position={position}
                  locationName={locationName}
                  locationId={locationId}
                  setPosition={(position: { lat: number; lng: number }) =>
                    setPosition(position)
                  }
                  setLocationName={(name) => setLocationName(name)}
                  setLocationId={(id) => setLocationId(id)}
                />
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="purple" onClick={onClose}>
                  Done
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      )}
    </>
  );
};

export default LocationInput;
