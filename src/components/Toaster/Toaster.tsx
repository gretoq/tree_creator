import React from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';

import { IToast } from '../../types';

interface Props {
  show: boolean;
  toastBody: IToast;
  onClose: () => void;
}

export const Toaster: React.FC<Props> = ({ show, toastBody, onClose }) => {
  const { danger, title, description } = toastBody;

  return (
    <ToastContainer className="p-3" position="bottom-end" style={{ zIndex: 1 }}>
      <Toast
        show={show}
        onClose={onClose}
        delay={3000}
        autohide
        bg={danger ? 'danger' : 'success'}
      >
        <Toast.Header closeButton={true}>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">{title}</strong>
        </Toast.Header>

        <Toast.Body>{description}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};
