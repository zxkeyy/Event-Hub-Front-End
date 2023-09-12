import { useParams } from "react-router-dom";
import useClub, { putClub } from "../hookers/useClub";
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
import DetailsInput from "../components/CreateEvent/DetailsInput";
import ImageInput from "../components/CreateEvent/ImageInput";
import { useEffect, useState } from "react";

const EditHostPage = () => {
  const { id } = useParams();
  const { data: host, isLoading } = useClub(parseInt(id!));

  const [croppedImage, setCroppedImage] = useState<string>("");
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const [errors, setErrors] = useState<any>({});

  useEffect(() => {
    if (host) {
      setName(host.name);
      setBody(host.body);
    }
  }, [host]);

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
    if (!name) {
      errors_temp.name = ["name error"];
    }
    if (JSON.stringify(errors_temp) != "{}") {
      console.log(errors_temp);
      setErrors(errors_temp);
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      return;
    }

    const hostForm = new FormData();
    hostForm.append("name", name);
    hostForm.append("body", body);
    if (croppedImage) {
      hostForm.append("image", await dataURLToFile(croppedImage));
    }

    try {
      putClub(parseInt(id!), hostForm);
    } catch (errorEx: any) {
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
          Edit Host
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
                  defaultImage={host?.image}
                />
              </Box>
              <Box width="100%">
                <Text fontSize="sm">Host name</Text>
                <Input
                  isInvalid={errors.name}
                  placeholder="Host name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.currentTarget.value)}
                ></Input>
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
                Edit Host
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default EditHostPage;
