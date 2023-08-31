import {
  Box,
  Button,
  Divider,
  HStack,
  Heading,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Textarea,
} from "@chakra-ui/react";
import AvatarEditor from "react-avatar-editor";
import { useRef, useState } from "react";
import SelectLocationMap from "../components/SelectLocationMap";
import { BsChevronDown, BsGeoAltFill, BsInfoCircle } from "react-icons/bs";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import useCategories from "../hookers/useCategories";
import TagsAdd from "../components/TagsAdd";
import { HostSelect } from "../components/HostSelect";

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

const CreateEventPage = () => {
  const editorRef = useRef<AvatarEditor>(null);
  const uploadImageRef = useRef<HTMLInputElement>(null);
  const [position, setPosition] = useState({ lat: 36.7538, lng: 3.0588 });
  
  const { data: categories, isLoading } = useCategories();
  
  const [croppedImage, setCroppedImage] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [isOnline, setIsOnline] = useState(false);
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [wilaya, setWilaya] = useState<number | null>(null);
  const [locationName, setLocationName] = useState("");
  const [locationId, setLocationId] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState<number | null>(null);
  const [tags, setTags] = useState<number[]>([]);
  const [hosts, setHosts] = useState<number[]>([]);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      padding={20}
      style={{
        background:
          "linear-gradient(90deg, rgba(20,1,32,1) 0%, rgba(46,8,78,1) 81%, rgba(48,0,84,1) 100%)",
      }}
    >
      <Box
        border="1px"
        borderRadius={15}
        borderColor="whiteAlpha.200"
        bgColor="purple.900"
        padding={5}
        width="60%"
        display="flex"
        alignItems="center"
        flexDirection="column"
      >
        <Heading padding={2} fontSize="xl">
          Create event
        </Heading>
        <Divider />
        <form>
          <Box
            width="full"
            display="flex"
            alignItems="center"
            flexDirection="column"
          >
            <Box
              width="40%"
              display="flex"
              alignItems="center"
              flexDirection="column"
              gap={3}
            >
              <Box
                borderRadius={0}
                bgColor="gray"
                overflow="hidden"
                width="fit-content"
              >
                <AvatarEditor
                  ref={editorRef}
                  image={image}
                  width={400}
                  height={400}
                  border={0}
                  color={[255, 255, 255, 0.6]} // RGBA
                  scale={1}
                  rotate={0}
                  onImageReady={() =>
                    setCroppedImage(
                      editorRef.current?.getImage()
                        ? editorRef.current?.getImage().toDataURL()
                        : ""
                    )
                  }
                  onPositionChange={() =>
                    setCroppedImage(
                      editorRef.current?.getImage()
                        ? editorRef.current?.getImage().toDataURL()
                        : ""
                    )}
                />
                <Input
                  display="none"
                  ref={uploadImageRef}
                  type="file"
                  onChange={(e) =>
                    setImage(
                      e.target.files
                        ? URL.createObjectURL(e.target.files[0])
                        : ""
                    )
                  }
                />
              </Box>
              <Button onClick={() => uploadImageRef.current?.click()}>
                Upload Image
              </Button>

              <Box width="100%">
                <Text fontSize="sm">Event name</Text>
                <Input
                  placeholder="Event name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.currentTarget.value)}
                ></Input>
              </Box>
              <Box width="100%">
                <Text fontSize="sm">Start Date and Time</Text>
                <Input
                  placeholder="Start Date"
                  type="datetime-local"
                  onChange={(e) =>
                    setStartDate(new Date(e.currentTarget.value))
                  }
                ></Input>
              </Box>
              <Box width="100%">
                <Text fontSize="sm">End Date and Time</Text>
                <Input
                  placeholder="End Date"
                  type="datetime-local"
                  onChange={(e) => setEndDate(new Date(e.currentTarget.value))}
                ></Input>
              </Box>
              <Box width="100%">
                <Text fontSize="sm">Event Location</Text>
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
                    <Menu>
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
                      <MenuList
                        maxHeight={300}
                        overflowY="scroll"
                        zIndex={99999}
                      >
                        {[...Array(58).keys()].map((n) => (
                          <MenuItem
                            key={n + 1}
                            onClick={() => setWilaya(n + 1)}
                          >
                            {wilayas[n]}
                          </MenuItem>
                        ))}
                      </MenuList>
                    </Menu>
                  </>
                )}
              </Box>
              <Box width="100%">
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
              </Box>
              <Box width="100%">
                <Tabs isFitted>
                  <TabList>
                    <Tab>Details</Tab>
                    <Tab>Preview</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel paddingX={1}>
                      <Link
                        fontSize="xs"
                        textColor="whiteAlpha.600"
                        isExternal
                        href="https://www.markdownguide.org/getting-started/"
                      >
                        <HStack>
                          <Text>learn more about Markdown</Text>
                          <BsInfoCircle />
                        </HStack>
                      </Link>

                      <Textarea
                        width="100%"
                        height="300px"
                        placeholder="Details about the event."
                        value={body}
                        onChange={(e) => setBody(e.currentTarget.value)}
                      />
                    </TabPanel>
                    <TabPanel paddingX={1}>
                      <Box
                        border="1px"
                        borderRadius={10}
                        borderColor="whiteAlpha.300"
                        paddingX={3}
                      >
                        <ReactMarkdown
                          className="markdown"
                          remarkPlugins={[remarkGfm]}
                        >
                          {body}
                        </ReactMarkdown>
                      </Box>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </Box>
              <Box width="100%">
                {categories && (
                  <>
                    <Text fontSize="sm">Category</Text>
                    <Menu>
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
                      <MenuList
                        maxHeight={300}
                        overflowY="scroll"
                        zIndex={99999}
                      >
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
                  </>
                )}
              </Box>
              <Box width="100%">
                <Text fontSize="sm">Tags</Text>
                <TagsAdd tags={tags} setTags={(tags) => setTags(tags)} />
              </Box>
              <Box width="100%">
                <Text fontSize="sm">Hosts</Text>
                <HostSelect
                  hosts={hosts}
                  setHosts={(hosts) => setHosts(hosts)}
                />
              </Box>
            </Box>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default CreateEventPage;
