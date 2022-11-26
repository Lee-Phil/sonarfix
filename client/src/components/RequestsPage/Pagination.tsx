import { Button, Flex, HStack } from "@chakra-ui/react";

export default function Pagination({ totalPages, setCurrPage }) {
  totalPages = 1;
  return (
    <>
      <Flex justifyContent={"center"}>
        <HStack justifyContent={"space-around"}>
          {[...Array(totalPages)].map((e, index) => {
            return (
              <Button variant="ghost" onClick={() => setCurrPage(index + 1)}>
                {index + 1}
              </Button>
            );
          })}
        </HStack>
      </Flex>
    </>
  );
}
