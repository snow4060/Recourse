import React from "react";
import useModal from "./hooks/useModal";
import "./styles/Modal.css";

function Modal() {
  const { modalContent, open, setOpen } = useModal();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setOpen(false);
    }
  };

  return (
    <div
      className="modalBackground"
      onClick={handleClick}
      style={{ display: open ? "flex" : "none" }}
    >
      <div className="modal">{modalContent}</div>
    </div>
  );
}

export default Modal;
