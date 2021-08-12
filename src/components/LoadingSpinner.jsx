import { Center, Spinner } from "@chakra-ui/react";

const LoadingSpinner = () => {
  return (
    <Center w="100%" h="100vh">
      {/*Fills the whole screen (below Header)*/}
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Center>
  );
};

export default LoadingSpinner;
