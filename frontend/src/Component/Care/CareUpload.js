import React, { useState, useEffect } from "react";
import { UploadDiv, UploadForm, UploadButtonDiv } from "../../Style/UploadCSS";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Card } from "react-bootstrap";
import AddressUpload from "../Place/AddressUpload";
import axios from "axios";
import ScrollHorizontal from "react-scroll-horizontal";

import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";

function CareUpload(props) {
  const [Title, setTitle] = useState("");
  const [Content, setContent] = useState("");
  const [Address, setAddress] = useState("");
  const [Pets, setPets] = useState([]); // 돌봄/산책 이 필요한 펫 리스트
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
    if (Title === "" || Content === "" || Address === "" || Pets === []) {
      return alert("모든 항목을 채워주세요!");
    }

    let body = {
      title: Title,
      content: Content,
      address: Address,
      pets: Pets,
    };

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

  return (
    <UploadDiv>
      <UploadForm>
        <label htmlFor="">제목</label>
        <input
          onChange={(e) => setTitle(e.currentTarget.value)}
          type="text"
          value={Title}
        />
        <label>펫 추가</label>
        <div
          style={{
            display: "flex",
            width: "500px",
            padding: "20px",
            overflow: "scroll",
            border: "1px solid #000",
            overflow: "auto",
            whiteSpace: "nowrap",
          }}
        >
          {UserPets.map((pet, idx) => {
            return (
              <Card key={idx} style={{ display: "flex", flexDirection: "row" }}>
                {/* <Card.Img
                  style={{ width: "50%" }}
                  variant="top"
                  src={pet.image}
                /> */}
                <Card.Body>
                  <Card.Title
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    {pet.name}
                    {pet.sex === "male" ? <MaleIcon /> : <FemaleIcon />}
                  </Card.Title>
                  <Card.Text
                    style={{
                      color: "grey",
                      fontSize: "13px",
                    }}
                  >
                    {pet.type}
                  </Card.Text>
                  <Card.Text>{pet.birthday}</Card.Text>
                  <Card.Text>몸무게 : {pet.weight}kg</Card.Text>
                  <Card.Text>
                    중성화 여부 : {pet.neutrality ? "o" : "x"}
                  </Card.Text>
                  <input type="checkbox" />
                </Card.Body>
              </Card>
            );
          })}
        </div>

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

        <label htmlFor="">상세 글</label>
        <textarea
          onChange={(e) => {
            setContent(e.currentTarget.value);
          }}
          value={Content}
          placeholder="장소에 대한 구체적인 정보를 적어주세요."
        />
        <UploadButtonDiv>
          <button onClick={(e) => onSubmit(e)}>제출</button>
        </UploadButtonDiv>
      </UploadForm>
    </UploadDiv>
  );
}

export default CareUpload;
