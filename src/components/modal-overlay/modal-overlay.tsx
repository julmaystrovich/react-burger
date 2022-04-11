import styles from './modal-overlay.module.css';
import { FC } from "react";
import { TModalOverlay } from '../../utils/types';

const ModalOverlay: FC<TModalOverlay> = ({ onClose }) => {
    return (
        <div className={styles.modal_overlay} onClick={onClose}>
        </div>
    )
}

export default ModalOverlay;