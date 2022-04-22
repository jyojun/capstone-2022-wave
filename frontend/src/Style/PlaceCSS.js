import styled from "@emotion/styled";

const PlacesDiv = styled.div`
  padding-top: 5rem;
  padding-bottom: 1rem;
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 1200px) {
    width: 90%;
  }
`;

const DetailDiv = styled.div`
  padding-top: 1rem;
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

export { PlacesDiv, PlaceItemDiv, DetailDiv };
