import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import axios from "axios";
import { NewsDiv } from "../../Style/HomeCSS";
import { useNavigate } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LoadingCircle from "./LoadingCircle";

function News() {
  const [Loading, setLoading] = useState(true);
  const [Informations, setInformations] = useState([]);
  const [Knowhows, setKnowhows] = useState([]);
  const navigate = useNavigate();

  const getInformations = () => {
    axios.post("/api/post/information").then((res) => {
      if (res.data.success) {
        setInformations(res.data.postList);
        setLoading(false);
      } else {
        alert("정보공유 포스트를 불러오지 못하였습니다.");
      }
    });
  };

  const getKnowhows = () => {
    axios.post("/api/post/knowhow").then((res) => {
      if (res.data.success) {
        setKnowhows(res.data.postList);
        setLoading(false);
      } else {
        alert("정보공유 포스트를 불러오지 못하였습니다.");
      }
    });
  };
  useEffect(() => {
    getInformations();
    getKnowhows();
  }, [Informations, Knowhows]);
  return (
    <NewsDiv>
      <div className="main">
        <h3
          style={{
            fontSize: "25px",
            fontWeight: "bold",
            marginLeft: "auto",
            marginBottom: "2rem",
          }}
        >
          펫커스 최근소식
        </h3>
        {!Loading ? (
          <div className="grid">
            {Informations.map((item, idx) => {
              return (
                <div key={idx}>
                  <img
                    style={{
                      width: "100%",
                      aspectRatio: "1/1",
                      objectFit: "cover",
                    }}
                    src={item.image}
                  ></img>
                  <div style={{ marginTop: "1rem" }}>
                    <p
                      style={{
                        fontSize: "13px",
                        color: "#4DAAC3",
                        fontFamily: "roboto",
                      }}
                    >
                      {item.category}
                    </p>
                    <p style={{ fontSize: "15px", fontWeight: "bold" }}>
                      {item.title}
                    </p>
                    <p style={{ fontSize: "13px", color: "#707070" }}>
                      {item.author.displayName}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <LoadingCircle />
        )}
        {!Loading ? (
          <div className="grid">
            {Knowhows.map((item, idx) => {
              return (
                <div key={idx}>
                  <img
                    style={{
                      width: "100%",
                      aspectRatio: "1/1",
                      objectFit: "cover",
                    }}
                    src={item.image}
                  ></img>
                  <div style={{ marginTop: "1rem" }}>
                    <p
                      style={{
                        fontSize: "13px",
                        color: "#4DAAC3",
                        fontFamily: "roboto",
                      }}
                    >
                      {item.category}
                    </p>
                    <p style={{ fontSize: "15px", fontWeight: "bold" }}>
                      {item.title}
                    </p>
                    <p style={{ fontSize: "13px", color: "#707070" }}>
                      {item.author.displayName}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <LoadingCircle />
        )}

        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "5rem",
            marginTop: "5rem",
          }}
        >
          <h5>
            펫커스 소식 더 보러가기{" "}
            <button
              onClick={() => {
                navigate("/community");
              }}
              style={{ border: "none", background: "#4DAAC3", color: "white" }}
            >
              {<ArrowForwardIcon />}
            </button>
          </h5>
        </div>
      </div>
    </NewsDiv>
  );
}

export default News;
