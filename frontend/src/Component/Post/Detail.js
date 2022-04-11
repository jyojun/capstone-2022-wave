import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { PostDiv, SpinnerDiv, Post, BtnDiv } from "../../Style/DetailCSS";
import { Spinner } from "react-bootstrap"; // 로딩중 화면 spinner
function Detail() {
  const [PostInfo, setPostInfo] = useState({});
  const [Flag, setFlag] = useState(false);
  let params = useParams();
  let navigate = useNavigate();
  useEffect(() => {
    let body = {
      postNum: params.postNum,
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
  useEffect(() => {
    console.log(PostInfo);
  }, [PostInfo]);

  const DeleteHandler = () => {
    if (window.confirm("정말로 삭제하시겠습니까?")) {
      let body = {
        postNum: params.postNum,
      };
      axios
        .post("/api/post/delete", body)
        .then((res) => {
          if (res.data.success) {
            alert("게시글이 삭제되었습니다.");
            navigate("/list");
          }
        })
        .catch((err) => {
          alert("게시글 삭제에 실패하였습니다.");
        });
    }
  };
  return (
    <PostDiv>
      {Flag ? (
        <>
          <Post>
            <h1>{PostInfo.title}</h1>
            <p>{PostInfo.content}</p>
          </Post>
          <BtnDiv>
            <Link to={`/edit/${PostInfo.postNum}`}>
              <button className="edit">수정</button>
            </Link>
            <button className="delete" onClick={DeleteHandler}>
              삭제
            </button>
          </BtnDiv>
        </>
      ) : (
        <SpinnerDiv>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </SpinnerDiv>
      )}
    </PostDiv>
  );
}

export default Detail;
