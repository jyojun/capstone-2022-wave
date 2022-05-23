import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { SliderDiv } from "../../Style/HomeCSS";
import axios from "axios";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function PlaceSlick() {
  const [Places, setPlaces] = useState([]);
  const [ShowSlides, setShowSlides] = useState(4);
  const navigate = useNavigate();

  const breakpoints = {
    xs: 0,
    sm: 600,
    md: 750,
    lg: 900,
  };

  const getColumns = (width) => {
    if (width < 600) {
      return 1;
    } else if (width < 800) {
      return 2;
    } else if (width < 1000) {
      return 3;
    } else if (width < 1300) {
      return 4;
    } else {
      return 4;
    }
  };

  const [columns, setColumns] = useState(getColumns(window.innerWidth));
  const updateDimensions = () => {
    setColumns(getColumns(window.innerWidth));
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    axios.post("/api/place/homeList").then((res) => {
      if (res.data.success) {
        setPlaces(res.data.placeList);
      } else {
        alert("장소를 불러오는 데 실패하였습니다.");
      }
    });
    // console.log(Places);
  }, [Places]);
  const settings = {
    className: "center",
    dots: true,
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: columns,
    speed: 500,
  };
  return (
    <SliderDiv>
      <div className="main">
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "5rem",
          }}
        >
          <h4>이번 주말 우리집 댕댕이와 함께할 장소</h4>
          <h4 style={{ color: "#4DAAC3", marginLeft: "10px" }}>Pick</h4>
        </div>
        <Slider style={{ margin: "0 auto" }} {...settings}>
          {Places.map((place, idx) => {
            return (
              <div
                key={idx}
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)),url(${place.image})`,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    width: "15rem",
                    height: "15rem",
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)),url(${place.image})`,
                  }}
                >
                  <div
                    style={{
                      color: "white",
                      position: "absolute",
                      marginLeft: "10px",
                      fontSize: "10px",
                      bottom: "30px",
                    }}
                  >
                    <p style={{ fontSize: "13px" }}>
                      {place.address.split(" ").splice(0, 2).join(" ")}
                    </p>
                    <p style={{ fontSize: "15px", fontWeight: "bold" }}>
                      {place.name}
                    </p>

                    <Button
                      onClick={() => {
                        navigate(`/place/${place.placeNum}`);
                      }}
                      style={{
                        width: "5rem",
                        fontSize: "10px",
                        color: "white",
                        background: "#4DAAC3",
                        borderRadius: "20px",
                      }}
                    >
                      view more
                    </Button>
                  </div>
                </div>
                {/* <img
                src={place.image}
                style={{
                  width: "15rem",
                  aspectRatio: "1/1",
                  objectFit: "cover",
                }}
              ></img> */}
              </div>
            );
          })}
        </Slider>
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
            다른 장소도 궁금하다면?{" "}
            <button
              onClick={() => {
                navigate("/place");
              }}
              style={{ border: "none", background: "#4DAAC3", color: "white" }}
            >
              {<ArrowForwardIcon />}
            </button>
          </h5>
        </div>
      </div>
    </SliderDiv>
  );
}

export default PlaceSlick;
