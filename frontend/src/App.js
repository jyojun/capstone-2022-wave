import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Heading from "./Component/Heading";
import List from "./Component/Post/List";
import Upload from "./Component/Post/Upload";
import Detail from "./Component/Post/Detail";
import Edit from "./Component/Post/Edit";
import Home from "./Component/Home";
import Footer from "react-footer-comp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Heading />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/List" element={<List />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/post/:postNum" element={<Detail />} />
          <Route path="/edit/:postNum" element={<Edit />} />
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
      </BrowserRouter>
    </>
  );
}

export default App;
