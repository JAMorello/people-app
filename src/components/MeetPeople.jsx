import { VStack, Heading } from "@chakra-ui/react";
import WorkerShortCard from "./WorkerShortCard";

const MeetPeople = ({ peopleData }) => {
  return (
    <VStack>
      <Heading p={2}>Meet our workers!</Heading>
      {peopleData.map((worker) => (
        <WorkerShortCard id={worker.id} worker={worker} />
      ))}
    </VStack>
  );
};

export default MeetPeople;
