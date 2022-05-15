import React, { useEffect, useState } from "react";
import DaumPostcode from "react-daum-postcode";

const AddressUpload = (props) => {
  const Address = props.Address;
  const setAddress = props.setAddress;

  const onCompletePost = (data) => {
    console.log(data.address);
    setAddress(data.address);
  };

  const postCodeStyle = {
    display: "block",
    position: "absolute",
    margin: "0 auto",
    border: "1px solid black",
    top: "40%",
    right: "10%",
    width: "25rem",
    height: "25rem",
    zIndex: 100,
  };

  return (
    <DaumPostcode style={postCodeStyle} autoClose onComplete={onCompletePost} />
  );
};

export default AddressUpload;
