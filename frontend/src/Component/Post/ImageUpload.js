import React from "react";
import { Form } from "react-bootstrap";
import { axios } from "axios";

// image 파일만 업로드
// 업로드 이미지 -> 서버에 저장
// 저장한 이미지 경로 -> client 전송
// 경로를 -> post model에 저장
function ImageUpload() {
  return (
    <div>
      <Form.Control type="file" className="shadow-none" accept="image/" />
    </div>
  );
}
export default ImageUpload;
