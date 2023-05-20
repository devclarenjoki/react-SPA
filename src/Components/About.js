import React from "react";
import { Box, Button, Grid, Typography, styled } from "@mui/material";
import ReactPlayer from "react-player";

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

const About = () => {
  return (
    <section id="about">
      <Box sx={{ display: "flex", justifyContent: "center", mx: 20 }}>
        <Grid container spacing={2} alignItems="top">
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                maxWidth: 600,
                width: "100%",
                position: "relative",
                paddingBottom: "56.25%",
                borderRadius: 20,
              }}
            >
              <ReactPlayer
                url="/videos/transcode.mp4"
                playing
                controls
                width="100%"
                height="100%"
                style={{ position: "absolute", top: 0, left: 0 }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ maxWidth: 400 }}>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ fontSize: "46px", fontWeight: "bold" }}
              >
                How to claim $EDU?
              </Typography>
              <Typography variant="section1" gutterBottom>
                Open Campus utilizes a new protocol allowing communities to
                create, own, and promote content they want to see in the world
                and enables educators to earn revenue and gain recognition for
                their contributions. $EDU tokens can now be obtained through
                participating in the airdrop and pre-sale. After the airdrop and
                pre-sale, $EDU will be listed on top exchange such as Binance.
                The $EDU tokens obtained through this pre-sale and airdrop have
                no lock-up period.
              </Typography>
            </Box>
            <CustomOutlinedButton
              size="large"
              variant="outlined"
              sx={{
                width: "150px",
                height: "50px",
                fontSize: "1.4rem",
                fontWeight: "bold",
                my:5
              }}
            >
              White Paper
            </CustomOutlinedButton>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
};

export default About;
