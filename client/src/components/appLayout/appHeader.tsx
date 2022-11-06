import React from "react";
import { Center, VStack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";
import schLogo from "src/assets/scheduleMe.png";

const AppHeader = () => {
  return (
    <>
      <VStack w="100%" h="flex" backgroundColor={"#FFFFFF"}>
        <Center>
          <Image src={schLogo.src} alt="Schedule-Me Logo." width={[200, 200]} align="center" />
        </Center>
      </VStack>
    </>
  );
};

export default AppHeader;
