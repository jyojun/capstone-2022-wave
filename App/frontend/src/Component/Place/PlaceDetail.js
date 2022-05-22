import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { PlaceItemDiv, DetailDiv } from "../../Style/PlaceCSS";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
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
      <Card style={{ border: "none", marginTop: "10px" }}>
        <div className="detail-top" style={{ display: "flex" }}>
          <Card.Img className="rounded-0" src={PlaceInfo.image} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: "30px",
            }}
          >
            <Card.Title style={{ fontWeight: "bold" }}>
              {PlaceInfo.name}
            </Card.Title>
            <Card.Text style={{ color: "grey" }}>{PlaceInfo.address}</Card.Text>
          </div>
          {/* <div className="favoritNum" style={{width:"30%", float:"left"}}>
              <FavoriteBorderIcon fontSize="small"
                  style={{ color: "#707070", marginRight: "5px",  }}
                >
              </FavoriteBorderIcon>
          </div>
          <div className="repleNum" style={{width:"60%", float:"right"}}>
              <ChatBubbleOutlineIcon fontSize="small"
                    style={{ color: "#707070", marginRight: "5px" }}
              ></ChatBubbleOutlineIcon>
              {PlaceInfo.repleNum}
          </div> */}
        </div>

        <Card.Body>
          {/* <div className="repleNum" >
            <ChatBubbleOutlineIcon fontSize="small"
                  style={{ color: "#707070", marginRight: "5px" }}
            ></ChatBubbleOutlineIcon>
            <p style={{color: "#707070", fontSize:"13px",}}>{PlaceInfo.repleNum}</p>
          </div> */}
          <br></br>
          <p style={{ marginTop: "20px", fontWeight: "bold" }}>PLACE INFO</p>
          <Card.Text style={{ whiteSpace: "pre-wrap" }}>
            {PlaceInfo.detail}
          </Card.Text>
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
    </DetailDiv>
  );
}

export default PlaceDetail;
