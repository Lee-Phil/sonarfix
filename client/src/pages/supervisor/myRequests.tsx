import { Spacer, VStack, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import AppDivider from "../../components/appLayout/appDivider";
import AppFooter from "../../components/appLayout/appFooter";
import AppHeader from "../../components/appLayout/appHeader";
import Pagination from "../../components/RequestsPage/Pagination";
import RequestTabs from "../../components/RequestsPage/RequestTabs";
import RequestTable from "../../components/RequestsPage/RequestTable";

const MyRequests = () => {
  const PLACEHOLDER_ID = 1;
  const REQUESTS_PER_PAGE = 5;
  const STATUS_MY_REQUEST = "ALL_REQUESTS";

  const [requests, setRequests] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [status, setStatus] = useState("");

  useEffect(() => {
    let requestsFromDB: Response;
    let amountOfRequests: Response;

    //Will need to change later when sessions are implemented, placeholder for supervisorID
    async function getTotalAmountOfPagesFromDB() {
      // if (status === STATUS_MY_REQUEST) {
      //   amountOfRequests = await fetch(
      //     process.env.NEXT_PUBLIC_BACKEND_URL + `/api/request/search/amountRequests/${PLACEHOLDER_ID}`
      //   );
      // } else {
      //   amountOfRequests = await fetch(
      //     process.env.NEXT_PUBLIC_BACKEND_URL + `/api/request/search/amountRequests/${PLACEHOLDER_ID}/${status}`
      //   );
      // }
      // await amountOfRequests.json().then(numberOfPages => {
      //   setTotalPages(Math.ceil(numberOfPages / REQUESTS_PER_PAGE));
      // });
      setTotalPages(1);
    }

    async function fetchRequests() {
      await getTotalAmountOfPagesFromDB();

      // //Get requests from the DB to populate table
      // //Will need to change later when sessions are implemented, placeholder for supervisorID
      // if (status === STATUS_MY_REQUEST) {
      //   requestsFromDB = await fetch(
      //     process.env.NEXT_PUBLIC_BACKEND_URL + `/api/request/filter/${PLACEHOLDER_ID}/${currPage}`
      //   );
      // } else {
      //   //Get requests from the DB to populate table
      //   //Will need to change later when sessions are implemented, placeholder for supervisorID
      //   requestsFromDB = await fetch(
      //     process.env.NEXT_PUBLIC_BACKEND_URL + `/api/request/filter/${PLACEHOLDER_ID}/${currPage}/${status}`
      //   );
      // }
      // requestsFromDB = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + `/api/request/`);
      // await requestsFromDB.json().then(request => {
      //   setRequests([]);
      // });
      setRequests([]);
    }
    fetchRequests();
    fetch(process.env.NEXT_PUBLIC_BACKEND_URL + `/api/nurse`);
  }, [currPage, totalPages, status]);

  return (
    <>
      <AppHeader />
      <AppDivider />
      <VStack
        zIndex="1"
        bgColor={"#DEF0EE"}
        h="calc(100vh - 0)"
        w={["100%", "100%", "80%"]}
        marginLeft={"auto"}
        marginRight={"auto"}
        paddingTop="68px"
        paddingBottom="68px"
        className="request-Vstack">
        <Spacer />
        <Box boxShadow="dark-lg" backgroundColor={"white"} padding={["0px", "0px", "30px"]}>
          <RequestTabs setStatus={setStatus} setCurrPage={setCurrPage} />
          <RequestTable requests={requests} />
          <Pagination totalPages={totalPages} setCurrPage={setCurrPage} />
        </Box>
        <Spacer />
      </VStack>
      <AppFooter />
    </>
  );
};

export default MyRequests;
