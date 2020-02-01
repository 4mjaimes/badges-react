import React from "react";
import ReactDOM from "react-dom";

import "../assets/styles/Modal.css";

const Modal = props => {
  if (!props.isOpen) {
    return null;
  }
  return ReactDOM.createPortal(
    <div className="Modal">
      <div className="Modal__container">
        <button onClick={props.onClose} className="Modal__close-button">x</button>
        {props.children}
      </div>
    </div>,
    document.getElementById("Modal")
  );
};

export default Modal;
