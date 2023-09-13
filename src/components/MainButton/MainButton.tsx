import React from 'react';
import { Button } from 'react-bootstrap';

interface Props {
  text: string;
  handlerOnClick: () => void;
}

export const MainButton: React.FC<Props> = ({ text, handlerOnClick }) => {
  return (
    <Button variant="primary" onClick={handlerOnClick}>
      {text}
    </Button>
  );
};
