import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Avatar from "react-avatar";
import firebase from "../../firebase.js";

function MyPage() {
  const user = useSelector((state) => state.user);
  const [ProfileUser, setProfileUser] = useState({});
  const [CurrentImage, setCurrentImage] = useState("");
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    let body = {
      displayName: params.displayName,
    };
    axios.post("/api/user/getUser", body).then((res) => {
      if (res.data.success) {
        setProfileUser(res.data.userInfo);
        console.log("유저 불러오기 성공");
      } else {
        alert("해당 유저가 없습니다.");
      }
      console.log("불러온 유저 정보 : ", ProfileUser);
    });
  }, []);

  const ImageUpload = (e) => {
    console.log(e.target.files);
    let formData = new FormData();
    formData.append("file", e.target.files[0]);
    axios.post("/api/user/profile/img", formData).then((res) => {
      console.log(res.data);
      setCurrentImage(res.data.filePath);
    });
  };

  const SaveProfile = async (e) => {
    e.preventDefault();

    try {
      await firebase.auth().currentUser.updateProfile({
        photoURL: CurrentImage,
      });
    } catch (err) {
      return alert("프로필 저장에 실패하였습니다.");
    }

    let body = {
      uid: user.uid,
      photoURL: CurrentImage,
    };
    axios.post("/api/user/profile/update", body).then((res) => {
      if (res.data.success) {
        alert("프로필 수정이 완료되었습니다.");
        window.location.reload();
      } else {
        return alert("프로필 저장에 실패하였습니다.");
      }
    });
  };

  useEffect(() => {
    // 강제적으로 마이페이지에 접근하면 처음의 user정보가 빈값인 상태이므로 userSlice에 isLoading 추가
    // 로딩이 끝난 후에 accessToken이 false일 때 login페이지로 이동
    if (user.isLoading && !user.accessToken) {
      alert("회원만 볼 수 있습니다.");
      navigate("/login");
    }
  }, [user]);
  return (
    <div>
      {ProfileUser ? (
        <div style={{ width: "100%", height: "100vh" }}>
          <form
            style={{
              width: "50%",
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "2rem",
            }}
          >
            <label>
              {user.uid === ProfileUser.uid && (
                <input
                  type="file"
                  accept="image/"
                  style={{ display: "none" }}
                  onChange={(e) => ImageUpload(e)}
                />
              )}

              <Avatar
                size="100"
                round={true}
                src={CurrentImage ? CurrentImage : ProfileUser.photoURL}
                style={{
                  border: "1px solid #c6c6c6",
                  cursor: "pointer",
                }}
              />
              <p>{ProfileUser.displayName}</p>
            </label>
            <button onClick={(e) => SaveProfile(e)}>저장</button>
          </form>
        </div>
      ) : (
        <div>해당 유저가 없습니다.</div>
      )}
    </div>
  );
}

export default MyPage;
