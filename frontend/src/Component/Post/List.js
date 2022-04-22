import React from "react";
import { Link } from "react-router-dom";
import { ListDiv, ListItem } from "../../Style/ListCSS";
import { BtnDiv } from "../../Style/DetailCSS";
import Avatar from "react-avatar";
import moment from "moment";
import CommentIcon from "@mui/icons-material/Comment";
import "moment/locale/ko"; // 한국시간으로 설정

function List(props) {
  const SetTime = (createdAt, updatedAt) => {
    if (createdAt !== updatedAt) {
      return moment(updatedAt).format("YYYY년 MMMM Do, hh시 mm분") + "(수정됨)";
    } else {
      return moment(createdAt).format("YYYY년 MMMM Do, hh시 mm분");
    }
  };
  return (
    <ListDiv>
      <h3
        style={{
          textAlign: "center",
          padding: "1rem",
        }}
      >
        커뮤니티
      </h3>
      <BtnDiv>
        <button
          style={{
            backgroundColor: "white",
            border: "none",
          }}
        >
          <Link
            to="/upload"
            style={{
              color: "black",
              textDecoration: "none",
              border: "none",
            }}
            className="write"
          >
            글쓰기
          </Link>
        </button>
      </BtnDiv>

      {props.PostList.map((post, idx) => {
        //console.log(post);
        return (
          <ListItem key={idx}>
            <Link to={`/post/${post.postNum}`}>
              <p className="title">{post.title}</p>
              <div className="author">
                <div>
                  <Avatar
                    size="40"
                    round={true}
                    src={post.author.photoURL}
                    style={{
                      border: "1px solid #c6c6c6",
                    }}
                  />
                  <p>{post.author.displayName}</p>
                </div>
                <p className="time">
                  {SetTime(post.createdAt, post.updatedAt)}
                </p>
              </div>

              <p>{post.content}</p>
              <div className="repleNum">
                <CommentIcon
                  style={{
                    color: "grey",
                    marginRight: "5px",
                  }}
                />
                <p>{post.repleNum}</p>
              </div>
            </Link>
          </ListItem>
        );
      })}
    </ListDiv>
  );
}

export default List;
