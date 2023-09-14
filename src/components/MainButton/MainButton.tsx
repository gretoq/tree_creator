import React from 'react';
import { Button } from 'react-bootstrap';

interface Props {
  text: string;
  danger?: boolean;
  handlerOnClick: () => void;
}

export const MainButton: React.FC<Props> = ({
  text,
  danger,
  handlerOnClick,
}) => (
  <Button variant={danger ? 'danger' : 'primary'} onClick={handlerOnClick}>
    {text}
  </Button>
);
