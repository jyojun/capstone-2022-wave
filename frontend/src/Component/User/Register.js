import React, { useState, useEffect } from "react";
import LoginDiv from "../../Style/UserCSS.js";
import firebase from "../../firebase.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import GoogleIcon from "@mui/icons-material/Google";

function Register() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [PasswordCheck, setPasswordCheck] = useState("");
  const [Flag, setFlag] = useState(false);
  const [NameCheck, setNameCheck] = useState(false); // 닉네임 체크
  const [NameInfo, setNameInfo] = useState("");
  let navigate = useNavigate();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (user.accessToken) {
      navigate("/");
    }
  }, [user]);
  // user가 생성되는 동안 멈춰야하니 promise 방식으로 함수를 생성
  const RegisterFunc = async (e) => {
    setFlag(true);
    e.preventDefault();
    if (!(Name && Email && Password && PasswordCheck)) {
      return alert("회원 정보를 모두 입력 해 주세요.");
    }
    if (Password != PasswordCheck) {
      return alert("비밀번호와 비밀번호 확인 값이 같아야 합니다.");
    }
    if (!NameCheck) {
      return alert("닉네임 중복검사를 진행 해 주세요");
    }
    let createdUser = await firebase
      .auth()
      .createUserWithEmailAndPassword(Email, Password);

    await createdUser.user.updateProfile({
      displayName: Name,
      photoURL: "https://pecus2022.s3.ap-northeast-2.amazonaws.com/profile.png",
    });

    console.log(createdUser.user);
    let body = {
      eamil: createdUser.user.multiFactor.user.email,
      displayName: createdUser.user.multiFactor.user.displayName,
      uid: createdUser.user.multiFactor.user.uid,
      photoURL: "https://pecus2022.s3.ap-northeast-2.amazonaws.com/profile.png",
    };
    axios.post("/api/user/register", body).then((res) => {
      setFlag(false);
      if (res.data.success) {
        // 회원가입 성공시
        navigate("/login");
      } else {
        // 회원가입 실패시
        return alert("회원가입 실패");
      }
    });
  };

  const NameCheckFunc = (e) => {
    e.preventDefault();
    if (!Name) {
      return alert("닉네임을 입력하세요.");
    }
    let body = {
      displayName: Name,
    };
    axios.post("/api/user/namecheck", body).then((res) => {
      if (res.data.success) {
        if (res.data.check) {
          setNameCheck(true);
          setNameInfo("사용 가능한 닉네임입니다.");
        } else {
          setNameInfo("사용 불가능한 닉네임입니다.");
        }
      }
    });
  };
  return (
    <LoginDiv>
      <form>
        <div
          style={{
            borderBottom: "1px solid grey",
            marginBottom: "1rem",
            textAlign: "center",
          }}
        >
          <h3 style={{ marginBottom: "1rem" }}>회원 가입</h3>
        </div>

        <label>이름</label>
        <input
          type="name"
          value={Name}
          onChange={(e) => {
            setName(e.currentTarget.value);
          }}
        />
        {NameInfo}
        <button onClick={(e) => NameCheckFunc(e)}>닉네임 중복검사</button>
        <label>이메일</label>
        <input
          type="email"
          value={Email}
          onChange={(e) => {
            setEmail(e.currentTarget.value);
          }}
        />
        <label>비밀번호</label>
        <input
          type="password"
          value={Password}
          minLength={8}
          onChange={(e) => {
            setPassword(e.currentTarget.value);
          }}
        />
        <label>비밀번호 확인</label>
        <input
          type="password"
          value={PasswordCheck}
          minLength={8}
          onChange={(e) => {
            setPasswordCheck(e.currentTarget.value);
          }}
        />
        <button disabled={Flag} onClick={(e) => RegisterFunc(e)}>
          회원가입
        </button>

        <div
          style={{
            marginTop: "2rem",
            marginBottom: "2rem",
            borderTop: "1px solid grey",
          }}
        ></div>
        <button
          style={{
            color: "black",
            backgroundColor: "white",
            border: "2px solid grey",
          }}
        >
          <GoogleIcon style={{ marginRight: "5px" }} />
          Google로 회원가입
        </button>
        <div
          className="register"
          style={{
            display: "flex",
            justifyContent: "end",
            marginTop: "15px",
            marginRight: "5px",
          }}
        >
          <a
            style={{
              cursor: "pointer",
            }}
            onClick={(e) => {
              e.preventDefault();
              navigate("/login");
            }}
          >
            이미 계정이 있나요? 로그인
          </a>
        </div>
      </form>
    </LoginDiv>
  );
}

export default Register;
