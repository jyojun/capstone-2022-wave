import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginUser, clearUser } from "./Reducer/userSlice.js";
import firebase from "./firebase.js";

import Heading from "./Component/Heading";
import List from "./Component/Post/List";
import Upload from "./Component/Post/Upload";
import Detail from "./Component/Post/Detail";
import Edit from "./Component/Post/Edit";
import Home from "./Component/Home";
import Footer from "react-footer-comp";

import Login from "./Component/User/Login";
import Register from "./Component/User/Register";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((userInfo) => {
      console.log("userInfo: ", userInfo);
      if (userInfo !== null) {
        dispatch(loginUser(userInfo.multiFactor.user));
      }
    });
  }, []);

  useEffect(() => {
    console.log("user : ", user);
  }, [user]);
  useEffect(() => {
    //firebase.auth().signOut();
  }, []);
  return (
    <>
      <Heading />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/List" element={<List />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/post/:postNum" element={<Detail />} />
        <Route path="/edit/:postNum" element={<Edit />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer
        copyrightIcon
        height={100}
        bgColor={"rgb(41, 128, 185)"}
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
