import React from 'react';
import { Modal } from 'react-bootstrap';

const ModalMessage = (props) => {
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.body}</Modal.Body>
    </>
  );
};

export default ModalMessage;
