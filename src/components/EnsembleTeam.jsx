import { useState } from "react";
import { VStack, Flex, Spacer } from "@chakra-ui/react";
import WorkerTeamItem from "./WorkerTeamItem";
import Team from "./Team";

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
    <>
      <Flex direction="row-reverse" mt={2}>
        <Team teamMembers={team} />
        <Spacer />
      </Flex>
      <VStack h="100%" mt={2} css={{ "overflow-y": "scroll" }}>
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
    </>
  );
};

export default EnsembleTeam;
