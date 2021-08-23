import { Button } from "@chakra-ui/react";

const MenuButton = ({ text, icon, page, currentPage, onClick }) => {
  return (
    <Button
      w="full"
      leftIcon={icon}
      colorScheme={currentPage === page ? "orange" : "blue"}
      isActive={currentPage === page}
      variant="outline"
      onClick={() => onClick(page)}
    >
      {text}
    </Button>
  );
};

export default MenuButton;
