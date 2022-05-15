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
  background: whitesmoke;
  padding: 10px;

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
  background: white;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 10px;
  overflow: auto;
  @media (max-width: 756px) {
    grid-template-columns: 1fr 3fr;
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
`;

export { CareDiv, CarePostListDiv, CarePostItemDiv };
