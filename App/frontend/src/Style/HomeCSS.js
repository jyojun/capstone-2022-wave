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
  width: 60%;
  marginbottom: 10rem;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const NewsDiv = styled.div`
  margin-top: 10rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .main {
    max-width: 1000px;
    width: 100%;
    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 3rem;
      margin-bottom: 3rem;
    }
  }

  @media (max-width: 756px) {
    width: 90%;
    .main {
      .grid {
        display: flex;
        flex-direction: column;
      }
    }
  }
`;

const SliderDiv = styled.div`
  width: 100%;
  background: #f8f8fa;
  display: flex;
  justify-content: center;
  .main {
    max-width: 1200px;
    width: 100%;
    margin-top: 5rem;
    background: #f8f8fa;
    @media (max-width: 1200px) {
      width: 90%;
    }
  }
`;

const DailyLifeDiv = styled.div`
  max-width: 756px;
  width: 100%;
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    font-weight: bold;
    margin-bottom: 3rem;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10rem;
  }

  @media (max-width: 756px) {
    width: 90%;

    .grid {
      display: flex;
      flex-direction: column;
    }
  }
  // @-webkit-keyframes fadein {
  //   from {
  //     opacity: 0;
  //     transform: translateY(50px);
  //   }

  //   to {
  //     opacity: 3;
  //     transform: none;
  //   }
  // }

  // -webkit-animation: fadein 2s;
`;

export { HomeDiv, BannerDiv, NewsDiv, SliderDiv, DailyLifeDiv };
