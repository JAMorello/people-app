import { VStack, Divider } from "@chakra-ui/react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { RiTeamFill } from "react-icons/ri";
import MenuButton from "./MenuButton";

const Menu = () => {
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
        page="/meet-people"
      />
      <Divider />
      <MenuButton
        text="Ensemble a team"
        icon={<RiTeamFill />}
        page="/ensemble-team"
      />
    </VStack>
  );
};

export default Menu;
