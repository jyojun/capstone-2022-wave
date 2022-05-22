import React, { useState, useEffect } from "react";
import { ChatRoomDiv } from "../../Style/MessageCSS";
import axios from "axios";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Avatar } from "@mui/material";
import io from "socket.io-client";
import MessageBox from "./MessageBox";

function ChatRoom() {
  const [Content, setContent] = useState("");
  const [CarePostInfo, setCarePostInfo] = useState({});
  const [Author, setAuthor] = useState({});
  const [Messages, setMessages] = useState([]);
  const user = useSelector((state) => state.user);

  const params = useParams();

  var socket = io.connect();

  useEffect(() => {
    getPostInfo();
    getMessages();
  }, [CarePostInfo, user]);

  const getPostInfo = async () => {
    let body = {
      carePostNum: parseInt(params.carePostNum),
    };
    await axios.post("/api/carePost/getPostInfo", body).then((res) => {
      if (res.data.success) {
        setCarePostInfo(res.data.carePostInfo);
        setAuthor(res.data.carePostInfo.author);
      } else {
        alert("작성자를 불러올 수 없습니다.");
      }
    });
  };

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

    if (Content === "") {
      alert("메세지 내용을 입력하세요.");
    } else {
      axios.post("/api/message/submit", body).then((res) => {
        if (res.data.success) {
          getMessages();
          setContent("");
        } else {
          alert("메세지 전송에 실패하였습니다.");
        }
      });
    }
  };
  return (
    <ChatRoomDiv>
      <div className="container">
        <MessageBox
          sender={Author}
          messages={Messages}
          onSubmit={onSubmit}
          Content={Content}
          setContent={setContent}
        />
      </div>
    </ChatRoomDiv>
  );
}

export default ChatRoom;
