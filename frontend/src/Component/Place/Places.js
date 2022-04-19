import React, { useState, useEffect } from "react";
import Place from "./Place";
import { PlacesDiv } from "../../Style/PlaceCSS.js";
import { BtnDiv } from "../../Style/DetailCSS";
import { Link } from "react-router-dom";
import axios from "axios";
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
      <div className="row">
        {Places.map((place, idx) => {
          return (
            <div key={idx} className="col-sm-12 col-md-6 col-lg-3">
              <Place place={place} />
            </div>
          );
        })}
      </div>
    </PlacesDiv>
  );
}

export default Places;
