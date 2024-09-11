import React, { useState } from "react";

export const ModalContext = React.createContext<{
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modalContent: React.ReactNode;
  setModalContent: React.Dispatch<React.SetStateAction<React.ReactNode>>;
}>({
  open: false,
  setOpen: () => null,
  modalContent: "",
  setModalContent: () => null,
});

interface Props {
  children: React.ReactNode;
}

function ModalProvider({ children }: Props) {
  const [open, setOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>("");

  return (
    <ModalContext.Provider
      value={{ open, setOpen, modalContent, setModalContent }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export default ModalProvider;
