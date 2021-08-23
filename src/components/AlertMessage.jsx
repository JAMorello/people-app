import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Flex,
} from "@chakra-ui/react";

const AlertMessage = () => {
  return (
    <Flex justifyContent="center" alignItems="center" h="100%">
      <Alert
        status="error"
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
          Cannot retrieve data!
        </AlertTitle>
        <AlertDescription maxWidth="sm">
          There is a problem while trying to retrieve data from the API. Our
          devs are working on it. Meanwhile, go take a cooffe.
        </AlertDescription>
      </Alert>
    </Flex>
  );
};

export default AlertMessage;
