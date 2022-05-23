import React from "react";
import { AreaFilterDiv } from "../../Style/PlaceCSS";

function AreaFilter({ setArea }) {
  return (
    <AreaFilterDiv>
      <div className="top">
        <p>AREA</p>
        <p>-</p>
      </div>
      <div className="area-names">
        <button
          onClick={(e) => {
            setArea(e.currentTarget.value);
          }}
          value={""}
          style={{ marginTop: "5px" }}
        >
          전체
        </button>
        <button
          onClick={(e) => {
            setArea(e.currentTarget.value);
          }}
          value={"서울"}
          style={{ marginTop: "5px" }}
        >
          서울
        </button>
        <button
          onClick={(e) => {
            setArea(e.currentTarget.value);
          }}
          value={"경기"}
          style={{ marginTop: "5px" }}
        >
          경기
        </button>
        <button
          onClick={(e) => {
            setArea(e.currentTarget.value);
          }}
          value={"강원"}
          style={{ marginTop: "5px" }}
        >
          강원
        </button>
        <button
          onClick={(e) => {
            setArea(e.currentTarget.value);
          }}
          value={"인천"}
          style={{ marginTop: "5px" }}
        >
          인천
        </button>
        <button
          onClick={(e) => {
            setArea(e.currentTarget.value);
          }}
          value={"부산"}
          style={{ marginTop: "5px" }}
        >
          부산
        </button>
        <button
          onClick={(e) => {
            setArea(e.currentTarget.value);
          }}
          value={"제주"}
          style={{ marginTop: "5px" }}
        >
          제주
        </button>
        <button
          onClick={(e) => {
            setArea(e.currentTarget.value);
          }}
          value={"충청"}
          style={{ marginTop: "5px" }}
        >
          충청
        </button>
        <button
          onClick={(e) => {
            setArea(e.currentTarget.value);
          }}
          value={"경상"}
          style={{ marginTop: "5px" }}
        >
          경상
        </button>
        <button
          onClick={(e) => {
            setArea(e.currentTarget.value);
          }}
          value={"전라"}
          style={{ marginTop: "5px" }}
        >
          전라
        </button>
      </div>
    </AreaFilterDiv>
  );
}

export default AreaFilter;
