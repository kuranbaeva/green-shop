import React from 'react';
import styles from './Modal.module.scss';

export default function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>✕</button>
                {children}
            </div>
        </div>
    );
}
