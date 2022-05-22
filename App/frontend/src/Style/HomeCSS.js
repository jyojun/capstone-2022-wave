import styled from "@emotion/styled";
const HomeDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @-webkit-keyframes fadein {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 3;
      transform: none;
    }
  }

  -webkit-animation: fadein 2s;
`;
const BannerDiv = styled.div`
  width: 100%;
  height: 20rem;
  margin-bottom: 10rem;

  @media (max-width: 756px) {
    width: 100%;
  }
`;
const DailyLifeDiv = styled.div`
  max-width: 756px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 756px) {
    width: 100%;
  }

  h3 {
    font-weight: bold;
    margin-bottom: 3rem;
  }

  @media (max-width: 756px) {
    width: 100%;
  }
  @-webkit-keyframes fadein {
    from {
      opacity: 0;
      transform: translateY(50px);
    }

    to {
      opacity: 3;
      transform: none;
    }
  }

  -webkit-animation: fadein 2s;
`;

export { HomeDiv, BannerDiv, DailyLifeDiv };
