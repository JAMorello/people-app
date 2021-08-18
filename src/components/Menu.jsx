import { useState } from "react";
import { VStack, Divider, Button } from "@chakra-ui/react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { RiTeamFill } from "react-icons/ri";

const Menu = () => {
  const [currentPage, setCurrentPage] = useState("meet");

  return (
    <VStack
      borderWidth="2px"
      borderColor="gray.400"
      borderRadius="lg"
      bg="gray.100"
      h="80vh"
      p={4}
    >
      <Button
        w="full"
        leftIcon={<BsFillPersonLinesFill />}
        colorScheme={currentPage === "meet" ? "orange" : "teal"}
        isActive={currentPage === "meet"}
        variant="outline"
      >
        Meet our workers
      </Button>
      <Divider />
      <Button
        w="full"
        leftIcon={<RiTeamFill />}
        colorScheme={currentPage === "team" ? "orange" : "teal"}
        isActive={currentPage === "team"}
        variant="outline"
      >
        Ensemble a team
      </Button>
    </VStack>
  );
};

export default Menu;
