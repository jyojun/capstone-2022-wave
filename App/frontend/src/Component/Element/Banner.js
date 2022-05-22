import React, { useEffect, useState } from "react";
import { BannerDiv } from "../../Style/HomeCSS.js";
import { Carousel } from "react-bootstrap";
import axios from "axios";
function Banner() {
  const [TopCafe, setTopCafe] = useState({});
  const [TopPension, setTopPension] = useState({});
  useEffect(() => {
    let body = {
      category: "카페",
      area: "경기",
      sort: "후기순",
      searchTerm: "",
    };
    axios.post("/api/place/list", body).then((res) => {
      if (res.data.success) {
        setTopCafe(res.data.placeList[0]);
      } else {
        alert("장소 불러오는데 실패");
      }
    });
  }, [TopCafe]);

  useEffect(() => {
    let body = {
      category: "펜션",
      area: "경기",
      sort: "후기순",
      searchTerm: "",
    };
    axios.post("/api/place/list", body).then((res) => {
      if (res.data.success) {
        setTopPension(res.data.placeList[0]);
      } else {
        alert("장소 불러오는데 실패");
      }
    });
  }, [TopPension]);
  return (
    <BannerDiv
      style={{
        marginTop: "4rem",
      }}
    >
      <div
        style={{
          height: "100%",
          display: "flex",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          width: "100%",
        }}
      >
        <a
          href={`/place/${TopCafe.placeNum}`}
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)),url(${TopCafe.image})`,
            backgroundSize: "cover",
            textDecoration: "none",
          }}
        >
          <h1 style={{ color: "black", fontWeight: "bold" }}>
            경기도 가장 인기있는 펜션 <br />
            {TopCafe.name}
          </h1>
        </a>

        <div
          style={{
            display: "grid",
            gridTemplateRows: "1fr 1fr",
          }}
        >
          <div
            style={{
              width: "100%",
            }}
          ></div>
          <div
            style={{
              width: "100%",
              backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)),url(${TopPension.image})`,
              backgroundSize: "cover",
            }}
          ></div>
        </div>
      </div>
    </BannerDiv>
  );
}

export default Banner;
