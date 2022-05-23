import React, { useEffect, useState } from "react";
import { Grid, Button, Avatar } from "@mui/material";
import axios from "axios";
import { DailyLifeDiv } from "../../Style/HomeCSS";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
function DailyLife() {
  const [Daily, setDaily] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.post("/api/post/daily").then((res) => {
      if (res.data.success) {
        setDaily(res.data.postList);
      }
    });
  }, [Daily]);
  return (
    <DailyLifeDiv>
      <h3 style={{ fontWeight: "normal" }}>집사님들과의 일상</h3>
      <div className="grid" style={{}}>
        {Daily.map((item, idx) => {
          return (
            <div
              key={idx}
              item
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                className="author"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Avatar
                  style={{ marginRight: "1rem", marginBottom: "1rem" }}
                  src={item.author.photoURL}
                />
                <p style={{ fontFamily: "roboto" }}>
                  {item.author.displayName}
                </p>
              </div>
              <img
                style={{
                  width: "100%",
                  aspectRatio: "1/1",
                  objectFit: "cover",
                }}
                src={item.image}
              ></img>
              <div
                style={{
                  padding: "12px",
                  border: "1px solid #707070",
                  borderTop: "none",
                  height: "auto",
                }}
              >
                <div style={{ display: "flex" }}>
                  <ChatBubbleOutlineIcon
                    fontSize="small"
                    style={{ marginRight: "5px" }}
                  ></ChatBubbleOutlineIcon>
                  <p style={{ fontSize: "13px" }}>{item.repleNum}</p>
                </div>
                <p style={{ fontSize: "13px", fontFamily: "NanumSquare_ac" }}>
                  {item.title}
                </p>
                <p
                  style={{
                    color: "#707070",
                    fontSize: "13px",
                    fontFamily: "NanumSquare_ac",
                  }}
                >
                  ...더보기
                </p>
                <p
                  style={{
                    color: "#707070",
                    fontSize: "13px",
                    fontFamily: "NanumSquare_ac",
                  }}
                >
                  {item.content}
                </p>
                <p
                  style={{
                    color: "#707070",
                    fontSize: "13px",
                    fontFamily: "NanumSquare_ac",
                  }}
                >
                  {moment(item.createdAt).format("MM월Do")}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <Button
        style={{
          marginTop: "2rem",
          marginLeft: "auto",
          color: "black",
          fontSize: "13px",
        }}
        onClick={(e) => {
          navigate("/community");
        }}
      >
        View More
      </Button>

      <div style={{ marginTop: "10rem" }}>
        <h3 style={{ textAlign: "center", fontWeight: "normal" }}>
          펫커스 인스타그램을 팔로우 하고
        </h3>
        <h3
          style={{
            textAlign: "center",
            marginTop: "2rem",
            fontWeight: "normal",
          }}
        >
          새로운 소식을 받아보세요!🥰
        </h3>
        <p
          style={{
            marginTop: "2rem",
            marginBottom: "2rem",
            color: "#707070",
            fontSize: "20px",
            fontFamily: "Roboto",
            textAlign: "center",
          }}
        >
          @ P_etcus
        </p>
      </div>
    </DailyLifeDiv>
  );
}

export default DailyLife;
