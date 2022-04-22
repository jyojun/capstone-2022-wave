import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { PostDiv, Post, BtnDiv } from "../../Style/DetailCSS";
import { useSelector } from "react-redux";
import Avatar from "react-avatar";
import moment from "moment";
import CommentIcon from "@mui/icons-material/Comment";

function Detail(props) {
  let params = useParams();
  let navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const SetTime = (createdAt, updatedAt) => {
    if (createdAt !== updatedAt) {
      return moment(updatedAt).format("YYYY년 MMMM Do, hh시 mm분") + "(수정됨)";
    } else {
      return moment(createdAt).format("YYYY년 MMMM Do, hh시 mm분");
    }
  };

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
      <>
        <Post>
          <h1>{props.PostInfo.title}</h1>
          <div className="author">
            <div>
              <Avatar
                size="40"
                round={true}
                src={props.PostInfo.author.photoURL}
                style={{
                  border: "1px solid #c6c6c6",
                  marginRight: "5px",
                }}
              />
              <p>{props.PostInfo.author.displayName}</p>
            </div>
            <p className="time">
              {SetTime(props.PostInfo.createdAt, props.PostInfo.updatedAt)}
            </p>
          </div>
          {props.PostInfo.image ? (
            <img
              src={props.PostInfo.image}
              alt=""
              style={{ width: "100%", height: "auto" }}
            />
          ) : null}
          <p>{props.PostInfo.content}</p>
          <div className="repleNum">
            <CommentIcon
              style={{
                color: "grey",
                marginRight: "5px",
              }}
            />
            <p>{props.PostInfo.repleNum}</p>
          </div>
        </Post>
        {user.uid === props.PostInfo.author.uid && (
          <BtnDiv>
            <Link to={`/edit/${props.PostInfo.postNum}`}>
              <button className="edit">수정</button>
            </Link>
            <button className="delete" onClick={DeleteHandler}>
              삭제
            </button>
          </BtnDiv>
        )}
      </>
    </PostDiv>
  );
}

export default Detail;
