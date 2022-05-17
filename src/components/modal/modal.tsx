import React, { FC } from "react";
import ReactDOM from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../modal-overlay/modal-overlay";
import styles from "./modal.module.css";
import { TModal } from "../../utils/types";

const modalRoot = document.getElementById("react-modals") as HTMLElement;

const Modal: FC<TModal> = ({ children, header, onClose }) => {
  React.useEffect(() => {
    const closeModal = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.keyCode === 27) {
        onClose();
      }
    };
    document.addEventListener("keydown", closeModal);
    return () => {
      document.removeEventListener("keydown", closeModal);
    };
  }, [onClose]);

  return ReactDOM.createPortal(
    <>
      <div className={styles.modal} data-test="modal">
        <div className={styles.modal_header + " pt-10 pr-10 pl-10"} data-test="modal-header">
          <p className="text text_type_main-large">
            {header}
          </p>
          <CloseIcon onClick={onClose} type="primary" />
        </div>
        {children}
      </div>
      <ModalOverlay onClose={onClose} />
    </>,
    modalRoot
  );
}

export default Modal;