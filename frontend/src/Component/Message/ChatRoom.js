import React, { useState, useEffect } from "react";
import { ChatRoomDiv } from "../../Style/MessageCSS";
import axios from "axios";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Avatar } from "@mui/material";
import io from "socket.io-client";

function ChatRoom() {
  const [Content, setContent] = useState("");
  const [CarePostInfo, setCarePostInfo] = useState({});
  const [Messages, setMessages] = useState([]);
  const user = useSelector((state) => state.user);

  const params = useParams();

  var socket = io.connect();
  socket.on("message", function (data) {
    console.log(data);
  });
  useEffect(() => {
    let body = {
      carePostNum: parseInt(params.carePostNum),
    };
    axios.post("/api/carePost/getPostInfo", body).then((res) => {
      if (res.data.success) {
        setCarePostInfo(res.data.carePostInfo);
      } else {
        alert("작성자를 불러올 수 없습니다.");
      }
    });
    getMessages();
  }, [CarePostInfo, user]);
  const getMessages = async () => {
    // console.log(CarePostInfo);
    if (CarePostInfo) {
      let body = {
        user_uid: user.uid,
        author_uid: CarePostInfo.author.uid,
        carePostId: CarePostInfo._id,
      };
      await axios.post("/api/message/getMessages", body).then((res) => {
        if (res.data.success) {
          setMessages(res.data.messages);
        } else {
          alert("메세지를 불러오는 데 실패하였습니다.");
        }
      });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let body = {
      content: Content,
      sender: user.uid,
      receiver: CarePostInfo.author.uid,
      carePostId: CarePostInfo._id,
    };
    console.log(body);
    axios.post("/api/message/submit", body).then((res) => {
      if (res.data.success) {
        getMessages();
        setContent("");
      } else {
        alert("메세지 전송에 실패하였습니다.");
      }
    });
  };
  return (
    <ChatRoomDiv>
      <div className="container" style={{ overflow: "scroll" }}>
        {Messages.map((message, idx) => {
          if (message.sender.uid === user.uid) {
            return (
              <div
                key={idx}
                className="message-box"
                style={{
                  display: "flex",
                  background: "skyblue",
                  marginBottom: "1rem",
                  justifyContent: "right",
                }}
              >
                <p>{message.content}</p>
              </div>
            );
          } else {
            return (
              <div
                key={idx}
                className="message-box"
                style={{
                  display: "flex",
                  background: "whitesmoke",
                  marginBottom: "1rem",
                }}
              >
                <Avatar src={message.sender.photoURL} />
                <p>{message.content}</p>
              </div>
            );
          }
        })}
      </div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={Content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </ChatRoomDiv>
  );
}

export default ChatRoom;
