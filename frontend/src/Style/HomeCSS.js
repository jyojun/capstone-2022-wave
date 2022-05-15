import styled from "@emotion/styled";

const HomeDiv = styled.div`
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

export { HomeDiv };
