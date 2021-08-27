import { HStack, Image, Spacer } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import logo from "../img/logo.png";
import robots from "../img/robots.png";

const Header = () => {
  const history = useHistory();

  function handleClick() {
    history.push("/");
  }

  return (
    <HStack
      justify="space-between"
      onClick={handleClick}
      css={{ cursor: "pointer" }}
    >
      <Spacer />
      <Image alignSelf="center" src={logo} alt="Hard Working People" />.
      <Spacer />
      <Image src={robots} />
    </HStack>
  );
};

export default Header;
