import styled from "@emotion/styled";

const ListDiv = styled.div``;

const ListItem = styled.div`
  width: 100%;
  height: auto;
  min-height: 120px;
  background: white;
  margin-top: 5vh;
  margin-bottom: 2vh;
  padding: 18px;
  // box-shadow: 0px 19px 38px rgba(0, 0, 0, 0.03),
  //   0px 15px 12px rgba(0, 0, 0, 0.1);
  a {
    color: black;
    text-decoration: none;
    .title {
      font-size: 18px;
      font-weight: bold;
    }
  }
  .author {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 8px 0px;
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      p {
        margin-left: 8px;
        margin-bottom: 0px;
        color: black;
        font-size: 14px;
      }
    }
    p.time {
      color: #6e6c6c;
      font-size: 11px;
      margin-top: 12px;
    }
  }
  div.repleNum {
    display: flex;
    justify-content: end;
    font-size: 18px;
    color: #6e6c6c;
  }
`;

export { ListDiv, ListItem };
