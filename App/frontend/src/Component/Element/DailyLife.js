import React, { useEffect, useState } from "react";
import { Grid, Button, Avatar } from "@mui/material";
import axios from "axios";
import { DailyLifeDiv } from "../../Style/HomeCSS";
import { useNavigate } from "react-router-dom";
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
      <h3>집사님들과의 일상</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {Daily.map((item, idx) => {
          return (
            <div
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
                  style={{ marginRight: "1rem" }}
                  src={item.author.photoURL}
                />
                <p>{item.author.displayName}</p>
              </div>
              <img
                style={{ width: "20rem", aspectRatio: "1/1" }}
                src={item.image}
              ></img>
              <div>
                <p>{item.title}</p>
                <p>{item.content}</p>
              </div>
            </div>
          );
        })}
      </div>

      <Button
        onClick={(e) => {
          navigate("/community");
        }}
      >
        View More
      </Button>
    </DailyLifeDiv>
  );
}

export default DailyLife;
