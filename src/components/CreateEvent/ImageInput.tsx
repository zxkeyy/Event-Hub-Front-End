import { Box, Button, Input, useDimensions } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import AvatarEditor from "react-avatar-editor";

interface Props {
  defaultImage?: string;
  setCroppedImage: (croppedImage: string) => void;
  error: boolean;
}

const ImageInput = ({ setCroppedImage, error, defaultImage }: Props) => {
  const editorRef = useRef<AvatarEditor>(null);
  const uploadImageRef = useRef<HTMLInputElement>(null);
  const box = useRef(null);
  const dimensions = useDimensions(box);
  const [image, setImage] = useState<string>("");

  useEffect(() => {
    if (defaultImage) setImage(defaultImage);
  }, [defaultImage]);

  return (
    <Box width="100%" ref={box}>
      <Box
        borderTopRadius={10}
        bgColor="gray"
        overflow="hidden"
        width="fit-content"
      >
        <AvatarEditor
          crossOrigin={"anonymous"}
          ref={editorRef}
          image={image}
          width={dimensions ? dimensions.borderBox.width : 470}
          height={dimensions ? dimensions.borderBox.width : 470}
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
          accept="image/*"
          onChange={(e) =>
            setImage(
              e.target.files ? URL.createObjectURL(e.target.files[0]) : ""
            )
          }
        />
      </Box>
      <Button
        border={error ? "2px" : ""}
        borderColor={error ? "red.300" : ""}
        width="100%"
        borderTopRadius={0}
        onClick={() => uploadImageRef.current?.click()}
      >
        Upload Image
      </Button>
    </Box>
  );
};

export default ImageInput;
