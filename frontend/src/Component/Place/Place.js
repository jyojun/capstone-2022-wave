import React from "react";
import { Card, Button } from "react-bootstrap";
import { PlaceItemDiv } from "../../Style/PlaceCSS";

function Place({ place }) {
  return (
    <PlaceItemDiv>
      <Card style={{}}>
        <Card.Img
          variant="top"
          src="https://pecus2022.s3.ap-northeast-2.amazonaws.com/post/1650255620484.jpeg"
        />
        <Card.Body>
          <Card.Title>{place.name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </PlaceItemDiv>
  );
}

export default Place;
