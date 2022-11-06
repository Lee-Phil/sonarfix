import { Flex, FormHelperText } from "@chakra-ui/react";

export default function RegistrationErrorMessage({ error, errorMessage }: any) {
  return (
    <>
      <Flex justifyContent="center">{error && <FormHelperText color="red">{errorMessage}</FormHelperText>}</Flex>
    </>
  );
}
