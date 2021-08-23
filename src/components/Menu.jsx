import { useState } from "react";
import { VStack, Divider } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { RiTeamFill } from "react-icons/ri";
import MenuButton from "./MenuButton";

const Menu = () => {
  const [currentPage, setCurrentPage] = useState("home");
  let history = useHistory();

  function handleClick(pageString) {
    setCurrentPage(pageString);
    history.push(`/${pageString}`);
  }

  return (
    <VStack
      borderWidth="2px"
      borderColor="gray.400"
      borderRadius="lg"
      bg="gray.50"
      h="80vh"
      p={4}
    >
      <MenuButton
        text="Meet our workers"
        icon={<BsFillPersonLinesFill />}
        page="meet-people"
        currentPage={currentPage}
        onClick={handleClick}
      />
      <Divider />
      <MenuButton
        text="Ensemble a team"
        icon={<RiTeamFill />}
        page="ensemble-team"
        currentPage={currentPage}
        onClick={handleClick}
      />
    </VStack>
  );
};

export default Menu;
