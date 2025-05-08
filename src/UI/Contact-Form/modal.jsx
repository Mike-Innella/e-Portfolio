import React from "react";
import "../../styles/components/ContactModal/modal.css";
import OrbitRings from "../Animations/OrbitRings";
import Pulse from "../Animations/Pulse";

const Modal = ({ type, message, onClose }) => {
  return (
    <div className={`modal modal--${type}`}>
      <div
        className="modal__overlay"
        onClick={type !== "loading" ? onClose : null}
      />
      <div className="modal__content">
        <span
          className="modal__close"
          onClick={type !== "loading" ? onClose : null}
        >
          &times;
        </span>
        {type === "loading" && (
          <div className="modal__load--content">
            <Pulse />
            <OrbitRings />
          </div>
        )}

        <p className="modal__message">{message}</p>
      </div>
    </div>
  );
};

export default Modal;
