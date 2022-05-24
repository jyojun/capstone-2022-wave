import styled from "@emotion/styled";

const PostDiv = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  max-width: 756px;
  margin: 0 auto;
  @media (max-width: 756px) {
    width: 90%;
  }

  // @-webkit-keyframes fadein {
  //   from {
  //     opacity: 0;
  //     transform: translateY(50px);
  //   }
  //   to {
  //     opacity: 3;
  //     transform: none;
  //   }
  // }

  // -webkit-animation: fadein 2s;
`;

const SpinnerDiv = styled.div`
  width: 100%;
  height: calc(100vh - 2rem);
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
`;

const Post = styled.div`
  margin-top: 5rem;
  width: 100%;
  height: auto;
  background: #ffffff;
  padding: 30px 20px;
  // box-shadow: 0px 19px 38px rgba(0, 0, 0, 0.03),
  //   0px 15px 12px rgba(0, 0, 0, 0.1);
  h1 {
    font-size: 23px;
    font-weight: bold;
    padding-bottom: 1rem;
    border-bottom: 1px solid #ededed;
  }
  .author {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0px;
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      p {
        margin-left: 7px;
        margin-bottom: 0px;
        font-size: 14px;
        color: black;
      }
    }
    p.time {
      color: #6e6c6c;
      font-size: 11px;
    }
  }
  p {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  div.repleNum {
    display: flex;
    justify-content: end;
  }
`;

const BtnDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 20px 0;
  button {
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 13px;
    font-weight: bold;
    &.edit {
      font-size: 10px;
      background-color: white;
      color: black;
      border: 1px solid black;
      &:hover {
        background-color: black;
        color: white;
        border: 1px solid black;
      }
    }
    &.delete {
      font-size: 10px;
      margin-left: 10px;
      background-color: red;
      color: white;
      border: 1px solid red;
      &:hover {
        background-color: white;
        color: red;
        border: 1px solid red;
      }
    }
  }
`;

export { PostDiv, SpinnerDiv, Post, BtnDiv };
