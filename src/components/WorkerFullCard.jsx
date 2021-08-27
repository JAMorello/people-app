import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Flex,
  HStack,
  Center,
  Box,
  Heading,
  Text,
  Avatar,
  Badge,
  Divider,
} from "@chakra-ui/react";
import { FiMail } from "react-icons/fi";
import { GrMapLocation } from "react-icons/gr";
import { GiShower, GiMedicines, GiHumanTarget } from "react-icons/gi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdPets } from "react-icons/md";

const WorkerFullCard = ({ worker, isOpen, onClose }) => {
  const personalData = worker.personal;
  const workData = worker.work;
  const flavorData = worker.flavor;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />

        <ModalBody p={7}>
          <Flex direction="column">
            <HStack mb={5}>
              <Heading as="u" size="md" fontWeight={500}>
                {personalData.first_name} {personalData.last_name}
              </Heading>
              <Badge colorScheme="orange">{personalData.gender}</Badge>
            </HStack>

            <Flex mb={5} justify="space-around">
              <Avatar
                size="2xl"
                mt={1}
                css={{
                  border: `3px solid ${worker.color}`,
                }}
                src={personalData.avatar}
              />

              <Flex direction="column">
                <Box bg="gray.900" mb={2} p={2} borderRadius="lg">
                  <Heading size="sm" color="white" textAlign="center">
                    {workData.job_title}
                  </Heading>
                </Box>
                <HStack>
                  <GrMapLocation />
                  <Text>
                    {workData.city}, {workData.country}
                  </Text>
                </HStack>
                <Text>Project: "{workData.software}"</Text>
                <Text>Hired on: {workData.since_date}</Text>
                <HStack>
                  <FiMail />
                  <Text>{workData.email}</Text>
                </HStack>
              </Flex>
            </Flex>

            <Divider mb={4} />

            <Flex direction="column">
              <Box bg="#65BB69" mb={4} p={2} borderRadius="lg">
                <Heading size="sm" color="white" textAlign="center">
                  Information of interest
                </Heading>
              </Box>

              <Flex justify="space-around">
                <Flex direction="column" minW="40%" maxW="40%">
                  <HStack>
                    <GiShower />
                    <Text>Shower freq.: {flavorData.shower_freq}</Text>
                  </HStack>
                  <HStack>
                    <RiMoneyDollarCircleLine />
                    <Text>Savings: {flavorData.savings_acc}</Text>
                  </HStack>
                  <HStack>
                    <IoFastFoodOutline />
                    <Text>Favorite Food: {flavorData.likes_to_eat}</Text>
                  </HStack>
                </Flex>

                <Center height="5rem">
                  <Divider orientation="vertical" />
                </Center>

                <Flex direction="column">
                  <HStack>
                    <GiMedicines />
                    <Text noOfLines={1}>
                      Adicted to: {flavorData.has_adiction}
                    </Text>
                  </HStack>
                  <HStack>
                    <MdPets />
                    <Text>Pet: {flavorData.has_pet}</Text>
                  </HStack>
                  <HStack>
                    <GiHumanTarget />
                    <Text>Humans killed: {flavorData.humans_killed}</Text>
                  </HStack>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default WorkerFullCard;
