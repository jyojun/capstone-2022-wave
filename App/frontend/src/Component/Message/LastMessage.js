import React from "react";
import { useSelector } from "react-redux";
import { Avatar } from "@mui/material";
import moment from "moment";

function LastMessage({ sender, messages }) {
  moment.locale("ko");
  const user = useSelector((state) => state.user);

  let lastMessage = messages.filter(
    (message) =>
      (message.sender.uid === sender.uid &&
        message.receiver.uid === user.uid) ||
      (message.sender.uid === user.uid && message.receiver.uid === sender.uid)
  );

  lastMessage = lastMessage[lastMessage.length - 1];

  return <>{lastMessage && <p className="content">{lastMessage.content}</p>}</>;
}

export default LastMessage;
