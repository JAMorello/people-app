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
        <VStack w="25%">
          <Heading size="md" fontWeight={500}>
            {worker.personal.first_name} {worker.personal.last_name}
          </Heading>
          <Avatar
            size="lg"
            css={{
              border: `3px solid ${worker.color}`,
            }}
            src={worker.personal.avatar}
          />
        </VStack>
        <VStack w="50%">
          <Box bg="gray.900" mb={2} p={2} borderRadius="lg">
            <Heading size="sm" color="white" textAlign="center">
              {worker.work.job_title}
            </Heading>
          </Box>
          <Flex
            p={1}
            flexWrap="wrap"
            justifyContent="space-evenly"
            alignItems="center"
          >
            {worker.team.skill.map((skill) => {
              return (
                <Badge
                  m="3px"
                  colorScheme="purple"
                  variant="outline"
                  key={skill}
                >
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
