import React, { Component } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardSection from "./CardSection";

class Portfolio extends Component {
  render() {
    return (
      <section id="token">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h5"
            align="center"
            sx={{
              fontSize: 16,
              fontWeight: "bold",
              textTransform: "capitalize",
              my: 2,
            }}
          >
            ADD $EDU TO YOUR WALLET
          </Typography>
          <Typography
            variant="title"
            align="center"
            sx={{ fontSize: 46, fontWeight: "bold", color: "#1E212C" }}
          >
            Token Details
          </Typography>
        </Box>
        <CardSection />
      </section>
    );
  }
}

export default Portfolio;
