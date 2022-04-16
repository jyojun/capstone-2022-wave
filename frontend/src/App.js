import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, clearUser } from "./Reducer/userSlice.js";
import firebase from "./firebase.js";

import Heading from "./Component/Heading";
import List from "./Component/Post/List";
import Upload from "./Component/Post/Upload";
import Edit from "./Component/Post/Edit";
import Home from "./Component/Home";
import Footer from "react-footer-comp";

import Login from "./Component/User/Login";
import Register from "./Component/User/Register";
import PostArea from "./Component/Post/PostArea";
import Place from "./Component/Place/Place";
import Care from "./Component/Care/Care";

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
  }, []);

  return (
    <>
      <Heading />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/List" element={<List />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/post/:postNum" element={<PostArea />} />
        <Route path="/edit/:postNum" element={<Edit />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/place" element={<Place />} />
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
