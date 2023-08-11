import { Select } from "@chakra-ui/react";
import useEventQueryStore from "../store";

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
    <Select
      placeholder="Any"
      width="fit-content"
      
      fontSize={{ base: "sm", md: "md" }}
      size={{ base: "sm", md: "md" }}
      variant="filled"
      onChange={() => setWilaya(null)}
      value={selectedWilaya ? selectedWilaya : 0}
    >
      {[...Array(58).keys()].map((n) => (
        <option onClick={() => setWilaya(n + 1)} key={n + 1} value={n + 1}>
          {wilayas[n]}
        </option>
      ))}
    </Select>
  );
};

export default SelectWilaya2;
