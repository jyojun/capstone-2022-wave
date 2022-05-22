import React, { useState, useEffect } from "react";
import { UploadDiv, UploadForm, UploadButtonDiv } from "../../Style/UploadCSS";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ImageUpload from "./ImageUpload";

function Upload(props) {
  const [Title, setTitle] = useState("");
  const [Category, setCategory] = useState("");
  const [Content, setContent] = useState("");
  const [Image, setImage] = useState("");

  const user = useSelector((state) => state.user);
  let navigate = useNavigate();

  useEffect(() => {
    if (!user.accessToken) {
      alert("로그인한 회원만 접근할 수 있습니다.");
      navigate("/login");
    }
  });

  useEffect(() => {
    console.log(Category);
  }, [Category]);
  const onSubmit = (e) => {
    e.preventDefault();
    if (Title === "" || Content === "") {
      return alert("모든 항목을 채워주세요!");
    }

    let body = {
      title: Title,
      category: Category,
      content: Content,
      image: Image,
      uid: user.uid,
    };

    axios
      .post("/api/post/submit", body)
      .then((res) => {
        if (res.data.success) {
          alert("글 작성이 완료");
          navigate("/community");
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
        <label>카테고리</label>
        <select
          onChange={(e) => {
            setCategory(e.target.value);
            console.log(Category);
          }}
          value={Category}
        >
          <option value="" selected disabled hidden>
            선택해주세요.
          </option>
          <option value="노하우 전수">노하우 전수</option>
          <option value="정보 공유">정보 공유</option>
          <option value="고민있어요">고민있어요</option>
          <option value="우리 아이 자랑">우리 아이 자랑</option>
          <option value="집사와의 하루">집사와의 하루</option>
          <option value="산책갈래">산책갈래</option>
        </select>
        <ImageUpload setImage={setImage} />
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
