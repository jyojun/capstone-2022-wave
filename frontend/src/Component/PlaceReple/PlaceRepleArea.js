import React from "react";
import { useSelector } from "react-redux";
import PlaceRepleUpload from "./PlaceRepleUpload.js";
import { PlaceRepleAreaDiv } from "../../Style/PlaceRepleCSS.js";
import PlaceRepleList from "./PlaceRepleList.js";

function PlaceRepleArea(props) {
  const user = useSelector((state) => state.user);

  return (
    <PlaceRepleAreaDiv>
      {user.accessToken && <PlaceRepleUpload placeId={props.placeId} />}
      <PlaceRepleList placeId={props.placeId} />
    </PlaceRepleAreaDiv>
  );
}

export default PlaceRepleArea;
