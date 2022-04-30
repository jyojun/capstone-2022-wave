import React, { useState, useEffect } from "react";
import { Card, Carousel } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";

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
      <div style={{ width: "50%" }}>
        {PetList.map((pet, idx) => {
          return (
            <Card key={idx} style={{ display: "flex", flexDirection: "row" }}>
              <Card.Img
                style={{ width: "50%" }}
                variant="top"
                src={pet.image}
              />
              <Card.Body>
                <Card.Title
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  {pet.name}
                  {pet.sex === "male" ? <MaleIcon /> : <FemaleIcon />}
                </Card.Title>
                <Card.Text
                  style={{
                    color: "grey",
                    fontSize: "13px",
                  }}
                >
                  {pet.type}
                </Card.Text>
                <Card.Text>{pet.birthday}</Card.Text>
                <Card.Text>몸무게 : {pet.weight}kg</Card.Text>
                <Card.Text>
                  중성화 여부 : {pet.neutrality ? "o" : "x"}
                </Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default PetList;
