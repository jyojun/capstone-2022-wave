import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Navigation from "./Navigation";
import Board from "../pages/Board";
import Register from "../pages/Register";

const AppRouter = () => {
    return (
        <Router>
            <Navigation/>
            <Routes>
                <>
                <Route path="/" element={<Home />}></Route>
                <Route path="/board" element={<Board />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                </>
            </Routes>
        </Router>
    )
}

export default AppRouter