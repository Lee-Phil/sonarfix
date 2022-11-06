import React from "react";
import { Box, Container, VStack } from "@chakra-ui/layout";
import { ArrowLeft } from "tabler-icons-react";
import { Image } from "@chakra-ui/image";
import BasicForm from "../components/Form";
import BasicButton from "../components/Button";
import schLogo from "../assets/scheduleMe.png";
import Link from "next/link";
const Login = () => {
  return (
    <>
      <Container width={["100%", "xxl"]} height="100vh" border={"1px"} padding={[6, 8]} className="login-container">
        <Box>
          <Link href="/">
            <a>
              <ArrowLeft size={40} strokeWidth={2} color={"black"} className="login-arrow" />
            </a>
          </Link>
        </Box>
        <VStack spacing="0">
          <Box marginTop={["15%", "25%"]}>
            <Image src={schLogo.src} alt="Cannot find image" width={[250, 350]} />
          </Box>
          <Box>
            <BasicForm />
          </Box>
          <Box paddingTop={"20px"}>
            <Link href="/landing">
              <a>
                <BasicButton placeholderName="LOGIN" backgroundColor={"#ff6600"} />
              </a>
            </Link>
          </Box>
        </VStack>
      </Container>
    </>
  );
};

export default Login;
