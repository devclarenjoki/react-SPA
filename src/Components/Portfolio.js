import React, { Component } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardSection from "./CardSection";
import IcoCard from "./IcoCard";
import { Avatar } from "@mui/material";
import { AttachMoney, CalendarMonth, Polyline } from "@mui/icons-material";

const airdrop = [
  <Typography
    variant="body1"
    component="span"
    style={{ fontSize: "16px", color: "#787A80", lineHeight: "24px" }}
  >
    <span style={{ color: "#388BFF", marginRight: "0.5em" }}>●</span>
    Send an ETH wallet address to participate in airdrop, you can get 500 $EDU
    tokens.
  </Typography>,

  <Typography
    variant="body1"
    component="span"
    style={{ fontSize: "16px", color: "#787A80" }}
  >
    <span style={{ color: "#388BFF", marginRight: "0.5em" }}>●</span>
    Copy and share your referral link with your friends, and you will receive a
    reward of 100 $EDU tokens for each referral. You can invite up to 50 people,
    and the reward can be up to 25000 $EDU Tokens.
  </Typography>,

  <Typography
    variant="body1"
    component="span"
    style={{ fontSize: "16px", color: "#787A80" }}
  >
    <span style={{ color: "#388BFF", marginRight: "0.5em" }}>●</span>
    The $EDU airdrop will end on MAY 2. After the airdrop ends, $EDU tokens will
    be automatically distributed to your submitted ETH wallet address. This
    airdrop is completely free of charge.
  </Typography>,
];

const presale = [
  <Typography
    variant="body1"
    component="span"
    style={{ fontSize: "16px", color: "#787A80" }}
  >
    <span style={{ color: "#388BFF", marginRight: "0.5em" }}>●</span>
    Pre-sale price: 1 ETH = 100,000. The minimum purchase is 0.1 ETH, and the
    maximum purchase is 10 ETH.
  </Typography>,

  <Typography
    variant="body1"
    component="span"
    style={{ fontSize: "16px", color: "#787A80" }}
  >
    <span style={{ color: "#388BFF", marginRight: "0.5em" }}>●</span>
    Send ETH from your wallet to the pre-sale address. Our system will
    automatically send $EDU tokens to your wallet instantly. You can send ETH
    any amount.
  </Typography>,

  <Typography
    variant="body1"
    component="span"
    style={{ fontSize: "16px", color: "#787A80" }}
  >
    <span style={{ color: "#388BFF", marginRight: "0.5em" }}>●</span>
    The distribution of $EDU tokens will be based on ETH time arrived. First
    come, first served. If the pre-sale is sold out and you failed to purchase,
    a refund will be automatically issued to your wallet.
  </Typography>,
];

const tokenomics = [
  <Typography
    variant="body1"
    component="span"
    style={{ fontSize: "16px", color: "#787A80" }}
  >
    <span style={{ color: "#388BFF", marginRight: "0.5em" }}>●</span>
    The total supply of $EDU is capped at 1,000,000,000 (i.e. one billion
    tokens). Here's a breakdown of the $EDU token:
  </Typography>,

  <Typography
    variant="body1"
    component="span"
    style={{ fontSize: "16px", color: "#787A80" }}
  >
    <span style={{ color: "#388BFF", marginRight: "0.5em" }}>●</span>
    Community Reserve: 50%
  </Typography>,
  <Typography
    variant="body1"
    component="span"
    style={{ fontSize: "16px", color: "#787A80" }}
  >
    <span style={{ color: "#388BFF", marginRight: "0.5em" }}>●</span>
    Early Contributors: 20%
  </Typography>,
  <Typography
    variant="body1"
    component="span"
    style={{ fontSize: "16px", color: "#787A80" }}
  >
    <span style={{ color: "#388BFF", marginRight: "0.5em" }}>●</span>
    Investors: 14%
  </Typography>,
  <Typography
    variant="body1"
    component="span"
    style={{ fontSize: "16px", color: "#787A80" }}
  >
    <span style={{ color: "#388BFF", marginRight: "0.5em" }}>●</span>
    Mysten Labs Treasury: 10%
  </Typography>,
  <Typography
    variant="body1"
    component="span"
    style={{ fontSize: "16px", color: "#787A80" }}
  >
    <span style={{ color: "#388BFF", marginRight: "0.5em" }}>●</span>
    Community Access Program: 6%
  </Typography>,
];
class Portfolio extends Component {
  render() {
    return (
      <section id="ico">
        <div style={{ textAlign: "center" }}>
          <Typography
            variant="h5"
            sx={{ fontSize: 46, fontWeight: "bold", margin: 5 }}
          >
            Ico Introduce
          </Typography>
        </div>
        <div>
          <IcoCard
            title="Card Title"
            icon={"/images/airdrop.svg"}
            items={airdrop}
            text="Airdrop"
          />
        </div>
        <div>
          <IcoCard
            title="Card Title"
            icon={"/images/presale.svg"}
            items={presale}
            text="Pre-sale"
          />
        </div>
        <div>
          <IcoCard
            title="Card Title"
            icon={"/images/tokenomics.svg"}
            items={tokenomics}
            text="Tokenomics"
          />
        </div>
      </section>
    );
  }
}

export default Portfolio;
