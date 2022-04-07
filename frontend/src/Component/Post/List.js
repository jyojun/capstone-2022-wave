import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

function List(props) {
  const [Text, setText] = useState("");
  useEffect(() => {
    let body = {
      text: "Hello",
    };

    axios
      .post("/api/test", body)
      .then((res) => {
        console.log(res);
        setText(res.data.text);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h3>List</h3>
      <h3>{Text}</h3>
      {props.ContentList.map((content, idx) => {
        return (
          <div
            key={idx}
            style={{
              width: "100%",
              marginLeft: "1rem",
              borderBottom: "solid black 1px",
            }}
          >
            내용 : {content}
          </div>
        );
      })}
      <Button>Test</Button>
    </div>
  );
}

export default List;
