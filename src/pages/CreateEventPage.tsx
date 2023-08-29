import {
  Box,
  Button,
  Divider,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import AvatarEditor from "react-avatar-editor";
import logo from "../assets/logo.png";
import logo2 from "../assets/image-not-found.png";
import { useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import SelectLocationMap from "../components/SelectLocationMap";
import useMapReverseLookup from "../hookers/useMapReverseLookup";

const CreateEventPage = () => {
  const [image, setImage] = useState<string>("");
  const [croppedImage, setCroppedImage] = useState<string>("");
  const editorRef = useRef<AvatarEditor>(null);
  const uploadImageRef = useRef<HTMLInputElement>(null);
  const [position, setPosition] = useState({ lat: 36.7538, lng: 3.0588 });
  const { data: lookupData, error } = useMapReverseLookup(
    position.lat,
    position.lng
  );

  const [isOnline, setIsOnline] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [locationName, setLocationName] = useState("");

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
                borderRadius={25}
                bgColor="gray"
                overflow="hidden"
                width="full"
              >
                <AvatarEditor
                  ref={editorRef}
                  image={image}
                  style={{ width: "100%", "padding-top": "100%" }}
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
                  onImageChange={() =>
                    setCroppedImage(
                      editorRef.current?.getImage()
                        ? editorRef.current?.getImage().toDataURL()
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
                <Input placeholder="Event name" type="text"></Input>
              </Box>
              <Box width="100%">
                <Text fontSize="sm">Start Date and Time</Text>
                <Input placeholder="Start Date" type="datetime-local"></Input>
              </Box>
              <Box width="100%">
                <Text fontSize="sm">End Date and Time</Text>
                <Input placeholder="End Date" type="datetime-local"></Input>
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
              </Box>
              <Box width="100%">
                <Text fontSize="xs" textColor="gray.400">
                  location:{" "}
                  {position.lat.toString().substring(0, 7) +
                    ", " +
                    position.lng.toString().substring(0, 7)}
                </Text>
                <SelectLocationMap
                  position={position}
                  setPosition={(position: { lat: number; lng: number }) => {
                    setPosition(position);
                    lookupData ? setLocationName(lookupData?.name) : "";
                  }}
                />
                <Text paddingTop={2} fontSize="sm">{"Location name (editable)"}</Text>
                <Input
                  value={locationName}
                  onChange={(e) => setLocationName(e.currentTarget.value)}
                ></Input>
              </Box>
            </Box>
          </Box>
        </form>
      </Box>
      <Input
        name="dont delete, used for image upload"
        display="none"
        ref={uploadImageRef}
        type="file"
        onChange={(e) =>
          setImage(e.target.files ? URL.createObjectURL(e.target.files[0]) : "")
        }
      />
    </Box>
  );
};

export default CreateEventPage;
