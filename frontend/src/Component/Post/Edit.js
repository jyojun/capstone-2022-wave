import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import { UploadDiv, UploadForm, UploadButtonDiv } from "../../Style/UploadCSS";

function Edit() {
  // edit의 detail부분 (작성 정보 불러오기)
  const [PostInfo, setPostInfo] = useState({});
  const [Flag, setFlag] = useState(false);
  const [Title, setTitle] = useState("");
  const [Content, setContent] = useState("");
  let params = useParams();
  let navigate = useNavigate();
  useEffect(() => {
    let body = {
      postNum: params.postNum, // postNum의 게시글에 접근하기 위함
    };
    axios
      .post("/api/post/detail", body)
      .then((res) => {
        if (res.data.success) {
          setPostInfo(res.data.postList);
          setFlag(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // 기존 title, content값을 저장 & 값의 변화가 생길때마다 값을 저장해줌.
  useEffect(() => {
    setTitle(PostInfo.title);
    setContent(PostInfo.content);
  }, [PostInfo]);

  // edit의 upload 부분

  const onSubmit = (e) => {
    e.preventDefault();
    if (Title === "" || Content === "") {
      return alert("모든 항목을 채워주세요!");
    }

    let body = {
      title: Title,
      content: Content,
      postNum: params.postNum,
    };

    axios
      //새로운 글 생성이 아니니 submit -> edit으로 변경
      .post("/api/post/edit", body)
      .then((res) => {
        if (res.data.success) {
          alert("글 수정이 완료");
          navigate("/list");
        } else {
          alert("글 수정 실패");
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
        <label htmlFor="">내용</label>
        <textarea
          onChange={(e) => {
            setContent(e.currentTarget.value);
          }}
          value={Content}
        />
        <UploadButtonDiv>
          <button onClick={onSubmit}>제출</button>
          <button
            className="cancel"
            onClick={(e) => {
              e.preventDefault();
              navigate(`/post/${PostInfo.postNum}`);
            }}
          >
            취소
          </button>
        </UploadButtonDiv>
      </UploadForm>
    </UploadDiv>
  );
}

export default Edit;
