import React, { useState, useEffect } from "react";
import List from "./Post/List";
import axios from "axios";
import { SearchSortDiv, CommunityDiv } from "../Style/CommunityCSS";
import CommunityCategory from "./Post/CommunityCategory.js";
import SearchIcon from "@mui/icons-material/Search";

function Community() {
  const [PostList, setPostList] = useState([]);
  const [Sort, setSort] = useState("최신순");
  const [SearchTerm, setSearchTerm] = useState("");
  const [Skip, setSkip] = useState(0);
  const [Category, setCategory] = useState("");
  const [LoadMore, setLoadMore] = useState(true);

  const getPostLoadMore = () => {
    let body = {
      sort: Sort,
      searchTerm: SearchTerm,
      skip: Skip,
      category: Category,
    };
    axios
      .post("/api/post/list", body)
      .then((res) => {
        if (res.data.success) {
          setPostList([...PostList, ...res.data.postList]);
          setSkip(Skip + res.data.postList.length);
          if (res.data.postList.length < 5) {
            setLoadMore(false);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getPostList = () => {
    setSkip(0);

    let body = {
      sort: Sort,
      searchTerm: SearchTerm,
      skip: 0,
      category: Category,
    };
    axios
      .post("/api/post/list", body)
      .then((res) => {
        if (res.data.success) {
          setPostList([...res.data.postList]);
          setSkip(res.data.postList.length);
          if (res.data.postList.length < 5) {
            setLoadMore(false);
          } else {
            setLoadMore(true);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPostList(); // sort가 바뀔때마다 getPostList 호출
  }, [Sort, Category]);

  const SearchHandler = () => {
    getPostList();
  };

  return (
    <>
      <CommunityCategory setCategory={setCategory} />
      <CommunityDiv>
        <SearchSortDiv>
          <div className="search">
            <input
              type="text"
              placeholder="검색할 게시글 제목 또는 내용을 입력하세요."
              value={SearchTerm}
              onChange={(e) => setSearchTerm(e.currentTarget.value)}
              onKeyDown={(e) => {
                // keyCode 13 -> Enter키
                if (e.keyCode === 13) {
                  SearchHandler();
                }
              }}
            />
            <button onClick={SearchHandler}>
              <SearchIcon />
            </button>
          </div>

          <select
            onChange={(e) => {
              setSort(e.currentTarget.value);
            }}
            variant="outline-secondary"
            className="DropdownButton"
            title={Sort}
            id="input-group-dropdown-1"
            style={{ fontSize: "13px" }}
          >
            <option style={{ fontSize: "13px" }} value="최신순">
              최신순
            </option>
            <option style={{ fontSize: "13px" }} value="인기순">
              인기순
            </option>
          </select>
        </SearchSortDiv>

        <List PostList={PostList} />
        <div style={{ display: "flex", justifyContent: "center" }}>
          {LoadMore ? (
            <button
              style={{
                fontFmaily: "roboto",
                fontSize: "12px",
                marginBottom: "8vh",
                borderRadius: "5px",
                border: "1px #DBDBDB",
                padding: "8px 8px",
              }}
              onClick={() => getPostLoadMore()}
            >
              VIEW MORE
            </button>
          ) : (
            <div>더이상 불러올 글이 없습니다.</div>
          )}
        </div>
      </CommunityDiv>
    </>
  );
}

export default Community;
