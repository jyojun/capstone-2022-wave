import React from "react";
import { Form } from "react-bootstrap";
import axios from "axios";

// image 파일만 업로드
// 업로드 이미지 -> 서버에 저장
// 저장한 이미지 경로 -> client 전송
// 경로를 -> post model에 저장
function ImageUpload(props) {
  const FileUpload = (e) => {
    console.log(e.target.files);
    let formData = new FormData();
    formData.append("file", e.target.files[0]);
    axios.post("/api/post/image/upload", formData).then((res) => {
      // console.log(res.data);
      props.setImage(res.data.filePath);
    });
  };
  return (
    <div>
      <Form.Control
        style={{
          borderRadius: "5px",
        }}
        type="file"
        className="shadow-none"
        accept="image/"
        onChange={(e) => FileUpload(e)}
      />
    </div>
  );
}
export default ImageUpload;
