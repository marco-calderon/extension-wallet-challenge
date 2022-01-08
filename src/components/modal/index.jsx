import React from 'react';
import { PropTypes } from 'prop-types';
import styles from './index.module.css';

/**
 * Shows a modal with an overlay.
 * 
 * Clicking the overlay will try to close the modal.
 * 
 * @param {Object} props - is the props object
 * @param {Boolean} props.show - indicates if the modal will be shown or not
 * @param {Array} props.children - the children to display inside
 * @param {Functions} props.onClose - callback for close
 * @returns the rendered component.
 */
function Modal({ show, children, onClose }) {
    const className = show ? `${styles.overlay} ${styles.block}` : `${styles.overlay} ${styles.none}`;

    return (
        <div className={className} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

Modal.props = {
    show: PropTypes.bool,
    children: PropTypes.object,
    onClose: PropTypes.func,
}

Modal.defaultProps = {
    show: false,
    children: null,
    onClose: () => {},
}

export default Modal;