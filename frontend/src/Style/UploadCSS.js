import styled from "@emotion/styled";

const UploadDiv = styled.div`
  width: 100%;
  margin-top: 5rem;
  margin-bottom: 5rem;
`;

const UploadForm = styled.form`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  select {
    margin-bottom: 2rem;
  }
  #title {
    border-radius: 10px;
    border: 1px solid #dbdbdb;
    padding: 10px;
    margin-bottom: 15px;
    &:active,
    &:focus {
      outline: none;
    }
  }
  textarea {
    min-height: 350px;
    resize: none;
    margin-top: 7px;
    border-radius: 10px;
    border: 1px solid #dbdbdb;
    padding: 10px;
    &:active,
    &:focus {
      outline: none;
    }
    &::-webkit-scrollbar {
      width: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #9A9DB;
      border-radius: 15px;
      background-clip: padding-box;
      border: 2px solid transparent;
    }
    &::-webkit-scrollbar-track {
      background-color: #dbdbdb;
      border-radius: 15px;
      box-shadow: inset 0px 0px 5px whitesmoke;
    }
  }
  label {
    font-weight: bold;
    margin-top: 10px;
  }
`;

const UploadButtonDiv = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;
  button {
    border-radius: 5px;
    padding: 5px 10px;
    background-color: #4daac3;
    color: white;
    border: none;
    &:hover {
      background-color: white;
      color: black;
      border: 1px solid black;
    }
    &.cancel {
      margin-left: 10px;
      background-color: white;
      color: black;
      border: 1px solid black;
      &:hover {
        background-color: black;
        color: white;
        border: 1px solid black;
      }
    }
  }
`;

export { UploadDiv, UploadForm, UploadButtonDiv };
