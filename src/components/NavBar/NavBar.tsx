import React from 'react';
import { Nav } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

import { Paths } from '../../types/routes';

export const NavBar = () => {
  const { pathname } = useLocation();

  return (
    <Nav variant="underline">
      <Nav.Item>
        <Nav.Link active={pathname === Paths.HOME} href={Paths.HOME}>
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link disabled>Here</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link disabled>Can be</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link disabled>Another</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link disabled>Links</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};
