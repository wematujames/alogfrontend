import React from "react";
import {
    ModalOverlay, Button, Modal,
    ModalContent, ModalHeader,
    ModalCloseButton, ModalBody, Text,
    ModalFooter, useDisclosure
} from "@chakra-ui/react";

function EditPost() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <>
        <Button onClick={() => {onOpen()}}>
          Edit
        </Button>
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay
        bg='blackAlpha.300'
        backdropFilter='blur(10px) hue-rotate(90deg)'
        />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                    <Text>Custom backdrop filters!</Text>
                    </ModalBody>
                    <ModalFooter>
                    <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
        </Modal>
      </>
    )
}
  
export default EditPost;