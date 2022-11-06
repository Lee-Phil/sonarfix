import React from "react";
import { Box, Center, Text, VStack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";
import team12 from "src/assets/team12logo.png";

const AppFooter = () => {
  return (
    <>
      <VStack w="100%" h="150px" backgroundColor={"#83C5BE"} zIndex="100">
        <Box paddingTop={"50px"}>
          <Center>
            <Text fontSize="sm" color="subtle" align="center">
              &copy; {new Date().getFullYear()} Schedule-Me. All rights reserved.
            </Text>
          </Center>
          <Center>
            <Image src={team12.src} alt="Team 12 Logo." width={[100, 100]} align="center" opacity={"60%"} />
          </Center>
        </Box>
      </VStack>
    </>
  );
};

export default AppFooter;
