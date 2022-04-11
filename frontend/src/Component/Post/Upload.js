import React, { useState, useEffect } from "react";
import { UploadDiv, UploadForm, UploadButtonDiv } from "../../Style/UploadCSS";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ImageUpload from "./ImageUpload";

function Upload(props) {
  const [Title, setTitle] = useState("");
  const [Content, setContent] = useState("");
  let navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    if (Title === "" || Content === "") {
      return alert("모든 항목을 채워주세요!");
    }

    let body = {
      title: Title,
      content: Content,
    };

    axios
      .post("/api/post/submit", body)
      .then((res) => {
        if (res.data.success) {
          alert("글 작성이 완료");
          navigate("/list");
        } else {
          alert("글 작성 실패");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <UploadDiv>
      <UploadForm>
        <label htmlFor="">제목</label>
        <input
          onChange={(e) => {
            setTitle(e.currentTarget.value);
          }}
          id="title"
          type="text"
          value={Title}
        />
        <ImageUpload />
        <label htmlFor="">내용</label>
        <textarea
          onChange={(e) => {
            setContent(e.currentTarget.value);
          }}
          value={Content}
        />
        <UploadButtonDiv>
          <button onClick={onSubmit}>제출</button>
        </UploadButtonDiv>
      </UploadForm>
    </UploadDiv>
  );
}

export default Upload;
