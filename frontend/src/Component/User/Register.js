import React, { useState } from "react";
import LoginDiv from "../../Style/UserCSS.js";
import firebase from "../../firebase.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [PasswordCheck, setPasswordCheck] = useState("");
  const [Flag, setFlag] = useState(false);
  let navigate = useNavigate();

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
    let createdUser = await firebase
      .auth()
      .createUserWithEmailAndPassword(Email, Password);

    await createdUser.user.updateProfile({
      displayName: Name,
    });

    console.log(createdUser.user);
    let body = {
      eamil: createdUser.user.multiFactor.user.email,
      displayName: createdUser.user.multiFactor.user.displayName,
      uid: createdUser.user.multiFactor.user.uid,
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
  return (
    <LoginDiv>
      <form>
        <label>이름</label>
        <input
          type="name"
          value={Name}
          onChange={(e) => {
            setName(e.currentTarget.value);
          }}
        />
        <label>Email</label>
        <input
          type="email"
          value={Email}
          onChange={(e) => {
            setEmail(e.currentTarget.value);
          }}
        />
        <label>Password</label>
        <input
          type="password"
          value={Password}
          minLength={8}
          onChange={(e) => {
            setPassword(e.currentTarget.value);
          }}
        />
        <label>Password Check</label>
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
      </form>
    </LoginDiv>
  );
}

export default Register;
