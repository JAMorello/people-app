import {
  Flex,
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
      <Flex
        direction="column"
        justify="space-between"
        align="center"
        p={4}
        borderWidth="1px"
        borderColor="gray.200"
        borderRadius="lg"
        bg="white"
        h={"25rem"}
        minW={"15rem"}
        maxW={"15rem"}
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
      </Flex>
      <WorkerFullCard worker={worker} isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default WorkerNormalCard;
