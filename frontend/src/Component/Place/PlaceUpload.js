import React, { useState, useEffect } from "react";
import { UploadDiv, UploadForm, UploadButtonDiv } from "../../Style/UploadCSS";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ImageUpload from "../Post/ImageUpload";
import DaumPostcode from "react-daum-postcode";
import Address from "./AddressUpload";
import AddressUpload from "./AddressUpload";

function PlaceUpload(props) {
  const [Name, setName] = useState("");
  const [Address, setAddress] = useState("");
  const [Image, setImage] = useState("");
  const [PopUp, setPopUp] = useState(true);

  const user = useSelector((state) => state.user);
  let navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <UploadDiv>
      <UploadForm>
        <label htmlFor="">장소명</label>
        <input onChange={(e) => {}} id="title" type="text" value={Name} />
        <ImageUpload setImage={setImage} />
        <label htmlFor="">위치명</label>
        <input onChange={(e) => {}} id="title" type="text" value={Location} />
        {PopUp && <AddressUpload Address={Address} setAddress={setAddress} />}
        <UploadButtonDiv>
          <button onClick={onSubmit}>제출</button>
        </UploadButtonDiv>
      </UploadForm>
    </UploadDiv>
  );
}

export default PlaceUpload;
