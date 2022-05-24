import React, { useState, useEffect } from "react";
import axios from "axios";
import { CarePostListDiv } from "../../Style/CarePostCSS";
import CarePostItem from "./CarePostItem";
import { Grid } from "@mui/material";
import LoadingCircle from "../Element/LoadingCircle";

function CarePostList() {
  const [Loading, setLoading] = useState(true);
  const [CarePostList, setCarePostList] = useState([]);

  useEffect(() => {
    axios.post("/api/carePost/list").then((res) => {
      if (res.data.success) {
        setCarePostList(res.data.carePostList);
        setLoading(false);
      } else {
        alert("글을 불러오는데 실패하였습니다.");
      }
    });
  }, [CarePostList]);
  return (
    <CarePostListDiv>
      {!Loading ? (
        <Grid container spacing={0.5}>
          {CarePostList.map((post, idx) => {
            return (
              <Grid key={idx} item lg={12} md={12} sm={12} xs={12}>
                <CarePostItem post={post} />
              </Grid>
            );
          })}
        </Grid>
      ) : (
        <LoadingCircle />
      )}
    </CarePostListDiv>
  );
}

export default CarePostList;
