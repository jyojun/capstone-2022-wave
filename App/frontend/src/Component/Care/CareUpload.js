import React, { useState, useEffect, useRef } from "react";
import { UploadDiv, UploadForm, UploadButtonDiv } from "../../Style/UploadCSS";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import AddressUpload from "../Place/AddressUpload";
import axios from "axios";
import { Avatar } from "@mui/material";

import { DateRange } from "react-date-range";
import moment from "moment";
import { ko } from "react-date-range/dist/locale/index.js";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { addDays } from "date-fns";

function CareUpload(props) {
  const [Title, setTitle] = useState("");
  const [Content, setContent] = useState("");
  const [Address, setAddress] = useState("");
  const [CareDate, setCareDate] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: "selection",
    },
  ]);
  const [Pet, setPet] = useState(""); // 돌봄/산책 이 필요한 펫 리스트
  const [PetId, setPetId] = useState("");
  const [PopUp, setPopUp] = useState(false);
  const [UserPets, setUserPets] = useState([]); // 유저의 펫 리스트
  const user = useSelector((state) => state.user);
  let navigate = useNavigate();

  useEffect(() => {
    let body = {
      uid: user.uid,
    };
    axios.post("/api/pet/petList", body).then((res) => {
      if (res.data.success) {
        setUserPets(res.data.petList);
      } else {
        alert("유저의 펫 리스트를 불러오는데 실패 하였습니다.");
      }
    });
  }, [user]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (Title === "" || Content === "" || Address === "" || Pet === "") {
      return alert("모든 항목을 채워주세요!");
    }

    let body = {
      title: Title,
      content: Content,
      address: Address,
      startDate: CareDate[0].startDate,
      endDate: CareDate[0].endDate,
      petId: PetId,
      uid: user.uid,
    };

    console.log(body);
    axios
      .post("/api/carePost/submit", body)
      .then((res) => {
        if (res.data.success) {
          alert("게시글 등록이 완료");
          navigate("/care");
        } else {
          alert("게시글 등록 실패");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    setPetId(PetId);
    console.log(PetId);
  }, [PetId]);

  return (
    <UploadDiv>
      <UploadForm>
        <label htmlFor="">제목</label>
        <input
          onChange={(e) => setTitle(e.currentTarget.value)}
          type="text"
          id="title"
          value={Title}
        />
        <label>펫 추가</label>
        <input
          type="text"
          id="title"
          value={Pet}
          onChange={(e) => {
            setPet(e.currentTarget.value);
          }}
        />
        <div
          className="pet-click-div"
          style={{
            border: "1px solid #dbdbdb",
            textDecoration: "none",
            whiteSpace: "nowrap",
            display: "flex",
            overflowX: "auto",
            "&-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {UserPets.map((pet, idx) => {
            return (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  // let newPets = Pets;
                  // if (newPets.includes(e.currentTarget.value)) {
                  //   setPets(
                  //     Pets.filter((pet) => pet !== e.currentTarget.value)
                  //   );
                  // } else {
                  //   setPets([...Pets, e.currentTarget.value]);
                  // }
                  setPet(pet.name);
                  setPetId(pet._id);
                }}
                key={idx}
                value={pet.name}
                style={{
                  border: "none",
                  background: "white",
                  marginTop: "1.5rem",
                }}
              >
                <Avatar
                  key={idx}
                  src={pet.image}
                  style={{
                    border: "1px solid #c6c6c6",
                    width: "100px",
                    height: "100px",
                    marginRight: "10px",
                    cursor: "pointer",
                  }}
                />
                <p
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    fontFamily: "roboto",
                  }}
                >
                  {pet.name}
                </p>
              </button>
            );
          })}
        </div>

        <label htmlFor="">위치명</label>
        <div className="address-input">
          <input id="title" type="text" value={Address} />

          <button
            onClick={(e) => {
              e.preventDefault();
              setPopUp(!PopUp);
            }}
            style={{
              height: "3rem",
              borderRadius: "10px",
              fontSize: "13px",
            }}
          >
            주소검색
          </button>
          {PopUp && (
            <div>
              <AddressUpload Address={Address} setAddress={setAddress} />
            </div>
          )}
        </div>
        <label>돌봄 날짜</label>
        <DateRange
          style={{ width: "100%" }}
          editableDateInputs={true}
          onChange={(e) => {
            setCareDate([e.selection]);
            console.log(CareDate);
          }}
          moveRangeOnFirstSelection={false}
          ranges={CareDate}
          months={1}
          locale={ko}
          direction="horizontal"
        />
        <label htmlFor="">상세 글</label>
        <textarea
          onChange={(e) => {
            setContent(e.currentTarget.value);
          }}
          value={Content}
          placeholder="돌봄 시간 및 돌봄 관련 특이사항등을 적어주세요!"
        />
        <UploadButtonDiv>
          <button onClick={(e) => onSubmit(e)}>제출</button>
        </UploadButtonDiv>
      </UploadForm>
    </UploadDiv>
  );
}

export default CareUpload;
