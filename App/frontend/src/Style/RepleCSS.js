import styled from "@emotion/styled";

const RepleAreaDiv = styled.div`
  padding-bottom: 1rem;
  max-width: 756px;
  margin: 0 auto !important;
  @media (max-width: 756px) {
    width: 90%;
  }
`;

const RepleUploadDiv = styled.div`
  width: 100%;

  form {
    width: 100%;
    display: grid;
    grid-template-columns: 7fr 1fr;
    grid-template-rows: 45px;
    @media (max-width: 756px) {
      grid-template-columns: 4.5fr 0.5fr;
      grid-template-rows: 40px;
    }

    input {
      padding: 7px;
      height: 100%;
      border-radius: 10px 0px 0px 10px;
      border: 0.5px solid #c6c6c6;

      &:active,
      &:focus {
        outline: none;
      }
    }
    button {
      height: 100%;
      border-radius: 0px 10px 10px 0px;
      border: 0.5px solid #c6c6c6;
      font-size: 15px;
      color: white;
      background-color: #4daac3;
      &:hover,
      &:active {
        border: 0.5px solid darkgrey;
        background-color: darkgrey;
      }
    }
  }
  .cancel {
    display: flex;
    justify-content: end;
    button {
      margin-top: 5px;
      font-size: 12px;
      border-radius: 5px;
      padding: 2px 5px;
      border: 1px solid #c6c6c6;
    }
  }
`;

const RepleListDiv = styled.div`
  margin-top: 1rem;
`;

const RepleContentDiv = styled.div`
  border: 0.5px solid #dbdbdb;
  padding: 20px 10px;
  margin-bottom: 10px;
  .author {
    display: flex;

    margin-bottom: 5px;
    justify-content: space-between;
    align-items: center;
    p {
      font-size: 12px;
      font-weight: bold;
      color: darkgrey;
    }
    .authorInfo {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .modalControl {
      cursor: pointer;
      position: relative;
      span {
        user-select: none;
      }
      .modalDiv {
        position: absolute;
        top: 15px;
        right: 10px;
        width: 80px;
        height: 60px;
        overflow: hidden;
        padding: 10px;
        cursor: auto;
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: space-between;
        align-items: center;

        background-color: whitesmoke;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.03),
          0px 7.5px 6px rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        p {
          color: black;
          margin-bottom: 0px;
          cursor: pointer;
          &.delete {
            color: red;
          }
        }
      }
    }
  }
  p {
    margin-bottom: 0px;
    font-size: 14px;
  }
`;

export { RepleAreaDiv, RepleUploadDiv, RepleListDiv, RepleContentDiv };
