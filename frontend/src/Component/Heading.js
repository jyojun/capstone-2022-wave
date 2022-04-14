import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

function Heading() {
  return (
    <Navbar
      style={{
        backgroundColor: "rgb(41, 128, 185)",
      }}
      expand="lg"
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="/">Pecus</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link
              to="/"
              style={{
                color: "white",
                textDecoration: "none",
                marginRight: "10px",
              }}
            >
              Home
            </Link>
            <Link
              to="/list"
              style={{
                color: "white",
                textDecoration: "none",
                marginRight: "10px",
              }}
            >
              QnA
            </Link>
            <Link
              to="/login"
              style={{
                color: "white",
                textDecoration: "none",
                marginRight: "10px",
              }}
            >
              Login
            </Link>
            <Link
              to="/register"
              style={{ color: "white", textDecoration: "none" }}
            >
              Register
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Heading;
