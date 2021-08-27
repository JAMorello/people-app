import { Alert, AlertIcon, AlertTitle, Flex } from "@chakra-ui/react";

const Page404 = () => {
  return (
    <Flex justifyContent="center" alignItems="center" h="100%">
      <Alert
        status="warning"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="200px"
        w="50%"
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="lg">
          Error 404: page not found!
        </AlertTitle>
      </Alert>
    </Flex>
  );
};

export default Page404;
