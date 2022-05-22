import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { PlaceItemDiv } from "../../Style/PlaceCSS";
import axios from "axios";
import { useParams } from "react-router-dom";
import CommentIcon from "@mui/icons-material/Comment";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

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
                fontSize: "20px",
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
                  fontWeight: "bold",
                }}
              >
                {place.address.split(" ").splice(0, 2).join(" ")}
              </Card.Text>
            </Card.Title>
            <Card.Img
              className="rounded-0"
              src={place.image}
              style={{ aspectRatio: "1/1", objectFit: "cover" }}
            ></Card.Img>

            <div className="hashTag" style={{}}></div>
            <div className="repleNum" style={{ color: "#707070" }}>
              <FavoriteBorderIcon
                fontSize="small"
                style={{ marginRight: "5px" }}
              ></FavoriteBorderIcon>
              <p style={{ fontSize: "13px", marginRight: "30px" }}>
                {place.repleNum}
              </p>
              <ChatBubbleOutlineIcon
                fontSize="small"
                style={{ marginRight: "5px" }}
              ></ChatBubbleOutlineIcon>
              <p style={{ fontSize: "13px" }}>{place.repleNum}</p>
            </div>
          </Card.Body>
        </Card>
      </a>
    </PlaceItemDiv>
  );
}

export default Place;
