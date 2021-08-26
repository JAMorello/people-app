import { useState } from "react";
import { Button } from "@chakra-ui/react";

const TeamButton = ({ workerId, addTeam, removeTeam }) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    active ? removeTeam(workerId) : addTeam(workerId);
    setActive(!active);
  };

  return (
    <Button
      w="2rem"
      colorScheme={active ? "red" : "green"}
      onClick={handleClick}
    >
      {active ? "Remove" : "Add"}
    </Button>
  );
};

export default TeamButton;
