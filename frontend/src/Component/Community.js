import React, { useState, useEffect } from "react";
import List from "./Post/List";
import axios from "axios";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { SearchSortDiv } from "../Style/CommunityCSS";

function Community() {
  const [PostList, setPostList] = useState([]);
  const [Sort, setSort] = useState("최신순");
  const [SearchTerm, setSearchTerm] = useState("");
  const [Skip, setSkip] = useState(0);
  const [LoadMore, setLoadMore] = useState(true);

  const getPostLoadMore = () => {
    let body = {
      sort: Sort,
      searchTerm: SearchTerm,
      skip: Skip,
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
  }, [Sort]);

  const SearchHandler = () => {
    getPostList();
  };

  return (
    <div>
      <SearchSortDiv>
        <div className="search">
          <input
            type="text"
            value={SearchTerm}
            onChange={(e) => setSearchTerm(e.currentTarget.value)}
            onKeyDown={(e) => {
              // keyCode 13 -> Enter키
              if (e.keyCode === 13) SearchHandler();
            }}
          />
          <button>검색</button>
        </div>

        <DropdownButton
          variant="outline-secondary"
          title={Sort}
          id="input-group-dropdown-1"
        >
          <Dropdown.Item onClick={() => setSort("최신순")}>
            최신순
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setSort("인기순")}>
            인기순
          </Dropdown.Item>
        </DropdownButton>
      </SearchSortDiv>

      <List PostList={PostList} />
      {LoadMore ? (
        <button
          style={{
            marginBottom: "10vh",
          }}
          onClick={() => getPostLoadMore()}
        >
          더 보기
        </button>
      ) : (
        <div>더이상 불러올 글이 없습니다.</div>
      )}
    </div>
  );
}

export default Community;
