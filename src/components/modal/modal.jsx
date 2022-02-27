import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../modal-overlay/modal-overlay";
import styles from "./modal.module.css";

const modalRoot = document.getElementById("react-modals");

function Modal({ children, header, onClose }) {
  React.useEffect(() => {
    const closeModal = (e) => {
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
      <div className={styles.modal}>
        <div className={styles.modal_header + " pt-10 pr-10 pl-10"}>
          <p className="text text_type_main-large">
            {header}
          </p>
          <CloseIcon onClick={onClose} />
        </div>
        {children}
      </div>
      <ModalOverlay onClose={onClose} />
    </>,
    modalRoot
  );
}

Modal.propTypes = {
  children: PropTypes.element,
  onClose: PropTypes.func.isRequired,
  header: PropTypes.string,
};

export default Modal;
