import ReactDom from "react-dom";
import React from "react";
import "./Modal.css";
function BackDrop(props) {
  return <div className="backdrop" onClick={props.onClose}></div>;
}
function ModalOverlay(props) {
  return <div className="Modal">{props.children}</div>;
}
const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <BackDrop onClose={props.onClose}></BackDrop>,
        portalElement
      )}
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </React.Fragment>
  );
};
export default Modal;
