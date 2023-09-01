import { Box, Button, Divider, Heading, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import TagsAdd from "../components/CreateEvent/TagsAdd";
import { HostSelect } from "../components/CreateEvent/HostSelect";
import CategoryInput from "../components/CreateEvent/CategoryInput";
import DetailsInput from "../components/CreateEvent/DetailsInput";
import LocationInput from "../components/CreateEvent/LocationInput";
import ImageInput from "../components/CreateEvent/ImageInput";

const CreateEventPage = () => {
  const [croppedImage, setCroppedImage] = useState<string>("");
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

  const onSubmit = () => {
    
  }

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
        width="30%"
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
              width="100%"
              display="flex"
              alignItems="center"
              flexDirection="column"
              gap={3}
            >
              <Box width="100%" marginTop={5}>
                <ImageInput
                  setCroppedImage={(croppedImage) =>
                    setCroppedImage(croppedImage)
                  }
                />
              </Box>
              <Box width="100%">
                <Text fontSize="sm">Hosts</Text>
                <HostSelect
                  hosts={hosts}
                  setHosts={(hosts) => setHosts(hosts)}
                />
              </Box>

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
                  setLocationName={(locationName) =>
                    setLocationName(locationName)
                  }
                  locationId={locationId}
                  setLocationId={(locationId) => setLocationId(locationId)}
                />
              </Box>
              <Box width="100%">
                <Text fontSize="sm">Tags</Text>
                <TagsAdd tags={tags} setTags={(tags) => setTags(tags)} />
              </Box>
              <Box width="100%">
                <Text fontSize="sm">Category</Text>
                <CategoryInput
                  category={category}
                  setCategory={(category) => setCategory(category)}
                />
              </Box>
              <Box width="100%">
                <DetailsInput body={body} setBody={(body) => setBody(body)} />
              </Box>
              <Divider />
              <Button type="submit" variant="solid" width="100%">
                Create event
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default CreateEventPage;
