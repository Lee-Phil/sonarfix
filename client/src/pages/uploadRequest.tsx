import RequestUploader from "../components/RequestUploader";
import ScheduleProgress from "../components/RequestProgress";
import AppDivider from "../components/appLayout/appDivider";
import AppFooter from "../components/appLayout/appFooter";
import AppHeader from "../components/appLayout/appHeader";
import { useState } from "react";
import { Container, Spacer, VStack } from "@chakra-ui/react";

export default function UploadRequest() {
  const [fileList, setFileList] = useState([]);
  const [isloadingVisible, setIsloadingVisible] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  return (
    <>
      <AppHeader />
      <AppDivider />
      <VStack zIndex="1" bgColor={"#DEF0EE"} h="calc(100vh - 0)" w="80%" marginLeft={"auto"} marginRight={"auto"}>
        <Spacer />
        <div className="dropzone-area">
          <RequestUploader
            setFileList={setFileList}
            setIsloadingVisible={setIsloadingVisible}
            setIsEmpty={setIsEmpty}
          />
        </div>
        <Spacer />
        {isEmpty && (
          <div className="container-card">
            <Container className="request-card" maxWidth={"600px"} width={["100%", "xxl"]}>
              <ScheduleProgress fileList={fileList} isloadingVisible={isloadingVisible} />
            </Container>
          </div>
        )}
        <Spacer />
      </VStack>
      <AppFooter />
    </>
  );
}
