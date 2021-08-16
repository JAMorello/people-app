import { IconButton } from "@chakra-ui/react";
import { BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";

const CarouselButton = ({ orientation, handleClick }) => {
  if (orientation === "left") {
    return (
      <IconButton
        colorScheme="green"
        isRound={true}
        aria-label="Go left"
        icon={<BsCaretLeftFill />}
        onClick={handleClick}
      />
    );
  }

  if (orientation === "right") {
    return (
      <IconButton
        colorScheme="green"
        isRound={true}
        aria-label="Go right"
        icon={<BsCaretRightFill />}
        onClick={handleClick}
      />
    );
  }

  return null;
};

export default CarouselButton;
