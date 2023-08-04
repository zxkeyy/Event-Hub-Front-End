import { Select } from "@chakra-ui/react";

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
  onSelectWilaya: (wilaya: number | null) => void;
}

const SelectWilaya = ({ onSelectWilaya }: Props) => {
  return (
    <>
      <Select
        placeholder="Any"
        width="fit-content"
        fontWeight="bold"
        fontSize={{base: "xl",md:"4xl"}}
        color="purple.500"
        size={{ base: "md" , md: "lg"}}
        variant="flushed"
        onChange={() => onSelectWilaya(null)}
      >
        {[...Array(58).keys()].map((n) => (
          <option
            onClick={() => onSelectWilaya(n + 1)}
            key={n + 1}
            value={n + 1}
          >
            {wilayas[n]}
          </option>
        ))}
      </Select>
    </>
  );
};

export default SelectWilaya;
