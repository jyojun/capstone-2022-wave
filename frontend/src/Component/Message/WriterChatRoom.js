import React, { useState, useEffect } from "react";
import { ChatRoomDiv } from "../../Style/MessageCSS";
import axios from "axios";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import MessageBox from "./MessageBox";

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
      receiver: CurrentTarget.uid,
      carePostId: CarePostInfo._id,
    };
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
        {CurrentTarget === {} ? (
          <MessageBox sender={CurrentTarget} messages={Messages} />
        ) : (
          Senders.map((sender, idx) => {
            return (
              <div
                key={idx}
                className="each-chatroom"
                style={{ backgroundColor: "red" }}
              >
                <button
                  className="join-chatroom"
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentTarget(sender);
                  }}
                >
                  <h5>{sender.displayName}</h5>
                  <MessageBox sender={sender} messages={Messages} />
                </button>
              </div>
            );
          })
        )}
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

export default WriterChatRoom;
