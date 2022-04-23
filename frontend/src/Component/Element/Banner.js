import React from "react";
import { BannerDiv } from "../../Style/BannerCSS.js";
import { Carousel } from "react-bootstrap";
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
            src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3269&q=80"
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
            src="https://images.unsplash.com/photo-1536500152107-01ab1422f932?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
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
            src="https://images.unsplash.com/photo-1526346093155-a601c2cbe917?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
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
