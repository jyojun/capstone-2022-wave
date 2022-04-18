import React, { useEffect, useState } from "react";
import DaumPostcode from "react-daum-postcode";

const AddressUpload = (props) => {
  const Address = props.Address;
  const setAddress = props.setAddress;

  const onCompletePost = (data) => {
    console.log(data.Address);
    setAddress(data.Address);
  };

  const postCodeStyle = {
    display: "block",
    position: "absolute",
    top: "20%",
    width: "400px",
    height: "400px",
    padding: "7px",
    zIndex: 100,
  };

  return (
    <>
      <DaumPostcode
        style={postCodeStyle}
        autoClose
        onComplete={onCompletePost}
      />
    </>
  );
};

export default AddressUpload;
