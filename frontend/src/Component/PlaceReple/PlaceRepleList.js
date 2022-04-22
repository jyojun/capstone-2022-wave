import React, { useEffect, useState } from "react";
import axios from "axios";
import { RepleListDiv } from "../../Style/RepleCSS";
import PlaceRepleContent from "./PlaceRepleContent";

function PlaceRepleList(props) {
  const [RepleList, setRepleList] = useState([]);

  useEffect(() => {
    let body = {
      placeId: props.placeId,
    };
    axios.post("/api/placeReple/getReple", body).then((res) => {
      if (res.data.success) {
        setRepleList([...res.data.repleList]);
      }
    });
  }, [RepleList]);
  return (
    <RepleListDiv>
      {RepleList.map((Reple, idx) => {
        return <PlaceRepleContent Reple={Reple} key={idx} />;
      })}
    </RepleListDiv>
  );
}

export default PlaceRepleList;
