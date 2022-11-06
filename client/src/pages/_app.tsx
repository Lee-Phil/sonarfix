import { ChakraProvider, Flex } from "@chakra-ui/react";
import theme from "../theme";
import { AppProps } from "next/app";
import "../styles/customCalendar.css";
import "../styles/login.css";
import "../styles/home.css";
import "../styles/landing.css";
import "../styles/registration.css";
import "../styles/RequestUploader.css";
import "../styles/request.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Flex flexDirection="column" justifyContent="center">
        <Component {...pageProps} />
      </Flex>
    </ChakraProvider>
  );
}

export default MyApp;
