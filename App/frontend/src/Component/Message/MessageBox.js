import React from "react";
import { useSelector } from "react-redux";
import { Avatar } from "@mui/material";
import moment from "moment";

function MessageBox({ sender, messages, Content, setContent, onSubmit }) {
  moment.locale("ko");
  const user = useSelector((state) => state.user);
  return (
    <>
      <div className="chat-title">
        <Avatar
          style={{ width: "80px", height: "80px" }}
          src={sender.photoURL}
        ></Avatar>
        <h1>{sender.displayName}</h1>
      </div>
      <div className="message-box" style={{ overflow: "scroll" }}>
        {messages.map((message, idx) => {
          if (
            (message.sender.uid === sender.uid &&
              message.receiver.uid === user.uid) ||
            (message.sender.uid === user.uid &&
              message.receiver.uid === sender.uid)
          ) {
            if (message.sender.uid === user.uid) {
              return (
                <div key={idx} className="me">
                  <p className="time">
                    {moment(message.createdAt).format("LT")}
                  </p>
                  <p className="content" style={{}}>
                    {message.content}
                  </p>
                  <Avatar src={user.photoURL} />
                </div>
              );
            } else {
              return (
                <div key={idx} className="sender" style={{}}>
                  <Avatar src={message.sender.photoURL} />
                  <p className="content">{message.content}</p>
                  <p className="time">
                    {moment(message.createdAt).format("LT")}
                  </p>
                </div>
              );
            }
          }
        })}
      </div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={Content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="메세지를 입력하세요.."
          style={{ bottom: "0" }}
        />
        <button type="submit">Send</button>
      </form>
    </>
  );
}

export default MessageBox;
