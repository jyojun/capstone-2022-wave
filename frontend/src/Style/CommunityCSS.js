import styled from "@emotion/styled";

const CommunityDiv = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  max-width: 756px;
  margin: 0 auto;
  @media (max-width: 756px) {
    width: 90%;
  }
`;
const SearchSortDiv = styled.div`
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
  // padding-top: 5rem;
  // padding-bottom: 1rem;
  // max-width: 756px;
  // margin: 0 auto !important;

  // display: flex;
  // align-content: center;
  // align-items: center;
  // justify-content: space-between;

  // .search {
  //   display: grid;
  //   min-width: 40%;
  //   grid-template-columns: 8fr 2fr;
  //   grid-template-rows: auto;

  //   input {
  //     padding: 5px 20px;
  //     border-radius: 15px 0px 0px 15px;
  //     border: 0.5px solid #c6c6c6;
  //     height: 100%;
  //     &:active,
  //     &:focus {
  //       outline: none;
  //     }
  //   }
  //   button {
  //     height: 100%;
  //     border: 0.5px solid #c6c6c6;
  //     border-radius: 0px 15px 15px 0px;
  //     margin-bottom: -1px;
  //   }
  // }

  // @media (max-width: 756px) {
  //   width: 90%;
  //   .search {
  //     width: auto;
  //     input {
  //       padding: 5px 10px;
  //       width: 100%;
  //     }
  //   }
  //   .btn {
  //     font-size: 0.75rem;
  //     margin-left: 1rem;
  //   }
  // }
`;

const CommunityCategoryDiv = styled.div`
  margin-top: 3.5rem;
  font-size: 13px;
  .navbar {
    &::-webkit-scrollbar {
      height: 0;
    }
  }
`;

export { SearchSortDiv, CommunityDiv, CommunityCategoryDiv };
