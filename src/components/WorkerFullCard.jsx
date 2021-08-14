import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  VStack,
  Heading,
  Text,
  Avatar,
} from "@chakra-ui/react";

const WorkerFullCard = ({ worker, isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <Heading size="md" fontWeight={500}>
            {worker.personal.first_name} {worker.personal.last_name}
          </Heading>
          <Avatar
            size="xl"
            css={{
              border: `3px solid ${worker.color}`,
            }}
            src={worker.personal.avatar}
          />
          <Text color="gray.500">{worker.work.job_title}</Text>
          <Text textAlign="center">"{worker.personal.catch_phrase}"</Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default WorkerFullCard;
