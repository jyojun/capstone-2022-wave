import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { PlaceItemDiv, DetailDiv } from "../../Style/PlaceCSS";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import CommentIcon from "@mui/icons-material/Comment";
import PlaceRepleArea from "../PlaceReple/PlaceRepleArea";
import MapArea from "../Map/MapArea";

function PlaceDetail() {
  const [PlaceInfo, setPlaceInfo] = useState({});
  const params = useParams();
  const navigate = useNavigate();
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
            <div className="repleNum">
              <CommentIcon style={{ color: "grey", marginRight: "5px" }} />
              <p>{PlaceInfo.repleNum}</p>
            </div>
            <br></br>
            <p style={{ fontWeight: "bold" }}>장소 정보</p>
            <Card.Text>{PlaceInfo.detail}</Card.Text>
            <p style={{ fontWeight: "bold", marginTop: "3rem" }}>장소 지도</p>
            <MapArea address={PlaceInfo.address} name={PlaceInfo.name} />
          </Card.Body>
        </Card>
        <div className="repleNum">
          <Button
            onClick={() => {
              navigate("/place");
            }}
          >
            글목록
          </Button>
        </div>
        <PlaceRepleArea placeId={PlaceInfo._id} />
      </PlaceItemDiv>
    </DetailDiv>
  );
}

export default PlaceDetail;
