import styled from "@emotion/styled";

const ChatRoomDiv = styled.div`
  margin: 0 auto;
  margin-top: 5rem;
  margin-bottom: 10rem;
  max-width: 500px;
  padding: 20px;
  background: grey;
  @media (max-width: 500px) {
    width: 90%;
  }

  div.container {
    height: 40rem;
    background: white;
    div.message-box {
      @-webkit-keyframes fadein {
        from {
          transform: translateY(50px);
        }
        to {
          transform: none;
        }
      }

      -webkit-animation: fadein 1s;
    }
  }
  form {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: 4fr 1fr;
    grid-gap: 10px;
  }
  button.join-chatroom {
    width: 100%;
  }
`;
export { ChatRoomDiv };
