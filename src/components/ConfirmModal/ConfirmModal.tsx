import React from 'react';
import { Button, Modal } from 'react-bootstrap';

interface Props {
  open: boolean;
  title: string;
  onClose: () => void;
  onOk: () => void;
}

export const ConfirmModal: React.FC<Props> = ({
  open,
  title,
  onClose,
  onOk,
}) => (
  <Modal centered show={open} onHide={onClose} size="lg">
    <Modal.Header closeButton>
      <Modal.Title>{title}</Modal.Title>
    </Modal.Header>
    <Modal.Footer>
      <Button variant="secondary" onClick={onClose}>
        Cancel
      </Button>
      <Button variant="danger" onClick={onOk}>
        Confirm
      </Button>
    </Modal.Footer>
  </Modal>
);
