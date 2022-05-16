import React from "react";
import { Link } from "react-router-dom";
import CarePostList from "./CarePostList";
import { CareDiv } from "../../Style/CarePostCSS";
import { BtnDiv } from "../../Style/DetailCSS";

function Care() {
  return (
    <CareDiv>
      <BtnDiv>
        <button
          style={{
            backgroundColor: "white",
            border: "none",
          }}
        >
          <Link
            to="/careUpload"
            style={{
              color: "#6E6C6C",
              fontSize: "13px",
              textDecoration: "none",
              border: "none",
            }}
            className="write"
          >
            글쓰기
          </Link>
        </button>
      </BtnDiv>

      <CarePostList />
    </CareDiv>
  );
}

export default Care;
