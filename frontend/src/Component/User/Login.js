import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginDiv from "../../Style/UserCSS.js";

import firebase from "../../firebase.js";

function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ErrorMsg, setErrorMsg] = useState("");

  let navigate = useNavigate();

  const SignInFunc = async (e) => {
    e.preventDefault();
    if (!(Email && Password)) {
      return alert("로그인 정보를 모두 작성하세요.");
    }
    try {
      await firebase.auth().signInWithEmailAndPassword(Email, Password);
      navigate("/");
    } catch (err) {
      if (err.code === "auth/user-not-found") {
        setErrorMsg("존재하지 않는 이메일 입니다.");
      } else if (err.code === "auth/wrong-password") {
        setErrorMsg("비밀번호가 일치하지 않습니다.");
      } else {
        setErrorMsg("로그인이 실패하였습니다.");
      }
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setErrorMsg("");
    }, 5000); // 5초 뒤에 에러메세지 초기화
  }, [ErrorMsg]);
  return (
    <LoginDiv>
      <form>
        <label>Email</label>
        <input
          type="email"
          value={Email}
          required
          onChange={(e) => {
            setEmail(e.currentTarget.value);
          }}
        />
        <label>Password</label>
        <input
          type="password"
          value={Password}
          required
          onChange={(e) => {
            setPassword(e.currentTarget.value);
          }}
        />
        {ErrorMsg != "" && <p>{ErrorMsg}</p>}
        <button onClick={(e) => SignInFunc(e)}>로그인</button>
        <button
          onClick={(e) => {
            e.preventDefault();
            navigate("/register");
          }}
        >
          회원가입
        </button>
      </form>
    </LoginDiv>
  );
}

export default Login;
