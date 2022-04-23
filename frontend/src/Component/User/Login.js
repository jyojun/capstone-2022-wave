import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginDiv from "../../Style/UserCSS.js";
import mainLogo from "../../pecus_logo.png";
import GoogleIcon from "@mui/icons-material/Google";

import firebase from "../../firebase.js";
import { useSelector } from "react-redux";

function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ErrorMsg, setErrorMsg] = useState("");

  let navigate = useNavigate();
  const user = useSelector((state) => state.user);

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
    if (user.accessToken) {
      navigate("/");
    }
  }, [user]);

  useEffect(() => {
    setTimeout(() => {
      setErrorMsg("");
    }, 5000); // 5초 뒤에 에러메세지 초기화
  }, [ErrorMsg]);
  return (
    <LoginDiv>
      <form>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "2rem",
            marginTop: "2rem",
          }}
        >
          <img style={{ width: "50%" }} src={mainLogo} />
          <p
            style={{
              width: "50%",
              fontFamily: "georgia sans-serif",
              textAlign: "center",
              marginTop: "1rem",
            }}
          >
            Welcome to Petcus Now Join Us
          </p>
        </div>
        <input
          type="email"
          value={Email}
          required
          onChange={(e) => {
            setEmail(e.currentTarget.value);
          }}
          placeholder="email"
        />
        <input
          type="password"
          value={Password}
          required
          onChange={(e) => {
            setPassword(e.currentTarget.value);
          }}
          placeholder="password"
        />
        {ErrorMsg != "" && <p>{ErrorMsg}</p>}
        <button onClick={(e) => SignInFunc(e)}>로그인</button>
        <button
          style={{
            color: "black",
            backgroundColor: "white",
            border: "2px solid grey",
          }}
        >
          <GoogleIcon style={{ marginRight: "5px" }} />
          Google로 로그인
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
              navigate("/register");
            }}
          >
            회원가입
          </a>
        </div>
      </form>
    </LoginDiv>
  );
}

export default Login;
