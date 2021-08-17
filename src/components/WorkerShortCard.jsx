import { VStack, Heading, Text, Avatar } from "@chakra-ui/react";

const WorkerShortCard = ({ worker }) => {
  return (
    <VStack
      p={4}
      borderWidth="1px"
      borderColor="gray.200"
      borderRadius="lg"
      bg="white"
      h={"12.5rem"}
      minW={"15rem"}
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
    </VStack>
  );
};

export default WorkerShortCard;
