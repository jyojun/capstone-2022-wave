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
        <Card
          style={{
            border: "none",
          }}
        >
          <Card.Body>
            <Card.Title
              style={{
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              {place.name}
              <Card.Text
                style={{
                  marginTop: "5px",
                  color: "grey",
                  fontSize: "13px",
                }}
              >
                {place.address.split(" ").splice(0, 2).join(" ")}
              </Card.Text>
            </Card.Title>
            <Card.Img
              src={place.image}
              style={{ aspectRatio: "1/1", objectFit: "cover" }}
            ></Card.Img>
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
