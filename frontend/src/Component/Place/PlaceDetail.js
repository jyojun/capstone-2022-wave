import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { PlaceItemDiv, PlacesDiv, DetailDiv } from "../../Style/PlaceCSS";
import { useParams } from "react-router-dom";
import axios from "axios";
import CommentIcon from "@mui/icons-material/Comment";
import PlaceRepleArea from "../PlaceReple/PlaceRepleArea";
import MapArea from "../Map/MapArea";

function PlaceDetail() {
  const [PlaceInfo, setPlaceInfo] = useState({});
  const params = useParams();
  useEffect(() => {
    let body = {
      placeNum: params.placeNum,
    };
    axios.post("/api/place/detail", body).then((res) => {
      if (res.data.success) {
        setPlaceInfo(res.data.placeInfo);
      } else {
        alert("장소 정보를 불러오는데 실패하였습니다.");
      }
    });
  }, []);
  return (
    <DetailDiv>
      <PlaceItemDiv>
        <Card style={{}}>
          <Card.Img variant="top" src={PlaceInfo.image} />
          <Card.Body>
            <Card.Title>{PlaceInfo.name}</Card.Title>
            <Card.Text>{PlaceInfo.address}</Card.Text>
            <br></br>
            <p style={{ fontWeight: "bold" }}>Place Info</p>
            <Card.Text>{PlaceInfo.detail}</Card.Text>
            <div className="repleNum">
              <CommentIcon style={{ color: "grey", marginRight: "5px" }} />
              <p>{PlaceInfo.repleNum}</p>
            </div>
          </Card.Body>
        </Card>
        <MapArea address={PlaceInfo.address} name={PlaceInfo.name} />
        <PlaceRepleArea placeId={PlaceInfo._id} />
      </PlaceItemDiv>
    </DetailDiv>
  );
}

export default PlaceDetail;
