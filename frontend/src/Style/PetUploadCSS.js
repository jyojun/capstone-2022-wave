import styled from "@emotion/styled";

const PetUploadDiv = styled.div`
  width: 50%;
  margin-top: 5rem;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    text-align: center;
    font-weight: bold;
  }
  form {
    padding: 4rem;
    box-shadow: 0px 19px 38px rgba(0, 0, 0, 0.03),
      0px 15px 12px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    label {
      font-weight: bold;
    }
    select {
      border-radius: 10px;
      border: 1px solid #c6c6c6;
      padding: 10px;
      margin-bottom: 10px;
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
    button.button {
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
  }
`;

export { PetUploadDiv };
