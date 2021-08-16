import {
  VStack,
  Heading,
  Text,
  Avatar,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import WorkerFullCard from "./WorkerFullCard";

const WorkerNormalCard = ({ worker }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <VStack
        p={4}
        borderWidth="1px"
        borderColor="gray.200"
        borderRadius="lg"
        h={"18.75rem"}
        maxW={"16.875rem"}
        minW={"11.25rem"}
        w={"full"}
        boxShadow={"2xl"}
      >
        <Heading size="md" fontWeight={500} textAlign="center">
          {worker.personal.first_name} {worker.personal.last_name}
        </Heading>
        <Avatar
          size="xl"
          css={{
            border: `3px solid ${worker.color}`,
          }}
          src={worker.personal.avatar}
        />
        <Text color="gray.500" textAlign="center">
          {worker.work.job_title}
        </Text>
        <Text textAlign="center">"{worker.personal.catch_phrase}"</Text>
        <Button
          w="full"
          colorScheme="green"
          _hover={{
            transform: "translateY(-2px)",
            boxShadow: "lg",
          }}
          onClick={onOpen}
        >
          Know more!
        </Button>
      </VStack>
      <WorkerFullCard worker={worker} isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default WorkerNormalCard;
