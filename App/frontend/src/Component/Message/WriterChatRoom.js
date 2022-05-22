import React, { useState, useEffect, useCallback } from "react";
import { ChatRoomDiv } from "../../Style/MessageCSS";
import axios from "axios";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MessageBox from "./MessageBox";
import { Avatar } from "@mui/material";
import LastMessage from "./LastMessage";

function WriterChatRoom() {
  const [Content, setContent] = useState("");
  const [CarePostInfo, setCarePostInfo] = useState({});
  const [Senders, setSenders] = useState([]);
  const [Messages, setMessages] = useState([]);
  const [CurrentTarget, setCurrentTarget] = useState({});

  const user = useSelector((state) => state.user);

  const params = useParams();

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
    console.log(CarePostInfo);
    getSenderList();
    getMessages();
  }, [CarePostInfo, user]);
  const getSenderList = async () => {
    if (CarePostInfo && user.uid) {
      let body = {
        carePostId: CarePostInfo._id,
        user_uid: user.uid,
      };
      axios.post("/api/message/getSenders", body).then((res) => {
        if (res.data.success) {
          setSenders(res.data.senders);
        } else {
          alert("");
        }
      });
    }
  };
  const getMessages = async () => {
    console.log(CarePostInfo);
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
      receiver: CurrentTarget.uid,
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
      {CurrentTarget.displayName !== undefined ? (
        <>
          <div className="container">
            <button className="back" onClick={() => setCurrentTarget({})}>
              {"<-"}
            </button>
            <MessageBox
              sender={CurrentTarget}
              messages={Messages}
              onSubmit={onSubmit}
              Content={Content}
              setContent={setContent}
            />
          </div>
        </>
      ) : (
        <div className="senders" style={{ overflow: "scroll" }}>
          {Senders.map((sender, idx) => {
            console.log(sender);
            return (
              <div key={idx} className="each-chatroom">
                <button
                  className="join-chatroom"
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentTarget(sender);
                  }}
                >
                  <Avatar src={sender.photoURL}></Avatar>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      fontSize: "12px",
                      marginLeft: "1rem",
                    }}
                  >
                    <p style={{ fontSize: "13px", fontWeight: "bold" }}>
                      {sender.displayName}
                    </p>
                    <LastMessage sender={sender} messages={Messages} />
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      )}
    </ChatRoomDiv>
  );
}

export default WriterChatRoom;
