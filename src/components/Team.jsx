import { useState, useEffect } from "react";
import {
  Box,
  VStack,
  HStack,
  Flex,
  AvatarGroup,
  Avatar,
  Heading,
  Text,
} from "@chakra-ui/react";

const Team = ({ teamMembers }) => {
  const [chaos, setChaos] = useState(0);
  const [eff, setEff] = useState(0);

  useEffect(() => {
    let chaosFactor = 0;
    for (let i = 0; i < teamMembers.length; i++) {
      chaosFactor += teamMembers[i].team.disturbance;
    }
    setChaos(chaosFactor);

    let effectivity = 0;
    for (let i = 0; i < teamMembers.length; i++) {
      effectivity += teamMembers[i].team.effectivity;
    }
    effectivity = effectivity / teamMembers.length - chaosFactor;
    setEff(Math.round(isNaN(effectivity) ? 0 : effectivity));
  }, [teamMembers]);

  return (
    <Box
      w="40vw"
      p={2}
      mb={3}
      borderWidth="3px"
      borderColor="orange.300"
      borderRadius="lg"
      bg="orange.200"
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Heading>TEAM</Heading>
        <AvatarGroup size="md" max={4}>
          {teamMembers.map((member) => {
            return (
              <Avatar
                src={member.personal.avatar}
                css={{
                  border: `3px solid ${member.color}`,
                }}
              />
            );
          })}
        </AvatarGroup>
        <HStack>
          <VStack>
            <Text color="red">Chaos</Text>
            <Heading>{chaos}</Heading>
          </VStack>
          <VStack>
            <Text color="green">Effectivity</Text>
            <Heading>{eff}</Heading>
          </VStack>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Team;
