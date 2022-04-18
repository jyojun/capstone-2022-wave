import styled from "@emotion/styled";

const ListDiv = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  max-width: 756px;
  margin: 0 auto;
  @media (max-width: 756px) {
    width: 90%;
  }
`;

const ListItem = styled.div`
  width: 100%;
  height: auto;
  min-height: 120px;
  background: #ffffff;
  margin-top: 5vh;
  margin-bottom: 5vh;
  padding: 20px;
  box-shadow: 0px 19px 38px rgba(0, 0, 0, 0.03),
    0px 15px 12px rgba(0, 0, 0, 0.1);
  a {
    color: black;
    text-decoration: none;
    .title {
      font-weight: bold;
    }
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
        margin-left: 10px;
        margin-bottom: 0px;
        color: darkgrey;
      }
    }
    p.time {
      color: grey;
      font-size: 13px; 
    }
`;

export { ListDiv, ListItem };
