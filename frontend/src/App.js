import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Heading from "./Component/Heading";
import List from "./Component/Post/List";
import Upload from "./Component/Post/Upload";
import { useState } from "react";

function App() {
  const [ContentList, setContentList] = useState([]);
  return (
    <>
      <BrowserRouter>
        <Heading />
        <Routes>
          <Route
            path="/List"
            element={
              <List ContentList={ContentList} setContentList={setContentList} />
            }
          />
          <Route
            path="/upload"
            element={
              <Upload
                ContentList={ContentList}
                setContentList={setContentList}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
