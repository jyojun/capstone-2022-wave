import styled from "@emotion/styled";

const PlacesDiv = styled.div`
  padding-bottom: 1rem;
  padding-left: 150px;
  max-width: 1400px;
  margin: 0 auto;
  @media (max-width: 1000px) {
    width: 90%;
    padding: 0;
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

const DetailDiv = styled.div`
  // position: absolute;
  // top: 50%;
  // left: 50%;
  // transform: translate(-50%, -50%);
  // z-index: 1;

  // width: 100%;
  // padding: 100px;
  // max-width: 1000px;
  // margin: 0 auto;
  // @media (max-width: 700px) {
  //   width: 90%;
  // }

  padding-top: 5rem;
  padding-bottom: 1rem;
  max-width: 756px;
  margin: 0 auto;
  @media (max-width: 756px) {
    width: 90%;
  }

  div.detail-top {
    img {
      width: 40%;
      aspect-ratio: 1/1;
      object-fit: cover;
    }
    flex-direction: row;
    @media (max-width: 700px) {
      width: 100%;
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
`;

const PlaceItemDiv = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 10vh;
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
  margin-top: 1.5rem;
  margin-left: 1.5rem;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;
  input {
    width: 17rem;
    border: none;
    border-bottom: 2px solid black;
    line-height: 2rem;
    ::placeholder {
      color: #408fb9;
      font-size: 13px;
      font-weight: bold;
    }
    &:active,
    &:focus {
      outline: none;
      color: #408fb9;
      font-size: 13px;
      padding: 0px;
    }
  }
  button {
    border: none;
    border-bottom: 2px solid black;
    background-color: white;
    margin-right: 0.5rem;
    line-height: 2rem;
  }

  // select{
  //   width: 100px;
  //   border: 1px solid black;
  //   -webkit-appearance: none;
  //   -moz-appearance: none;
  //   appearance: none;
  // }

  .DropdownButton {
    width: 100px;
    height: 30px;
    font-size: 13px;
    padding-left: 10px;
    margin-top: 5px;
    margin-right: 2.5rem;
    border: 1px solid black;
    &:active,
    &:focus {
      outline: none;
    }
  }

  @media (max-width: 1400px) {
    width: 100%;
    padding: 0;
  }
`;

const AreaFilterDiv = styled.div`
  width: 130px;
  display: flex;
  flex-direction: column;
  position: sticky;
  float: left;
  margin-top: 8rem;
  padding-right: 20px;
  top: 10%;
  left: 5%;
  z-index: 1;
  font-weight: bold;
  div.top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 2.5px solid black;
    color: black;
    padding: 15px 5px 0px 5px;
    background-color: rgb(256, 256, 256);
    // margin-top: 10px;
    // margin-bottom: 5px;
  }
  div.area-names {
    display: flex;
    flex-direction: column;
    padding: 5px 0px 10px 0px;
    background-color: rgb(256, 256, 256);
    button {
      text-align: left;
      border: none;
      background: rgba(1, 1, 1, 0);
      color: #707070;
      &:active {
        color: #4daac3;
        font-weight: bold;
      }
      &:focus {
        color: black;
        font-weight: bold;
      }
      &:visited {
        color: black;
        font-weight: bold;
      }
      &:hover {
        color: #4daac3;
      }
    }
  }
  @media (max-width: 1000px) {
    //visibility: hidden;
    position: sticky;
    top: 8%;
    z-index: 1;
    display: flex;
    width: 95%;
    // margin-top: 10px;
    margin: 0 auto;
    padding: 0px 50px 30px 20px;
    div.area-names {
      background-color: rgb(256, 256, 256, 0.9);
      // box-shadow: 10px 0px 20px rgb(220, 220, 220, 0.5);
      border-radius: 5px;
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
