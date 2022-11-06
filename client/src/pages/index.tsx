import React from "react";
import { Box, Container, VStack } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import BasicButton from "../components/Button";
import schLogo from "../assets/scheduleMe.png";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Container width={["100%", "xxl"]} height="100vh" border={"1px"} className="home-container">
        <VStack spacing="0" width="100%" className="homepage-logo-adjustment">
          <Box marginTop={["15%", "25%"]}>
            <Image src={schLogo.src} alt="Cannot find image" width={[250, 350]} />
          </Box>
          <Box paddingTop={"20px"} className="homepage-footer">
            <Link href="/registration">
              <a>
                <BasicButton placeholderName="SIGN UP" backgroundColor={"#FDFDFD"} />
              </a>
            </Link>
            <Link href="/login">
              <a>
                <BasicButton placeholderName="LOGIN" backgroundColor={"#ff6600"} />
              </a>
            </Link>
          </Box>
          <div className="homepage-footer-background" />
        </VStack>
      </Container>
    </>
  );
};

export default Home;
