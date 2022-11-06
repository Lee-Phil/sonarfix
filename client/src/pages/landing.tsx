import React from "react";
import { Center, Spacer, VStack } from "@chakra-ui/react";
import AppFooter from "../components/appLayout/appFooter";
import AppHeader from "../components/appLayout/appHeader";
import AppDivider from "../components/appLayout/appDivider";
import CustomCard from "../components/CustomCard";
import { Image } from "@chakra-ui/image";
import { NurseArray, SupervisorArray } from "../components/landingOptions";

export default function Landing() {
  // user depends on the auth token, default set to 1 for a nurse
  const user = 0;
  // reassigns landing options for rendering landing page
  let landingOptions = NurseArray;
  switch (user) {
    case 0:
      landingOptions = SupervisorArray;
      break;

    default:
      landingOptions = NurseArray;
      break;
  }

  return (
    <>
      <AppHeader />
      <AppDivider />
      {landingOptions.map(input => {
        return (
          <VStack zIndex="1" bgColor={"#DEF0EE"} h="calc(100vh - 0)" w="80%" marginLeft={"auto"} marginRight={"auto"}>
            <Spacer />
            <Center>
              <Image src={input.src} alt={input.alt} className="card-logo" />
            </Center>
            <CustomCard
              placeholderTitle={input.placeholderTitle}
              placeholderDesc={input.placeholderDesc}
              link={input.link}
            />
            <Spacer />
          </VStack>
        );
      })}
      <AppFooter />
    </>
  );
}
