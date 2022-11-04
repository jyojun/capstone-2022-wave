import React from "react";
import { Link } from "react-router-dom";
import { PlaceCategoryDiv } from "../../Style/PlaceCategoryCSS";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
function PlaceCategory(props) {
  return (
    <PlaceCategoryDiv>
      <Navbar
        style={{
          width: "100%",
          height: "auto",
          backgroundColor: "black",
          textDecoration: "none",
          fontWeight: "bold",
          whiteSpace: "nowrap",
          display: "inline-block",
          overflowX: "auto",
        }}
      >
        <Container>
          <Nav className="me-auto">
            <Nav.Link
              style={{ color: "white", marginRight: "3rem" }}
              href="/place"
            >
              ALL
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                props.setCategory("펜션");
              }}
              style={{ color: "white", marginRight: "3rem" }}
            >
              펜션
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                props.setCategory("식당");
              }}
              style={{ color: "white", marginRight: "3rem" }}
            >
              식당
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                props.setCategory("카페");
              }}
              style={{ color: "white", marginRight: "3rem" }}
            >
              카페
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                props.setCategory("공원");
              }}
              style={{ color: "white" }}
            >
              공원
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </PlaceCategoryDiv>
  );
}

export default PlaceCategory;
