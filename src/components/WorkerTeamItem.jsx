import { Box, Flex, VStack, Avatar, Badge, Heading } from "@chakra-ui/react";
import TeamButton from "./TeamButton";

const WorkerTeamItem = ({ worker, addTeam, removeTeam }) => {
  return (
    <Box
      w="50vw"
      p={2}
      mb={3}
      borderWidth="3px"
      borderColor="gray.300"
      borderRadius="lg"
      bg="gray.200"
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Avatar
          size="lg"
          css={{
            border: `3px solid ${worker.color}`,
          }}
          src={worker.personal.avatar}
        />
        <VStack w="50%">
          <Heading size="md" fontWeight={500}>
            {worker.personal.first_name} {worker.personal.last_name}
          </Heading>
          <Flex
            p={2}
            flexWrap="wrap"
            justifyContent="space-evenly"
            alignItems="center"
          >
            {worker.team.skill.map((skill) => {
              return (
                <Badge colorScheme="purple" key={skill}>
                  {skill}
                </Badge>
              );
            })}
          </Flex>
        </VStack>
        <Heading>{worker.team.effectivity}%</Heading>
        <Box>
          <TeamButton
            workerId={worker.id}
            addTeam={addTeam}
            removeTeam={removeTeam}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default WorkerTeamItem;
