import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, clearUser } from "./Reducer/userSlice.js";
import firebase from "./firebase.js";

import Heading from "./Component/Heading";
import Upload from "./Component/Post/Upload";
import Edit from "./Component/Post/Edit";
import Home from "./Component/Home";
import Footer from "react-footer-comp";

import Login from "./Component/User/Login";
import Register from "./Component/User/Register";
import PostArea from "./Component/Post/PostArea";
import Places from "./Component/Place/Places";
import Care from "./Component/Care/Care";
import CareUpload from "./Component/Care/CareUpload";
import MyPage from "./Component/User/MyPage";
import Community from "./Component/Community";
import PlaceUpload from "./Component/Place/PlaceUpload";
import PlaceDetail from "./Component/Place/PlaceDetail";
import PetUpload from "./Component/Pet/PetUpload";
import ChatRoom from "./Component/Message/ChatRoom";
import WriterChatRoom from "./Component/Message/WriterChatRoom";
import ScrollButton from "./Component/Element/ScrollButton";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((userInfo) => {
      if (userInfo !== null) {
        dispatch(loginUser(userInfo.multiFactor.user));
      } else {
        dispatch(clearUser());
      }
    });
  }, [user]);

  return (
    <>
      <Heading />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/community" element={<Community />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/post/:postNum" element={<PostArea />} />
        <Route path="/edit/:postNum" element={<Edit />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path={`/mypage/:displayName`}
          element={<MyPage name={user.displayName} />}
        />
        <Route path="/petUpload" element={<PetUpload />} />
        <Route path="/place" element={<Places />} />
        <Route path="/place/:placeNum" element={<PlaceDetail />} />
        <Route path="/placeUpload" element={<PlaceUpload />} />
        <Route path="/care" element={<Care />} />
        <Route path="/careUpload" element={<CareUpload />} />
        <Route path={`/care/message/:carePostNum`} element={<ChatRoom />} />
        <Route
          path={`/care/author_message/:carePostNum`}
          element={<WriterChatRoom />}
        />
      </Routes>
      <ScrollButton />
      <Footer
        copyrightIcon
        height="15rem"
        bgColor={"black"}
        copyrightIconStyle={{ color: "white", fontSize: 16, marginRight: 10 }}
        copyrightTextStyle={{ color: "white", fontSize: 16, marginRight: 10 }}
        textStyle={{ color: "white", fontSize: 16, marginRight: 10 }}
        text={"(주)펫커스 Copyright(C) Petcus. All Right Reserved"}
        position={"absolute"}
        bottom={0}
      ></Footer>
    </>
  );
}

export default App;
