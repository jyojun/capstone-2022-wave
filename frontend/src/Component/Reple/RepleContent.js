import React, { useState, useEffect, useRef } from "react";
import { RepleContentDiv } from "../../Style/RepleCSS";
import { useSelector } from "react-redux";

function RepleContent(props) {
  const [ModalFlag, setModalFlag] = useState(false);
  const user = useSelector((state) => state.user);
  const ref = useRef();
  useOnClickOutside(ref, () => setModalFlag(false)); // ref제외 한 바깥을 누를때 handler함수 호출
  return (
    <RepleContentDiv key={props.key}>
      <div className="author">
        <p>{props.Reple.author.displayName}</p>
        {props.Reple.author.uid === user.uid && (
          <div className="modalControl">
            <span onClick={() => setModalFlag(true)}>···</span>
            {ModalFlag && (
              <div className="modalDiv" ref={ref}>
                <p>수정</p>
                <p className="delete">삭제</p>
              </div>
            )}
          </div>
        )}
      </div>
      <p>{props.Reple.reple}</p>
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
