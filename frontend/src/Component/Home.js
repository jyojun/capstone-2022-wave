import React from "react";
import Banner from "./Element/Banner";
import mainLogo from "../pecus_logo.png";
import { Grid } from "@mui/material";
function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Banner />
      <div
        style={{
          width: "50%",
          marginTop: "3rem",
          fontFamily: "georgia",
          fontWeight: "bold",
          color: "grey",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p
          style={{
            fontSize: "2rem",
          }}
        >
          About Us
        </p>
        <p style={{ textAlign: "center" }}>
          좋은 서비스 제공을 위해 진심을 다하여 노력하는 펫커스 입니다
        </p>
      </div>
      <img
        style={{ width: "20%", marginTop: "5rem", marginBottom: "5rem" }}
        src={mainLogo}
      />
      <div style={{ width: "50%" }}>
        <Grid container spacing={5}>
          <Grid item lg={4} md={4} xs={12}>
            <img
              style={{ width: "100%", borderRadius: "70%" }}
              src="https://www.urbanbrush.net/web/wp-content/uploads/edd/2019/01/urbanbrush-20190108131811238895.png"
            />
          </Grid>
          <Grid item lg={4} md={4} xs={12}>
            <img
              style={{ width: "100%", borderRadius: "70%" }}
              src="https://i.pinimg.com/736x/3a/87/fd/3a87fdbee58b5b3a2f37d1f40dd93219.jpg"
            />
          </Grid>
          <Grid item lg={4} md={4} xs={12}>
            <img
              style={{ width: "100%", borderRadius: "70%" }}
              src="https://www.urbanbrush.net/web/wp-content/uploads/edd/2018/06/web-20180628122647540654.png"
            />
          </Grid>
        </Grid>
      </div>
      <div
        style={{
          width: "50%",
          marginTop: "3rem",
          fontFamily: "georgia",
          fontWeight: "bold",
          color: "grey",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "3rem",
        }}
      >
        <p style={{ color: "black", textAlign: "center" }}>
          필요하고 실용적인 서비스를 펫커스에서 한번에
        </p>
        <p
          style={{
            fontSize: "2rem",
          }}
        >
          Join us
        </p>
      </div>
    </div>
  );
}

export default Home;
