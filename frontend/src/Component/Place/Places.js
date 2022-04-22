import React, { useState, useEffect } from "react";
import Place from "./Place";
import { PlacesDiv } from "../../Style/PlaceCSS.js";
import { BtnDiv } from "../../Style/DetailCSS";
import { Link } from "react-router-dom";
import axios from "axios";
import { Grid, Item } from "@mui/material";
function Places() {
  const [Places, setPlaces] = useState([]);
  useEffect(() => {
    axios.post("/api/place/list").then((res) => {
      if (res.data.success) {
        setPlaces(res.data.placeList);
      } else {
        alert("장소 정보를 불러오는데 실패하였습니다.");
      }
    });
  }, []);

  return (
    <PlacesDiv>
      <BtnDiv>
        <button
          style={{
            backgroundColor: "white",
            border: "none",
          }}
        >
          <Link
            to="/placeUpload"
            style={{
              color: "black",
              textDecoration: "none",
              border: "1px solid grey",
              borderRadius: "5px",
              padding: "5px",
            }}
            className="write"
          >
            장소등록(관리자용)
          </Link>
        </button>
      </BtnDiv>
      <Grid container spacing={1}>
        {Places.map((place, idx) => {
          return (
            <Grid key={idx} item lg={3} md={6} xs={6}>
              <Place place={place} />
            </Grid>
          );
        })}
      </Grid>
      <div
        style={{
          borderBottom: "1px solid grey",
          boxShadow: "0px -5px 5px grey",
        }}
      ></div>
    </PlacesDiv>
  );
}

export default Places;
