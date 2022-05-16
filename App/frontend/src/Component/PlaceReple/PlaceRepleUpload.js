import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { PlaceRepleUploadDiv } from "../../Style/PlaceRepleCSS";

function PlaceRepleUpload(props) {
  const [Reple, setReple] = useState("");
  const user = useSelector((state) => state.user);
  const SubmitHandler = (e) => {
    e.preventDefault();

    if (!Reple) {
      return alert("댓글 내용을 넣어주세요.");
    }
    let body = {
      reple: Reple,
      uid: user.uid,
      placeId: props.placeId,
    };
    axios.post("/api/placeReple/submit", body).then((res) => {
      if (res.data.success) {
        alert("댓글 작성이 성공하였습니다.");
        window.location.reload();
      } else {
        alert("댓글 작성이 실패하였습니다.");
      }
    });
  };
  return (
    <PlaceRepleUploadDiv>
      <form>
        <input
          type="text"
          value={Reple}
          onChange={(e) => setReple(e.currentTarget.value)}
          placeholder="장소에 대한 후기를 남겨주세요!"
        />
        <button onClick={(e) => SubmitHandler(e)}>등록</button>
      </form>
    </PlaceRepleUploadDiv>
  );
}

export default PlaceRepleUpload;
