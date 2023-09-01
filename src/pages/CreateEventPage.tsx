import {
  Box,
  Button,
  Divider,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import AvatarEditor from "react-avatar-editor";
import { useRef, useState } from "react";
import SelectLocationMap from "../components/SelectLocationMap";
import TagsAdd from "../components/TagsAdd";
import { HostSelect } from "../components/HostSelect";
import CategoryInput from "../components/CategoryInput";
import DetailsInput from "../components/DetailsInput";
import LocationInput from "../components/LocationInput";



const CreateEventPage = () => {
  const editorRef = useRef<AvatarEditor>(null);
  const uploadImageRef = useRef<HTMLInputElement>(null);
  const [position, setPosition] = useState({ lat: 36.7538, lng: 3.0588 });

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
                    )
                  }
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
                <LocationInput
                  isOnline={isOnline}
                  setIsOnline={(isOnline) => setIsOnline(isOnline)}
                  wilaya={wilaya}
                  setWilaya={(wilaya) => setWilaya(wilaya)}
                  locationName={locationName}
                />
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
                <DetailsInput body={body} setBody={(body) => setBody(body)} />
              </Box>
              <Box width="100%">
                <Text fontSize="sm">Category</Text>
                <CategoryInput
                  category={category}
                  setCategory={(category) => setCategory(category)}
                />
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
