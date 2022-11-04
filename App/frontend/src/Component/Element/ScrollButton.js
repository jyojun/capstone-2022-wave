import React, { useState } from "react";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import styled from "@emotion/styled";
const Button = styled.div`
  position: fixed;
  right: 5%;
  bottom: 15rem;
  font-size: 10px;
  color: #4daac3;
  z-index: 1;
  cursor: pointer;
  color: green;
`;

const ScrollButton = () => {
  const [visible, setVisible] = useState(true);

  const toggleVisible = () => {
    const width = window.innerWidth;
    if (width > 1000) {
      setVisible(true);
    } else if (width <= 1000) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
		in place of 'smooth' */
    });
    console.log("Clicked!");
  };

  window.addEventListener("resize", toggleVisible);

  return (
    <Button className="ScrollTop">
      <ArrowCircleUpIcon
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      />
      <p style={{ display: visible ? "inline" : "none" }}>TOP</p>
    </Button>
  );
};

export default ScrollButton;
