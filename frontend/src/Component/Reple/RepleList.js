import React, { useEffect, useState } from "react";
import axios from "axios";
import { RepleListDiv } from "../../Style/RepleCSS";
import RepleContent from "./RepleContent";

function RepleList(props) {
  const [RepleList, setRepleList] = useState([]);

  useEffect(() => {
    let body = {
      postId: props.postId,
    };
    axios.post("/api/reple/getReple", body).then((res) => {
      if (res.data.success) {
        setRepleList([...res.data.repleList]);
      }
    });
  }, []);
  return (
    <RepleListDiv>
      {RepleList.map((Reple, idx) => {
        return <RepleContent Reple={Reple} key={idx} />;
      })}
    </RepleListDiv>
  );
}

export default RepleList;
