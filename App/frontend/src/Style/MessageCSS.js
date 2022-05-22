import styled from "@emotion/styled";

const ChatRoomDiv = styled.div`
  margin: 0 auto;
  margin-top: 5rem;
  margin-bottom: 10rem;
  max-width: 500px;
  padding: 20px;
  background: white;
  @media (max-width: 500px) {
    width: 90%;
  }

  div.senders {
    padding: 10px;
    @include center;
    width: 100%;
    height: 700px;
    z-index: 10;
    overflow: hidden;
    box-shadow: 0 5px 30px rgba(0, 0, 0, 0.2);
    background: rgba(0, 0, 0, 0.5);
    background: transparent;
    border-radius: 20px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    display: flex;
    flex-direction: column;
    padding: ;
  }
  div.container {
    @include center;
    width: 100%;
    height: 700px;
    z-index: 10;
    overflow: hidden;
    box-shadow: 0 5px 30px rgba(0, 0, 0, 0.2);
    background: rgba(0, 0, 0, 0.5);
    background: transparent;
    border-radius: 20px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    button.back {
      position: absolute;
      top: 12%;
      z-index: 10;
      border: none;
      color: skyblue;
      background: none;
    }
    .chat-title {
      flex: 0 1 45px;
      position: relative;
      z-index: 2;
      width: 100%;
      border-bottom: 1px solid #ccc;
      color: #777;
      padding-top: 30px;
      padding-bottom: 5px;
      background-color: #fff;
      text-transform: uppercase;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;

      h1,
      h2 {
        font-weight: normal;
        font-size: 14px;
        margin: 0;
        padding: 0;
      }
      h2 {
        /* color: rgba(255, 255, 255, .8);*/
        font-size: 11px;
        letter-spacing: 1px;
      }
    }
  }
  .message-box {
    .me {
      width: 100%;
      display: flex;
      justify-content: end;
      margin-top: 20px;
      float: right;
      p.content {
        text-align: right;
        padding: 10px;
        border-radius: 30px;
        background-color: skyblue;
        height: 100%;
        white-space: pre-wrap;
        overflow-wrap: break-word;
      }
      p.time {
        font-size: 10px;
        height: auto;
        vertical-align: bottom;
      }
    }
    .sender {
      display: flex;
      width: 100%;
      margin-top: 20px;
      float: left;
      p.content {
        border-radius: 30px;
        padding: 10px;
        background-color: whitesmoke;
        height: 100%;
        white-space: pre-wrap;
        overflow-wrap: break-word;
      }
      p.time {
        font-size: 10px;
        height: auto;
        vertical-align: bottom;
      }
    }
  }

  form {
    margin-top: 1rem;
    margin-bottom: 1rem;
    display: grid;
    grid-template-columns: 4fr 1fr;
    grid-gap: 10px;
    border: 1px solid #c6c6c6;
    border-radius: 30px;

    input {
      border: none;
      padding: 10px;
      &:focus,
      &:active {
        border: none;
      }
      border-radius: 30px;
    }
    button {
      border: none;
      background: none;
      &:hover {
        color: skyblue;
      }
    }
  }

  button.join-chatroom {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100px;
    border: none;
    background: none;
    border-bottom: 1px solid #c6c6c6;
  }
`;
export { ChatRoomDiv };
