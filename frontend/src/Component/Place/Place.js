import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { PlaceItemDiv } from "../../Style/PlaceCSS";
import axios from "axios";
import { useParams } from "react-router-dom";
import CommentIcon from "@mui/icons-material/Comment";

function Place({ place }) {
  return (
    <PlaceItemDiv>
      <a href={`/place/${place.placeNum}`}>
        <Card>
          <Card.Img variant="top" src={place.image} />
          <Card.Body>
            <Card.Title
              style={{
                fontWeight: "bold",
              }}
            >
              {place.name}
            </Card.Title>
            <Card.Text
              style={{
                color: "grey",
                fontSize: "13px",
              }}
            >
              {place.address}
            </Card.Text>
            <div className="repleNum">
              <CommentIcon
                style={{ color: "grey", marginRight: "5px" }}
              ></CommentIcon>
              <p>{place.repleNum}</p>
            </div>
          </Card.Body>
        </Card>
      </a>
    </PlaceItemDiv>
  );
}

export default Place;
