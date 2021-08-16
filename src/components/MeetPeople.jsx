import { useState } from "react";
import { VStack, HStack, Heading } from "@chakra-ui/react";
import EmptyCard from "./EmptyCard";
import CarouselButton from "./CarouselButton";
import WorkerShortCard from "./WorkerShortCard";
import WorkerNormalCard from "./WorkerNormalCard";

const MeetPeople = ({ peopleData }) => {
  const [leftCard, setLeftCard] = useState(-1);
  const [centerCard, setCenterCard] = useState(0);
  const [rightCard, setRightCard] = useState(1);

  const handleGoLeft = () => {
    if (leftCard !== -1) {
      setLeftCard(leftCard - 1);
      setCenterCard(centerCard - 1);
      setRightCard(rightCard - 1);
    }
  };

  const handleGoRight = () => {
    if (rightCard < peopleData.length) {
      setLeftCard(leftCard + 1);
      setCenterCard(centerCard + 1);
      setRightCard(rightCard + 1);
    }
  };

  return (
    <VStack>
      <Heading p={2}>Meet our workers!</Heading>
      <HStack>
        {leftCard === -1 ? (
          <EmptyCard />
        ) : (
          <WorkerShortCard worker={peopleData[leftCard]} />
        )}
        <CarouselButton orientation="left" handleClick={handleGoLeft} />
        <WorkerNormalCard worker={peopleData[centerCard]} />
        <CarouselButton orientation="right" handleClick={handleGoRight} />
        {rightCard === peopleData.length ? (
          <EmptyCard />
        ) : (
          <WorkerShortCard worker={peopleData[rightCard]} />
        )}
      </HStack>
    </VStack>
  );
};

export default MeetPeople;
