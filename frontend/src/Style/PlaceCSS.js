import styled from "@emotion/styled";

const PlacesDiv = styled.div`
  padding-bottom: 1rem;
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 1200px) {
    width: 90%;
  }
`;

const DetailDiv = styled.div`
  width: 100%;
  padding-top: 5rem;
  padding-bottom: 1rem;
  max-width: 1000px;
  margin: 0 auto;
  @media (max-width: 700px) {
    width: 90%;
  }

  div.detail-top {
    img {
      width: 30%;
      aspect-ratio: 1/1;
    }
    flex-direction: row;
    @media (max-width: 700px) {
      width: 100%;
    }
  }
`;

const PlaceItemDiv = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 1vh;
  min-height: 120px;
  background: #ffffff;
  padding: 10px;
  a {
    text-decoration: none;
    color: black;
  }
  div.repleNum {
    margin-top: 5rem;
    display: flex;
    justify-content: front;
  }
`;

const PlaceSearchSortDiv = styled.div`
  width: 100%;
  margin-top: 1rem;
  margin-left: 1.5rem;
  display: flex;
  justify-content: space-between;
  input {
    width: 14rem;
    border: none;
    border-bottom: 1px solid black;
    ::placeholder {
      color: #408fb9;
      font-size: 12px;
    }
    &:active,
    &:focus {
      outline: none;
    }
  }
  button {
    border: none;
    background-color: white;
    margin-right: 0.5rem;
  }

  .DropdownButton {
    padding: 0px 5px;
    margin-right: 2.5rem;
    border: 1px solid #c6c6c6;
    &:active,
    &:focus {
      outline: none;
    }
  }
`;

const AreaFilterDiv = styled.div`
  width: 100px;
  display: flex;
  flex-direction: column;
  position: fixed;
  margin-top: 10rem;
  top: 10%;
  left: 5%;
  font-weight: bold;
  color: grey;
  div.top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 2px solid black;
    color: black;
    margin-bottom: 1px;
  }
  div.area-names {
    display: flex;
    flex-direction: column;
    button {
      text-align: left;
      border: none;
      background: rgba(1, 1, 1, 0);
      color: #707070;
      &:active,
      &:hover {
        color: #408fb9;
      }
    }
  }
  @media (max-width: 1400px) {
    visibility: hidden;
    position: static;
    width: 85%;
    margin: 0 auto;
    div.area-names {
      display: flex;
      flex-direction: row;
    }
  }
`;

export {
  PlacesDiv,
  PlaceItemDiv,
  DetailDiv,
  PlaceSearchSortDiv,
  AreaFilterDiv,
};
