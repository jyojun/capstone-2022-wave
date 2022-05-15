import React, { useState, useEffect } from "react";
import { Card, Carousel } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import { Avatar } from "@mui/material";

function PetList(props) {
  const [PetList, setPetList] = useState([]);

  useEffect(() => {
    let body = {
      uid: props.ProfileUser.uid,
    };
    axios.post("/api/pet/petList", body).then((res) => {
      if (res.data.success) {
        setPetList(res.data.petList);
      } else {
        alert("해당 유저의 펫 정보를 불러오는데 실패하였습니다.");
      }
    });
  }, [props.ProfileUser]);
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h3 style={{ color: "grey" }}> 마이펫 리스트</h3>
      <div
        style={{
          width: "50%",
          display: "flex",
          textDecoration: "none",
          whiteSpace: "nowrap",
          display: "flex",
          overflowX: "auto",
          "-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {PetList.map((pet, idx) => {
          return (
            <div>
              <Avatar
                key={idx}
                round={true}
                src={pet.image}
                style={{
                  border: "1px solid #c6c6c6",
                  width: "100px",
                  height: "100px",
                  marginRight: "10px",
                  cursor: "pointer",
                }}
              />
              <p
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontFamily: "roboto",
                }}
              >
                {pet.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PetList;
