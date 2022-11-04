import React from "react";
import Banner from "./Element/Banner";
import mainLogo from "../pecus_logo.png";
import { Grid } from "@mui/material";
import { HomeDiv } from "../Style/HomeCSS";
import DailyLife from "./Element/DailyLife";
import PlaceSlick from "./Element/PlaceSlick";
import News from "./Element/News";

function Home() {
  return (
    <HomeDiv>
      <Banner />
      <News />
      <PlaceSlick />
      <DailyLife />
    </HomeDiv>
  );
}

export default Home;
