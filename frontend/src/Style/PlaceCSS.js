import styled from "@emotion/styled";

const PlacesDiv = styled.div`
  padding-top: 1rem;
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
  min-height: 120px;
  background: #ffffff;
  margin-top: 5vh;
  margin-bottom: 5vh;
  padding: 20px;
  box-shadow: 0px 19px 38px rgba(0, 0, 0, 0.03),
    0px 15px 12px rgba(0, 0, 0, 0.1);
`;

export { PlacesDiv, PlaceItemDiv, DetailDiv };
