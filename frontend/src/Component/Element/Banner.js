import React from "react";
import { BannerDiv } from "../../Style/BannerCSS.js";
import { Carousel } from "react-bootstrap";
function Banner() {
  return (
    <BannerDiv>
      <Carousel>
        <Carousel.Item interval={3000}>
          <img
            style={{
              width: 900,
              height: 600,
              objectFit: "cover",
              maxHeight: "300px",
            }}
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1621265845825-b261b2aa439f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Pecus</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            style={{
              width: 900,
              height: 600,
              objectFit: "cover",
              maxHeight: "300px",
            }}
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1548767797-d8c844163c4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Pecus</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            style={{
              width: 900,
              height: 600,
              objectFit: "cover",
              maxHeight: "300px",
            }}
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1638826595775-e2eae86cda8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3272&q=80"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Pecus</h3>
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
