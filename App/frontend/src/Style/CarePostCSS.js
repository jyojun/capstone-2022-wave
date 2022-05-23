import styled from "@emotion/styled";

const CareDiv = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  max-width: 756px;
  margin: 0 auto;
  margin-top: 5rem;
  @media (max-width: 756px) {
    width: 90%;
  }
`;
const CarePostListDiv = styled.div`
  width: 100%;
  background: white;
  border: 2px solid #eeeeee;
  // padding: 5px;
  border-radius: 5px;

  @-webkit-keyframes fadein {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 3;
      transform: none;
    }
  }

  -webkit-animation: fadein 2s;
`;

const CarePostItemDiv = styled.div`
  padding: 1rem;
  background: transparent;
  border-bottom: 2px solid #eeeeee;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 20px;
  overflow: auto;
  // border-radius: 5px;
  @media (max-width: 756px) {
    grid-template-columns: 1fr 2fr;
  }
  div.button {
    display: flex;
    justify-content: end;
    button {
      border: none;
      background: white;
      font-family: roboto;
      font-weight: bold;
    }
  }
  p {
    color: #6e6c6c;
    font-size: 11px;
    margin-top: 12px;
  }

  p.time {
  }
`;

export { CareDiv, CarePostListDiv, CarePostItemDiv };
