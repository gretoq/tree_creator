import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../logo.svg';
import { Paths } from '../../types/routes';

export const Navigation = () => {
  const { pathname } = useLocation();

  return (
    <Navbar collapseOnSelect expand="sm" variant="light">
      <Navbar.Brand>
        <img src={logo} className="App-logo" alt="logo" />
        <Link className="text-decoration-none" to={Paths.HOME}>
          <span className="h3 text-success link-secondary">Tree Creator</span>
        </Link>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav variant="underline" className="mr-auto">
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
      </Navbar.Collapse>
    </Navbar>
  );
};
