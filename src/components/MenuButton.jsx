import { Button } from "@chakra-ui/react";
import { useLocation, useHistory } from "react-router-dom";

const MenuButton = ({ text, icon, page }) => {
  let location = useLocation();
  let history = useHistory();

  function handleClick(pageString) {
    history.push(pageString);
  }

  return (
    <Button
      w="full"
      leftIcon={icon}
      colorScheme={location.pathname === page ? "orange" : "blue"}
      isActive={location.pathname === page}
      variant="outline"
      onClick={() => handleClick(page)}
    >
      {text}
    </Button>
  );
};

export default MenuButton;
