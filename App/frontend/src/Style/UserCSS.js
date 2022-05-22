import styled from "@emotion/styled";

const LoginDiv = styled.div`
  width: 50%;
  max-width: 360px;
  @media (max-width: 756px) {
    width: 100%;
  }
  margin: 0 auto;
  margin-top: 10rem;
  margin-bottom: 10rem;
  label {
    margin-top: 10px;
  }
  form {
    width: 100%;
    padding: 20px;
    box-shadow: 0px 19px 38px rgba(0, 0, 0, 0.03),
      0px 15px 12px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    label {
      font-weight: bold;
    }
    input {
      border-radius: 10px;
      border: 1px solid #c6c6c6;
      padding: 10px;
      margin-bottom: 10px;

      &:active,
      &:focus {
        outline: none;
      }
    }
    button {
      padding: 10px 10px;
      border-radius: 5px;
      background-color: #6bc4c7;
      color: white;
      border: 1px solid #6bc4c7;
      margin-top: 10px;
      &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
      }
    }
    @media (max-width: 756px) {
      width: 100%;
    }
  }
`;

export default LoginDiv;
