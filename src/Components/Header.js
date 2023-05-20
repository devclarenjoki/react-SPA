import React, { Component, useState, useEffect } from "react";
import Countdown from "./Countdown";
import { Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledButton = styled(Button)({
  borderRadius: "30px",
  textTransform: "none",
  margin: "0 10px",
  padding: "6px 12px",
});

const CustomOutlinedButton = styled(StyledButton)({
  border: "1px solid #316DF9",
  letterSpacing: ".03125rem",
  "&:hover": {
    backgroundColor: "#316DF9",
    color: "#fff",
  },
});

const CustomContainedButton = styled(StyledButton)({
  backgroundColor: "#316DF9",
  color: "#fff",
  // "&:hover": {
  //   backgroundColor: "#388e3c",
  // },
});

class Header extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var occupation = this.props.data.occupation;
      var description = this.props.data.description;
      var city = this.props.data.address.city;
      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }

    return (
      <header id="home">
        <nav id="nav-wrap">
          <div classname="top-nav">
            <ul id="nav" className="nav">
              <li className="current">
                <a className="smoothscroll" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#token">
                  Token
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#ico">
                  ICO Introduce
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#telegram">
                  Telegram
                </a>
              </li>
            </ul>
          </div>
          <CustomContainedButton
            size="large"
            variant="contained"
            sx={{ width: "150px", height: "50px", fontSize: "1.4rem" }}
          >
            Pre-sale
          </CustomContainedButton>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline"> ${name} ICO</h1>
            <h2>Edu will be added to binance!</h2>
            <Typography sx={{ fontSize: "16px", color: "#424551" }}>
              The $EDU token ICO (including airdrop and pre-sale) is currently
              available for a limited time, so hurry up and claim your $EDU
              tokens.
            </Typography>
            <Typography sx={{ fontSize: "16px", color: "#424551", mt: 5 }}>
              Ends In
            </Typography>
            <Countdown />
          </div>
          <div>
            <CustomOutlinedButton
              size="large"
              variant="outlined"
              sx={{
                width: "150px",
                height: "50px",
                fontSize: "1.4rem",
                fontWeight: "bold",
              }}
            >
              Airdrop
            </CustomOutlinedButton>
            <CustomContainedButton
              size="large"
              variant="contained"
              sx={{ width: "150px", height: "50px", fontSize: "1.4rem" }}
            >
              Pre-sale
            </CustomContainedButton>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
