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
            // border: "1.5px solid rgba(77,170,195)",
            border: "1px solid #999999",
            borderRadius: "5px",
            // boxShadow: "0px 0px 3px rgba(77,170,195, 0.5)",
          }}
        >
          <Link
            to="/careUpload"
            style={{
              color: "#999999",
              fontSize: "12px",
              textDecoration: "none",
              border: "none",
              padding: "10px",
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
