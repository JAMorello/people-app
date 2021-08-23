import { VStack } from "@chakra-ui/react";

const EnsembleTeam = ({ peopleData }) => {
  return (
    <VStack>
      {peopleData.map((worker) => {
        <li key={worker.id}>{worker.id}</li>;
      })}
    </VStack>
  );
};

export default EnsembleTeam;