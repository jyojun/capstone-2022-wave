import React from "react";
import { BannerDiv } from "../../Style/HomeCSS.js";
import { Carousel } from "react-bootstrap";
import img1 from "./BannerImg/배너 사진1.png";
import img2 from "./BannerImg/배너 사진2.png";
import img3 from "./BannerImg/배너 사진3.png";
function Banner() {
  return (
    <BannerDiv
      style={{
        marginTop: "4rem",
      }}
    >
      <Carousel>
        <Carousel.Item interval={3000}>
          <img
            style={{
              objectFit: "cover",
              maxHeight: "600px",
            }}
            className="d-block w-100"
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Petcus</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            style={{
              objectFit: "cover",
              maxHeight: "600px",
            }}
            className="d-block w-100"
            src={img2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Petcus</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            style={{
              objectFit: "cover",
              maxHeight: "600px",
            }}
            className="d-block w-100"
            src={img3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Petcus</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </BannerDiv>
  );
}

export default Banner;
