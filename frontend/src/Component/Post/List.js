import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ListDiv, ListItem } from "../../Style/ListCSS";
import { BtnDiv } from "../../Style/DetailCSS";

function List(props) {
  const [PostList, setPostList] = useState([]);
  useEffect(() => {
    axios
      .post("/api/post/list")
      .then((res) => {
        if (res.data.success) {
          setPostList([...res.data.postList]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <ListDiv>
      <h3
        style={{
          textAlign: "center",
          padding: "1rem",
        }}
      >
        QA 게시판
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

      {PostList.map((post, idx) => {
        return (
          <ListItem key={idx}>
            <Link to={`/post/${post.postNum}`}>
              <p className="title">{post.title}</p>
              <p>{post.content}</p>
            </Link>
          </ListItem>
        );
      })}
    </ListDiv>
  );
}

export default List;
