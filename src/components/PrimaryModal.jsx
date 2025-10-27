
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader
} from "@heroui/react";
import { Button } from "./ui/button";

export default function PrimaryModal({
  isOpen,
  children,
  onOpenChange,
  showFooter = false,
  submitButtonText = "Action",
  submitButtonFunction = () => {},
  size = "md",
  title,
  ...rest
}) {
  // const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size={size}
        className="max-h-[85vh]"
        {...rest}
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold hind-siliguri-600">{title}</h3>
              </ModalHeader>
              <ModalBody className="mb-5 w-full h-full overflow-y-auto">
                {children}
              </ModalBody>
              {showFooter && (
                <ModalFooter>
                  <Button 
                    color="primary" 
                    onClick={submitButtonFunction}
                  >
                    {submitButtonText}
                  </Button>
                </ModalFooter>
              )}

            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
