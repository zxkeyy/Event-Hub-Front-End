import {
  Alert,
  AlertDescription,
  AlertIcon,
  Box,
  Button,
  Divider,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import CategoryInput from "../components/CreateEvent/CategoryInput";
import DetailsInput from "../components/CreateEvent/DetailsInput";
import HostSelect from "../components/CreateEvent/HostSelect";
import ImageInput from "../components/CreateEvent/ImageInput";
import LocationInput from "../components/CreateEvent/LocationInput";
import TagsAdd from "../components/CreateEvent/TagsAdd";
import { useParams } from "react-router-dom";
import useEvent, { postEvent, putEvent } from "../hookers/useEvent";
import { useEffect, useState } from "react";

const EditEventPage = () => {
  const { slug } = useParams();
  const { data: event, isLoading } = useEvent(slug!);

  const [croppedImage, setCroppedImage] = useState<string>("");
  const [isOnline, setIsOnline] = useState(false);
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [wilaya, setWilaya] = useState<number | null>(null);
  const [locationName, setLocationName] = useState("");
  const [locationId, setLocationId] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState<number | null>(null);
  const [tags, setTags] = useState<number[]>([]);
  const [hosts, setHosts] = useState<number[]>([]);
  const [errors, setErrors] = useState<any>({});

  useEffect(() => {
    if (event) {
      setIsOnline(event.location_name === "online");
      setName(event.name);
      setStartDate(new Date(event.start_date));
      setEndDate(new Date(event.end_date));
      setWilaya(event.wilaya);
      setLocationName(event.location_name);
      setLocationId(event.location_id);
      setBody(event.body);
      setCategory(event.category);
      setTags(event.tags);
      setHosts(event.clubs);
    }
  }, [event]);

  function slugify(str: string) {
    return String(str)
      .normalize("NFKD") // split accented characters into their base characters and diacritical marks
      .replace(/[\u0300-\u036f]/g, "") // remove all the accents, which happen to be all in the \u03xx UNICODE block.
      .trim() // trim leading or trailing whitespace
      .toLowerCase() // convert to lowercase
      .replace(/[^a-z0-9 -]/g, "") // remove non-alphanumeric characters
      .replace(/\s+/g, "-") // replace spaces with hyphens
      .replace(/-+/g, "-"); // remove consecutive hyphens
  }

  async function dataURLToFile(dataURL: string) {
    const blob = await fetch(dataURL).then((res) => res.blob());
    return new File([blob], slugify(name) + "file.jpg", {
      type: "image/jpeg",
      lastModified: new Date().getTime(),
    });
  }

  const onSubmit = async () => {
    setErrors({});
    let errors_temp: { [key: string]: any } = {};

    if (!croppedImage) {
      errors_temp.image = ["image error"];
    }
    if (hosts.length < 1) {
      errors_temp.clubs = ["clubs error"];
    }
    if (!name) {
      errors_temp.name = ["name error"];
    }
    if (!startDate) {
      errors_temp.start_date = ["start date error"];
    }
    if (!endDate) {
      errors_temp.end_date = ["end date error"];
    }
    if (!locationName) {
      errors_temp.location_name = ["location name error"];
    }
    if (!locationId) {
      errors_temp.location_id = ["location id error"];
    }
    if (wilaya === null) {
      errors_temp.wilaya = ["wilaya error"];
    }
    if (JSON.stringify(errors_temp) != "{}") {
      setErrors(errors_temp);
      console.log(errors);
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      return;
    }

    const eventForm = new FormData();
    eventForm.append("name", name);
    eventForm.append("start_date", startDate ? startDate.toISOString() : "");
    eventForm.append("end_date", endDate ? endDate.toISOString() : "");
    eventForm.append("location_name", isOnline ? "Online" : locationName);
    eventForm.append("location_id", isOnline ? "0" : locationId);
    eventForm.append("wilaya", wilaya ? wilaya?.toString() : "");
    eventForm.append("description", "");
    eventForm.append("body", body);
    eventForm.append("slug", slugify(name));
    if (croppedImage) {
      eventForm.append("image", await dataURLToFile(croppedImage));
    }
    hosts.forEach((value) => {
      eventForm.append("clubs", value.toString());
    });
    tags.forEach((value) => {
      eventForm.append("tags", value.toString());
    });
    if (category) {
      eventForm.append("category", category?.toString());
    }

    try {
      await putEvent(slug!, eventForm);
    } catch (errorEx: any) {
      console.log("catch");
      console.log(errorEx);
      if (errorEx.response && errorEx.response.status === 400) {
        setErrors(errorEx.response.data);
      }
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      return;
    }
  };

  if (isLoading) return null;

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
        <form
          onSubmit={(req) => {
            req.preventDefault();
            onSubmit();
          }}
        >
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
                  error={errors.image}
                  defaultImage={event?.image}
                />
              </Box>
              <Box width="100%">
                <Text fontSize="sm">Hosts</Text>
                <HostSelect
                  hosts={hosts}
                  setHosts={(hosts) => setHosts(hosts)}
                  error={errors.clubs}
                />
              </Box>

              <Box width="100%">
                <Text fontSize="sm">Event name</Text>
                <Input
                  isInvalid={errors.name}
                  placeholder="Event name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.currentTarget.value)}
                ></Input>
              </Box>
              <Box width="100%">
                <Text fontSize="sm">Start Date and Time</Text>
                <Input
                  isInvalid={errors.start_date}
                  placeholder="Start Date"
                  type="datetime-local"
                  value={startDate ? startDate.toISOString().slice(0, -8) : ""}
                  onChange={(e) =>
                    setStartDate(new Date(e.currentTarget.value))
                  }
                ></Input>
              </Box>
              <Box width="100%">
                <Text fontSize="sm">End Date and Time</Text>
                <Input
                  isInvalid={errors.end_date}
                  placeholder="End Date"
                  type="datetime-local"
                  value={endDate ? endDate.toISOString().slice(0, -8) : ""}
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
                  error_id={errors.location_id}
                  error_name={errors.location_name}
                  error_wilaya={errors.wilaya}
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
              {errors.nonFieldError && (
                <Alert status="error" variant="left-accent">
                  <AlertIcon />
                  <AlertDescription>
                    {errors.nonFieldError[0] + "\n"}
                  </AlertDescription>
                </Alert>
              )}
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

export default EditEventPage;
