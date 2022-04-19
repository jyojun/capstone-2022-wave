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
import MyPage from "./Component/User/MyPage";
import Community from "./Component/Community";
import PlaceUpload from "./Component/Place/PlaceUpload";
import PlaceDetail from "./Component/Place/PlaceDetail";

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
        <Route path="/place" element={<Places />} />
        <Route path="/place/:placeNum" element={<PlaceDetail />} />
        <Route path="/placeUpload" element={<PlaceUpload />} />
        <Route path="/care" element={<Care />} />
      </Routes>
      <Footer
        copyrightIcon
        height={100}
        bgColor={"#98EBE8"}
        copyrightText
        copyrightIconStyle={{ color: "white", fontSize: 20, marginRight: 10 }}
        copyrightTextStyle={{ color: "white", fontSize: 20, marginRight: 10 }}
        textStyle={{ color: "yellow", fontSize: 16, marginRight: 10 }}
        text={"All rights reserved."}
        position={"absolute"}
        bottom={0}
      />
    </>
  );
}

export default App;
