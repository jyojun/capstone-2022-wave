import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { PlaceItemDiv } from "../../Style/PlaceCSS";
import axios from "axios";
import { useParams } from "react-router-dom";

function Place({ place }) {
  return (
    <PlaceItemDiv>
      <Card style={{}}>
        <Card.Img variant="top" src={place.image} />
        <Card.Body>
          <Card.Title>{place.name}</Card.Title>
          <Card.Text>{place.address}</Card.Text>
          <a href={`/place/${place.placeNum}`}>
            <Button variant="primary">Detail</Button>
          </a>
        </Card.Body>
      </Card>
    </PlaceItemDiv>
  );
}

export default Place;
