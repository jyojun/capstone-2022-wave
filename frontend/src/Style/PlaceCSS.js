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
  padding-top: 5rem;
  padding-bottom: 1rem;
  max-width: 1000px;
  margin: 0 auto;
  @media (max-width: 1000px) {
    width: 90%;
  }
`;

const PlaceItemDiv = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 1vh;
  min-height: 120px;
  background: #ffffff;
  padding: 20px;
  a {
    text-decoration: none;
    color: black;
  }
  div.repleNum {
    margin-top: 2rem;
    display: flex;
    justify-content: end;
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

export { PlacesDiv, PlaceItemDiv, DetailDiv, PlaceSearchSortDiv };
