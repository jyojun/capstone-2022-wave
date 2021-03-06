import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import firebase from "../firebase.js";
import mainLogo from "../pecus_logo.png";
import Avatar from "react-avatar";
import "@fontsource/roboto";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

function Heading() {
  const [Hamburger, setHamburger] = useState(true);

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
        boxShadow: "1px 1px 10px 1px #DBDBDB",
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        zIndex: "10",
        fontFamily: "Roboto",
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
              height="26"
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
            color: "grey",
          }}
          onClick={(e) => {
            setHamburger(!Hamburger);
          }}
        >
          {Hamburger ? <MenuIcon /> : <MenuOpenIcon />}
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link
              to="/"
              style={{
                color: "black",
                textDecoration: "none",
                marginLeft: "15px",
                marginRight: "10px",
                fontWeight: "bold",
                fontSize: "13px",
              }}
            >
              HOME
            </Link>
            <Link
              to="/care"
              style={{
                color: "black",
                textDecoration: "none",
                marginLeft: "15px",
                marginRight: "10px",
                fontWeight: "bold",
                fontSize: "13px",
              }}
            >
              PET CARE
            </Link>
            <Link
              to="/place"
              style={{
                color: "black",
                textDecoration: "none",
                marginLeft: "15px",
                marginRight: "10px",
                fontWeight: "bold",
                fontSize: "13px",
              }}
            >
              PET PLACE
            </Link>
            <Link
              to="/community"
              style={{
                color: "black",
                textDecoration: "none",
                marginLeft: "15px",
                marginRight: "10px",
                fontWeight: "bold",
                fontSize: "13px",
              }}
            >
              COMMUNITY
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
                    marginLeft: "15px",
                    marginRight: "10px",
                    fontWeight: "bold",
                    fontSize: "13px",
                  }}
                >
                  LOGIN
                </Link>
                <Link
                  to="/register"
                  style={{
                    color: "black",
                    textDecoration: "none",
                    marginLeft: "15px",
                    fontWeight: "bold",
                    fontSize: "13px",
                  }}
                >
                  REGISTER
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
                    marginLeft: "15px",
                    marginRight: "10px",
                    fontSize: "13px",
                  }}
                >
                  MY PAGE
                </Link>
                <Navbar.Text
                  style={{
                    color: "black",
                    textDecoration: "none",
                    marginLeft: "15px",
                    marginRight: "1px",
                    cursor: "pointer",
                    paddingTop: "0px",
                    paddingBottom: "0px",
                    fontWeight: "bold",
                    fontSize: "13px",
                  }}
                  onClick={() => LogoutHandler()}
                >
                  LOGOUT
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
