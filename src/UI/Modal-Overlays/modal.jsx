import React from "react";
import "../../styles/components/ContactModal/modal.css";

const Modal = ({ type, message, onClose }) => {
  return (
    <div className={`modal modal--${type}`}>
      <div className="modal__overlay" onClick={onClose}></div>
      <div className="modal__content">
        <span className="modal__close" onClick={onClose}>
          &times;
        </span>
        <p className="modal__message">{message}</p>
      </div>
    </div>
  );
};

export default Modal;
