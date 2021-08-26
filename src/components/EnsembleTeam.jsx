import { useState } from "react";
import { VStack } from "@chakra-ui/react";
import WorkerTeamItem from "./WorkerTeamItem";

const EnsembleTeam = ({ peopleData }) => {
  const [team, setTeam] = useState([]);

  const addTeam = (id) => {
    const newMember = peopleData.filter((worker) => {
      return worker.id === id;
    });
    setTeam([...team, ...newMember]);
  };

  const removeTeam = (id) => {
    const newTeam = team.filter((member) => {
      return member.id !== id;
    });
    setTeam(newTeam);
  };

  return (
    <VStack>
      {peopleData.map((worker) => {
        return (
          <WorkerTeamItem
            key={worker.id}
            worker={worker}
            addTeam={addTeam}
            removeTeam={removeTeam}
          />
        );
      })}
    </VStack>
  );
};

export default EnsembleTeam;
