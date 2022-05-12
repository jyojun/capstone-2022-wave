import React, { useState, useEffect, useRef } from "react";
import { RepleContentDiv, RepleUploadDiv } from "../../Style/RepleCSS";
import { useSelector } from "react-redux";
import axios from "axios";
import Avatar from "react-avatar";

function RepleContent(props) {
  const [ModalFlag, setModalFlag] = useState(false);
  const [EditFlag, setEditFlag] = useState(false);
  const [Reple, setReple] = useState(props.Reple.reple);

  const user = useSelector((state) => state.user);
  const ref = useRef();
  useOnClickOutside(ref, () => setModalFlag(false)); // ref제외 한 바깥을 누를때 handler함수 호출

  const SubmitHandler = (e) => {
    e.preventDefault();
    let body = {
      uid: user.uid,
      reple: Reple,
      postId: props.Reple.postId,
      repleId: props.Reple._id,
    };

    axios.post("/api/reple/edit", body).then((res) => {
      if (res.data.success) {
        alert("댓글 수정이 완료하였습니다.");
      } else {
        alert("댓글 수정이 실패하였습니다.");
      }
      return window.location.reload();
    });
  };

  const DeleteHandler = (e) => {
    e.preventDefault();
    if (window.confirm("정말로 삭제하시겠습니까?")) {
      let body = {
        repleId: props.Reple._id,
        postId: props.Reple.postId,
      };
      axios
        .post("/api/reple/delete", body)
        .then((res) => {
          if (res.data.success) {
            alert("댓글이 삭제되었습니다.");
            window.location.reload();
          }
        })
        .catch((err) => {
          alert("댓글 삭제에 실패하였습니다.");
        });
    }
  };
  return (
    <RepleContentDiv key={props.key}>
      <div className="author">
        <div className="authorInfo">
          <Avatar
            size="25"
            round={true}
            src={props.Reple.author.photoURL}
            style={{
              border: "1px solid #c6c6c6",
              marginRight: "5px",
            }}
          />
          <p>{props.Reple.author.displayName}</p>
        </div>
        {props.Reple.author.uid === user.uid && (
          <div className="modalControl">
            <span onClick={() => setModalFlag(true)}>···</span>
            {ModalFlag && (
              <div className="modalDiv" ref={ref}>
                <p
                  onClick={() => {
                    setEditFlag(true);
                    setModalFlag(false);
                  }}
                >
                  수정
                </p>
                <p
                  onClick={(e) => {
                    DeleteHandler(e);
                  }}
                  className="delete"
                >
                  삭제
                </p>
              </div>
            )}
          </div>
        )}
      </div>
      {EditFlag ? (
        <RepleUploadDiv>
          <form>
            <input
              type="text"
              value={Reple}
              onChange={(e) => setReple(e.currentTarget.value)}
            />
            <button onClick={(e) => SubmitHandler(e)}>등록</button>
          </form>
          <div className="cancel">
            <button
              onClick={(e) => {
                e.preventDefault();
                setEditFlag(false);
              }}
            >
              취소
            </button>
          </div>
        </RepleUploadDiv>
      ) : (
        <p>{props.Reple.reple}</p>
      )}
    </RepleContentDiv>
  );
}

function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

export default RepleContent;
