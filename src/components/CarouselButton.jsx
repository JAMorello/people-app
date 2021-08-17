import { IconButton } from "@chakra-ui/react";
import { BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";

const CarouselButton = ({ orientation, end, handleClick }) => {
  if (orientation === "left") {
    return (
      <IconButton
        colorScheme={!end ? "gray" : "green"}
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
        colorScheme={!end ? "gray" : "green"}
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
