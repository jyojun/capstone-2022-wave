import React from "react";
import { Link } from "react-router-dom";

function Care() {
  return (
    <div style={{ marginTop: "5rem" }}>
      <Link to="/careUpload">글쓰기</Link>
    </div>
  );
}

export default Care;
