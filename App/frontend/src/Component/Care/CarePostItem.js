import React from "react";
import { CarePostItemDiv } from "../../Style/CarePostCSS";
import { Avatar } from "@mui/material";
import moment from "moment";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DateRangeRoundedIcon from "@mui/icons-material/DateRangeRounded";
import PetsOutlinedIcon from "@mui/icons-material/PetsOutlined";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";

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
        style={{
          display: "block",
          margin: "auto",
          width: "80%",
          aspectRatio: "1/1",
          objectFit: "cover",
          borderRadius: "100px",
          border: "2px solid #98EBE8",
          padding: "4px",
          background: "white",
        }}
        src={post.pet.image}
      ></img>

      <div className="care-info">
        <p style={{ fontSize: "15px", fontWeight: "bold", color: "black" }}>
          {post.title}
        </p>
        <p
          style={{
            fontSize: "12px",
            color: "#4DAAC3",
          }}
        >
          <DateRangeRoundedIcon sx={{ fontSize: 17 }}></DateRangeRoundedIcon>
          {` 돌봄 기간 : ${moment(post.startDate).format("MMMM Do")} ~ ${moment(
            post.endDate
          ).format("MMMM Do")}`}
        </p>
        <p style={{}}>
          {post.pet.name} | {post.pet.type} | {post.pet.weight}kg
        </p>

        <p>{post.address}</p>
        <p>{post.content}</p>
        <p style={{ color: "black" }} className="time">
          {SetTime(post.createdAt, post.updatedAt)}
        </p>
        {user.uid !== post.author.uid ? (
          <div className="button">
            <button
              style={{
                //background: "rgba(102, 186, 194)",
                //background: "rgba(0, 180, 204, 0.8)",
                background: "rgba(250, 250, 250, 0.2)",
                boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.2)",
                //border: "1px solid white",

                // backgroundImage: "linear-gradient(#fff, #fff), linear-gradient(to right, #98EBE8 0%,  #4DAAC3 100%)",
                // backgroundOrigin: "border-box",
                // backgroundClip: "content-box, border-box",
                marginRight: "10px",
                borderRadius: "5px",
                padding: "2px",
              }}
            >
              <Link
                to={`message/${post.carePostNum}`}
                style={{
                  color: "grey",
                  textDecoration: "none",
                  fontSize: "11px",
                  //fontWeight: "800",
                  padding: "20px",
                  letterSpacing: "0px",
                }}
              >
                메시지
              </Link>
            </button>
          </div>
        ) : (
          <div className="button">
            <button>
              <Link
                to={`author_message/${post.carePostNum}`}
                style={{
                  color: "grey",
                  textDecoration: "none",
                  fontSize: "11px",
                  //fontWeight: "800",
                  padding: "20px",
                  letterSpacing: "0px",
                }}
              >
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
