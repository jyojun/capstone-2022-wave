import React from "react";
import { CarePostItemDiv } from "../../Style/CarePostCSS";
import { Avatar } from "@mui/material";
import moment from "moment";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CarePostItem({ post }) {
  const user = useSelector((state) => state.user);
  const SetTime = (createdAt, updatedAt) => {
    if (createdAt !== updatedAt) {
      return moment(updatedAt).format("MMMM Do, hh시 mm분") + "(수정됨)";
    } else {
      return moment(createdAt).format("MMMM Do, hh시 mm분");
    }
  };
  return (
    <CarePostItemDiv>
      <img
        style={{ width: "100%", aspectRatio: "1/1", objectFit: "cover" }}
        src={post.pet.image}
      ></img>
      <div className="care-info">
        <p style={{ fontSize: "15px", fontWeight: "bold", color: "black" }}>
          {post.title}
        </p>
        <p className="time">{SetTime(post.createdAt, post.updatedAt)}</p>
        <p>{post.pet.name}</p>
        <p>{`돌봄 기간 : ${moment(post.startDate).format("MMMM Do")}~${moment(
          post.endDate
        ).format("MMMM Do")}`}</p>
        {user.uid !== post.author.uid ? (
          <div className="button">
            <button>
              <Link to={`message/${post.carePostNum}`}>Message</Link>
            </button>
          </div>
        ) : (
          <div className="button">
            <button>
              <Link to={`author_message/${post.carePostNum}`}>
                메세지 확인하기
              </Link>
            </button>
          </div>
        )}
      </div>
    </CarePostItemDiv>
  );
}

export default CarePostItem;
