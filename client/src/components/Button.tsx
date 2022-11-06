import { Button } from "@chakra-ui/react";

export default function BasicButton({ placeholderName, backgroundColor }) {
  return (
    <Button
      borderRadius={["20px", "30px"]}
      padding={["20px", "30px"]}
      backgroundColor={backgroundColor}
      marginLeft="30px"
      marginRight="30px">
      {placeholderName}
    </Button>
  );
}
