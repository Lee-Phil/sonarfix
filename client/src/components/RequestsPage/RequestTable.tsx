import { Table, Thead, Tbody, Tr, Th, Td, Box, Flex } from "@chakra-ui/react";

const TableHeaders: Array<string> = ["Name", "Start", "Status"];
export default function RequestTable({ requests }) {
  return (
    <>
      <Flex justifyContent="center">
        <Box border="2px solid #E2E8F0" borderRadius="md" margin={"10px"}>
          <Table backgroundColor={"white"} width="35vw">
            <Thead>
              <Tr>
                {TableHeaders.map((header, index) => {
                  return (
                    <Th className={`requestTableHeaders${index}`} key={index}>
                      {header}
                    </Th>
                  );
                })}
              </Tr>
            </Thead>
            <Tbody>
              {requests.map((eachRequest, index) => {
                return (
                  <Tr key={index}>
                    <Td>
                      <span className="request-table-values">{eachRequest.specialization}</span>
                    </Td>
                    <Td>
                      <span className="request-table-values">{eachRequest.startTime}</span>
                    </Td>
                    <Td className="request-status">
                      <span className="request-table-values">{eachRequest.status}</span>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </Box>
      </Flex>
    </>
  );
}
