import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "react-avatar";
import { PetUploadDiv } from "../../Style/PetUploadCSS";
import { useSelector } from "react-redux";
import { Calendar } from "react-date-range";
import moment from "moment";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import axios from "axios";

function PetUpload() {
  const [PetName, setPetName] = useState("");
  const [PetSex, setPetSex] = useState("");
  const [PetType, setPetType] = useState("");
  const [PetBirthday, setPetBirthday] = useState("");
  const [PetNeutrality, setPetNeutrality] = useState(false);
  const [PetImage, setPetImage] = useState("");
  const [PetWeight, setPetWeight] = useState(0);
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const ImageUpload = (e) => {
    console.log(e.target.files);
    let formData = new FormData();
    formData.append("file", e.target.files[0]);
    axios.post("/api/pet/image/upload", formData).then((res) => {
      console.log(res.data);
      setPetImage(res.data.filePath);
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    let body = {
      name: PetName,
      sex: PetSex,
      type: PetType,
      birthday: PetBirthday,
      weight: PetWeight,
      neutrality: PetNeutrality,
      image: PetImage,
      uid: user.uid,
    };
    axios
      .post("/api/pet/submit", body)
      .then((res) => {
        if (res.data.success) {
          alert("펫 등록이 완료");
          navigate(`/mypage/${user.displayName}`);
        } else {
          alert("펫 등록에 실패");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <PetUploadDiv>
        <h3>마이펫 등록하기</h3>
        <form>
          <p style={{ fontSize: "20px" }}>My Pet</p>
          <label
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <input
              type="file"
              accept="image/"
              style={{ display: "none" }}
              onChange={(e) => {
                ImageUpload(e);
              }}
            />

            <Avatar
              size="100"
              round={true}
              src={
                PetImage
                  ? PetImage
                  : "https://s3.console.aws.amazon.com/s3/object/pecus2022?region=ap-northeast-2&prefix=1650250915342+%281%29.jpeg"
              }
              style={{
                border: "1px solid #c6c6c6",
                cursor: "pointer",
              }}
            />
          </label>
          <label>이름</label>
          <input
            onChange={(e) => {
              setPetName(e.currentTarget.value);
            }}
            type="text"
            value={PetName}
            required
          />
          <label>성별</label>
          <select
            onChange={(e) => {
              setPetSex(e.currentTarget.value);
            }}
            value={PetSex}
          >
            <option value="" selected disabled hidden>
              선택해주세요.
            </option>
            <option value="male">수컷</option>
            <option value="female">암컷</option>
          </select>
          <label>품종</label>
          <select
            onChange={(e) => {
              setPetType(e.currentTarget.value);
            }}
            value={PetType}
          >
            <option value="" selected disabled hidden>
              선택해주세요.
            </option>
            <option value="포메라니안">포메라니안(강아지)</option>
            <option value="푸들">푸들(강이지)</option>
            <option value="말티즈">말티즈(강아지)</option>
            <option value="치와와">치와와(강아지)</option>
          </select>
          <label>생년월일</label>
          <input type="text" value={PetBirthday} />
          <Calendar
            onChange={(e) => {
              let ages = moment().diff(moment(e, "DD MMM YYYY"), "years");
              setPetBirthday(
                moment(e).format("YYYY년 MM월 DD일") + " (만" + ages + "살)"
              );
            }}
          />
          <label>몸무게 (kg)</label>
          <input
            type="text"
            value={PetWeight}
            onChange={(e) => setPetWeight(e.currentTarget.value)}
            placeholder="ex) 5kg"
          ></input>
          <label>중성화 여부</label>
          <select
            onChange={(e) => {
              setPetNeutrality(e.currentTarget.value);
            }}
            value={PetNeutrality}
          >
            <option value="" selected disabled hidden>
              선택해주세요.
            </option>
            <option value={true}>O</option>
            <option value={false}>X</option>
          </select>
          <button onClick={onSubmit} className="button">
            펫 추가
          </button>
          <button
            className="button"
            onClick={() => {
              navigate(`/mypage/${user.displayName}`);
            }}
          >
            취소
          </button>
        </form>
      </PetUploadDiv>
    </div>
  );
}

export default PetUpload;
