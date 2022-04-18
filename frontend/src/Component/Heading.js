import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import firebase from "../firebase.js";
import mainLogo from "../pecus_logo.png";

function Heading() {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const LogoutHandler = () => {
    firebase.auth().signOut();
    navigate("/");
  };

  return (
    <Navbar
      style={{
        backgroundColor: "white",
        boxShadow: "1px 1px 10px 1px rgba(200, 200, 200)",
      }}
      expand="lg"
      variant="dark"
    >
      <Container>
        <Navbar.Brand>
          <a href="/">
            <img
              src={mainLogo}
              width="100"
              height="30"
              className="d-inline-block align-top"
              style={{
                backgroundColor: "white",
              }}
              alt=""
            />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{
            backgroundColor: "rgb(50, 230, 230)",
          }}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link
              to="/"
              style={{
                color: "black",
                textDecoration: "none",
                marginRight: "10px",
                fontWeight: "bold",
              }}
            >
              Home
            </Link>
            <Link
              to="/care"
              style={{
                color: "black",
                textDecoration: "none",
                marginRight: "10px",
                fontWeight: "bold",
              }}
            >
              Pet Care
            </Link>
            <Link
              to="/place"
              style={{
                color: "black",
                textDecoration: "none",
                marginRight: "10px",
                fontWeight: "bold",
              }}
            >
              Pet Place
            </Link>
            <Link
              to="/community"
              style={{
                color: "black",
                textDecoration: "none",
                marginRight: "10px",
                fontWeight: "bold",
              }}
            >
              Community
            </Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            {user.accessToken === "" ? (
              <>
                <Link
                  to="/login"
                  style={{
                    color: "black",
                    textDecoration: "none",
                    marginRight: "10px",
                    fontWeight: "bold",
                  }}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  style={{
                    color: "black",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  Register
                </Link>
              </>
            ) : (
              <>
                <Link
                  to={`/mypage/${user.displayName}`}
                  style={{
                    color: "black",
                    textDecoration: "none",
                    fontWeight: "bold",
                    marginRight: "10px",
                  }}
                >
                  My Page
                </Link>
                <Navbar.Text
                  style={{
                    color: "black",
                    textDecoration: "none",
                    marginRight: "10px",
                    cursor: "pointer",
                    paddingTop: "0px",
                    paddingBottom: "0px",
                    fontWeight: "bold",
                  }}
                  onClick={() => LogoutHandler()}
                >
                  Logout
                </Navbar.Text>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Heading;
