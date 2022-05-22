import React, { useState, useEffect } from "react";
import Place from "./Place";
import { PlacesDiv, PlaceSearchSortDiv } from "../../Style/PlaceCSS.js";
import { BtnDiv } from "../../Style/DetailCSS";
import { Link } from "react-router-dom";
import axios from "axios";
import { Grid, Item } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PlaceCategory from "./PlaceCategory";
import { DropdownButton, Dropdown } from "react-bootstrap";
import AreaFilter from "./AreaFilter";

function Places() {
  const [Places, setPlaces] = useState([]);
  const [Category, setCategory] = useState("");
  const [Area, setArea] = useState("");
  const [SearchTerm, setSearchTerm] = useState("");
  const [Sort, setSort] = useState("기본순");
  // useEffect(() => {
  //   let body = {
  //     category: Category,
  //     sort: Sort,
  //     searchTerm: SearchTerm,
  //   };
  //   axios.post("/api/place/list", body).then((res) => {
  //     if (res.data.success) {
  //       setPlaces(res.data.placeList);
  //     } else {
  //       alert("장소 정보를 불러오는데 실패하였습니다.");
  //     }
  //   });
  // }, [Category, Sort]);

  const getPostList = () => {
    let body = {
      sort: Sort,
      searchTerm: SearchTerm,
      category: Category,
      area: Area,
    };
    axios
      .post("/api/place/list", body)
      .then((res) => {
        if (res.data.success) {
          setPlaces([...res.data.placeList]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPostList(); // sort가 바뀔때마다 getPostList 호출
    console.log(Sort, Category, Area);
  }, [Sort, Category, Area]);

  const SearchHandler = () => {
    getPostList();
  };

  return (
    <>
      <PlaceCategory setCategory={setCategory} />
      <AreaFilter setArea={setArea} />
      <PlacesDiv>
        <PlaceSearchSortDiv>
          <div className="search">
            <input
              type="text"
              placeholder="지역이나 장소를 검색해봐요!"
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
              <SearchIcon fontSize="small" style={{ color: "#408fb9" }} />
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
            style={{ color: "#707070" }}
          >
            <option value="기본순">기본순</option>
            <option value="후기순">후기순</option>
          </select>
        </PlaceSearchSortDiv>

        <BtnDiv>
          <button
            style={{
              backgroundColor: "transparent",
              border: "none",
              padding: "0",
              marginRight: "15px",
            }}
          >
            <Link
              to="/placeUpload"
              style={{
                color: "#4DAAC3",
                fontSize: "11px",
                textDecoration: "none",
                border: "1.5px solid rgba(77,170,195, 0.5)",
                borderRadius: "10px",
                padding: "7px",
                boxShadow: "0px 0px 3px rgba(77,170,195, 0.5)",
                transitionDuration: "0.3s",
              }}
              className="write"
            >
              + 장소 등록하기
            </Link>
          </button>
        </BtnDiv>

        <Grid container spacing={1}>
          {Places.map((place, idx) => {
            return (
              <Grid key={idx} item lg={3} md={6} sm={6} xs={12}>
                <Place place={place} />
              </Grid>
            );
          })}
        </Grid>
        <div
          style={
            {
              // borderBottom: "1px solid grey",
              // boxShadow: "0px -5px 5px grey",
            }
          }
        ></div>
      </PlacesDiv>
    </>
  );
}

export default Places;
