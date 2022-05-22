import React from "react";
import Banner from "./Element/Banner";
import mainLogo from "../pecus_logo.png";
import { Grid } from "@mui/material";
import { HomeDiv } from "../Style/HomeCSS";
import DailyLife from "./Element/DailyLife";
function Home() {
  return (
    <HomeDiv>
      <Banner />
      <DailyLife />
    </HomeDiv>
  );
}

export default Home;
