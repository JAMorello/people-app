import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Flex,
} from "@chakra-ui/react";

const Home = () => {
  return (
    <Flex justifyContent="center" alignItems="center" h="100%">
      <Alert
        status="info"
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
          Welcome to our web page!
        </AlertTitle>
        <AlertDescription maxWidth="sm">
          Here you can inspect our humble and hardworking employees and ensamble
          teams to tackle your issues. Have fun!
        </AlertDescription>
      </Alert>
    </Flex>
  );
};

export default Home;
