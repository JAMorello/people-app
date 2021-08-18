import { HStack, Image, Spacer } from "@chakra-ui/react";
import logo from "../img/logo.png";
import robots from "../img/robots.png";

const Header = () => {
  return (
    <HStack justify="space-between">
      <Spacer />
      <Image alignSelf="center" src={logo} alt="Hard Working People" />.
      <Spacer />
      <Image src={robots} />
    </HStack>
  );
};

export default Header;
