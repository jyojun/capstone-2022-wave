import React from "react";
import { useSelector } from "react-redux";
import PlaceRepleUpload from "./PlaceRepleUpload.js";
import { PlaceRepleAreaDiv } from "../../Style/PlaceRepleCSS.js";
import PlaceRepleList from "./PlaceRepleList.js";

function PlaceRepleArea(props) {
  const user = useSelector((state) => state.user);

  return (
    <PlaceRepleAreaDiv>
      <div style={{ fontWeight: "bold" }}>장소 리뷰</div>
      {user.accessToken ? (
        <PlaceRepleUpload placeId={props.placeId} />
      ) : (
        <div style={{ textAlign: "center " }}>
          로그인후에 후기를 작성할 수 있습니다.
        </div>
      )}
      <PlaceRepleList placeId={props.placeId} />
    </PlaceRepleAreaDiv>
  );
}

export default PlaceRepleArea;
