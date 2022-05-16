import React from "react";
import { useSelector } from "react-redux";
import { Avatar } from "@mui/material";

function MessageBox({ sender, messages }) {
  const user = useSelector((state) => state.user);
  return (
    <div>
      <p>{sender.displayName} 과의 메세지</p>
      {messages.map((message, idx) => {
        if (
          (message.sender.uid === sender.uid &&
            message.receiver.uid === user.uid) ||
          (message.sender.uid === user.uid &&
            message.receiver.uid === sender.uid)
        ) {
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
        }
      })}
    </div>
  );
}

export default MessageBox;
