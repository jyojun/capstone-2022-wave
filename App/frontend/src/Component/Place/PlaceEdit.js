import React, { useState, useEffect } from "react";
import { UploadDiv, UploadForm, UploadButtonDiv } from "../../Style/UploadCSS";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import AddressUpload from "./AddressUpload";
import axios from "axios";

function PlaceEdit(props) {
  const [Name, setName] = useState("");
  const [Category, setCategory] = useState("");
  const [Address, setAddress] = useState("");
  const [Detail, setDetail] = useState("");
  const [PlaceImage, setPlaceImage] = useState("");
  const [PopUp, setPopUp] = useState(false);

  const user = useSelector((state) => state.user);

  const PlaceTypes = ["펜션", "식당", "카페", "공원"];
  let navigate = useNavigate();

  const ImageUpload = (e) => {
    let formData = new FormData();
    formData.append("file", e.target.files[0]);
    axios.post("/api/place/image/upload", formData).then((res) => {
      console.log(res.data);
      setPlaceImage(res.data.filePath);
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      Name === "" ||
      Address === "" ||
      Detail === "" ||
      Category === "" ||
      PlaceImage === ""
    ) {
      return alert("모든 항목을 채워주세요!");
    }

    let body = {
      name: Name,
      category: Category,
      address: Address,
      detail: Detail,
      image: PlaceImage,
    };
    axios
      .post("/api/place/submit", body)
      .then((res) => {
        if (res.data.success) {
          alert("장소 등록이 완료");
          navigate("/place");
        } else {
          alert("장소 등록 실패");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <UploadDiv>
      <UploadForm>
        <label htmlFor="">장소명</label>
        <input
          onChange={(e) => setName(e.currentTarget.value)}
          id="title"
          type="text"
          value={Name}
        />
        <label>카테고리</label>
        <select
          onChange={(e) => {
            setCategory(e.currentTarget.value);
            console.log(Category);
          }}
          value={Category}
        >
          {PlaceTypes.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
        <label htmlFor="">장소 이미지</label>
        <input type="file" accept="image/" onChange={(e) => ImageUpload(e)} />
        <label htmlFor="">위치명</label>
        <div
          style={{
            display: "flex",
          }}
        >
          <input id="title" type="text" value={Address} />
          {PopUp && (
            <div>
              <AddressUpload Address={Address} setAddress={setAddress} />
            </div>
          )}
          <button
            onClick={(e) => {
              e.preventDefault();
              setPopUp(!PopUp);
            }}
            style={{}}
          >
            주소검색
          </button>
        </div>

        <label htmlFor="">장소 정보</label>
        <textarea
          onChange={(e) => {
            setDetail(e.currentTarget.value);
          }}
          value={Detail}
          placeholder="장소에 대한 구체적인 정보를 적어주세요."
        />
        <UploadButtonDiv>
          <button onClick={(e) => onSubmit(e)}>제출</button>
        </UploadButtonDiv>
      </UploadForm>
    </UploadDiv>
  );
}

export default PlaceEdit;
