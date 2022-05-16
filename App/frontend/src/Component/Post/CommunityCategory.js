import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { CommunityCategoryDiv } from "../../Style/CommunityCSS";
function CommunityCategory(props) {
  return (
    <CommunityCategoryDiv>
      <Navbar
        className="navbar"
        style={{
          width: "100%",
          backgroundColor: "black",
          textDecoration: "none",
          whiteSpace: "nowrap",
          display: "inline-block",
          overflowX: "auto",
          "-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <Container>
          <Nav className="me-auto">
            <Nav.Link
              style={{ color: "white", marginRight: "3rem" }}
              href="/community"
            >
              전체
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                props.setCategory("노하우 전수");
              }}
              style={{ color: "white", marginRight: "3rem" }}
            >
              노하우 전수
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                props.setCategory("정보공유");
              }}
              style={{ color: "white", marginRight: "3rem" }}
            >
              정보공유
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                props.setCategory("고민있어요");
              }}
              style={{ color: "white", marginRight: "3rem" }}
            >
              고민있어요
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                props.setCategory("찾아주세요");
              }}
              style={{ color: "white", marginRight: "3rem" }}
            >
              찾아주세요
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                props.setCategory("우리 아이 자랑");
              }}
              style={{ color: "white", marginRight: "3rem" }}
            >
              우리 아이 자랑
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                props.setCategory("집사와의 하루");
              }}
              style={{ color: "white", marginRight: "3rem" }}
            >
              집사와의 하루
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                props.setCategory("산책갈래");
              }}
              style={{ color: "white", marginRight: "3rem" }}
            >
              산책갈래
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </CommunityCategoryDiv>
  );
}

export default CommunityCategory;
