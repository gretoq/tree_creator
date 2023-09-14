import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

interface Props {
  isOpen: boolean;
  title: string;
  label: string;
  textValue: string;

  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onOk: () => void;
  onClose: () => void;
}

export const CreateModal: React.FC<Props> = ({
  isOpen,
  title,
  label,
  textValue,
  onChange,
  onOk,
  onClose,
}) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!textValue.trim()) {
      return;
    }

    onOk();
  };

  return (
    <Modal centered show={isOpen} onHide={onClose} autoFocus size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>{label}</Form.Label>

            <Form.Control
              type="text"
              placeholder="Enter a name of root..."
              value={textValue}
              onChange={onChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>

        <Button disabled={!textValue.trim()} variant="primary" onClick={onOk}>
          Create
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
