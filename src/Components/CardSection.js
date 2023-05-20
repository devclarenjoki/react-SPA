import React, { useState } from "react";
import { alpha, styled } from "@mui/material/styles";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Button,
  TextField,
  InputBase,
  FormControl,
  InputLabel,
} from "@mui/material";
import {
  AccountBalanceWallet,
  BarChart,
  FileCopy,
  LocalOffer,
  Storage,
} from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faSquareCheck,
  faStar,
  faFileText,
} from "@fortawesome/free-solid-svg-icons";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    color:"#000000",
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
    border: "1px solid #ced4da",
    fontSize: 16,
    width: "100%",
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      backgroundColor: "#fff",
      borderColor: "#dc3545",
    },
  },
}));

const CardSection = () => {
  const [feedback, setFeedback] = useState("");

  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleButtonClick = () => {
    console.log(`Text entered: ${text}`);
  };

  const handleCopyClick = () => {
    navigator.clipboard
      .writeText("0xdB042e38877c1eE9A781798e5A214aD2a11A1185")
      .then(() => setFeedback("Copied to clipboard!"))
      .catch(() => setFeedback("Error copying to clipboard!"));
  };

  return (
    <div>
      <div style={{ margin: "20px" }}>
        <Card sx={{ maxWidth: 600, mx: "auto", p: 2 }}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Box sx={{ display: "flex" }}>
                  <Box sx={{ marginRight: 1 }}>
                    <FontAwesomeIcon
                      icon={faGlobe}
                      size="lg"
                      style={{
                        width: "25px",
                        height: "25px",
                        color: "#424551",
                      }}
                    />
                  </Box>
                  <Box>
                    <Typography
                      component="div"
                      variant="subtitle1"
                      sx={{ fontSize: 14, fontWeight: "bold" }}
                    >
                      Blockchain:
                    </Typography>
                    <Typography
                      variant="body1"
                      component="div"
                      sx={{ fontSize: 16, color: "#424551" }}
                    >
                      ETH (ERC20)
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box sx={{ display: "flex" }}>
                  <Box sx={{ marginRight: 1 }}>
                    <FontAwesomeIcon
                      icon={faSquareCheck}
                      size="lg"
                      style={{
                        width: "25px",
                        height: "25px",
                        color: "#424551",
                      }}
                    />
                  </Box>
                  <Box>
                    <Typography
                      variant="subtitle1"
                      component="div"
                      sx={{ fontSize: 14, fontWeight: "bold" }}
                    >
                      Total Supply:
                    </Typography>
                    <Typography
                      variant="body1"
                      component="div"
                      sx={{ fontSize: 16, color: "#424551" }}
                    >
                      10,000,000,000
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box sx={{ display: "flex" }}>
                  <Box sx={{ marginRight: 1 }}>
                    <FontAwesomeIcon
                      icon={faStar}
                      size="lg"
                      style={{
                        width: "25px",
                        height: "25px",
                        color: "#424551",
                      }}
                    />
                  </Box>
                  <Box>
                    <Typography
                      variant="subtitle1"
                      component="div"
                      sx={{ fontSize: 14, fontWeight: "bold" }}
                    >
                      Token Symbol:
                    </Typography>
                    <Typography
                      variant="body1"
                      component="div"
                      sx={{ fontSize: 16, color: "#424551" }}
                    >
                      EDU
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box sx={{ display: "flex" }}>
                  <Box sx={{ marginRight: 1 }}>
                    <FontAwesomeIcon
                      icon={faStar}
                      size="lg"
                      style={{
                        width: "25px",
                        height: "25px",
                        color: "#424551",
                      }}
                    />
                  </Box>
                  <Box>
                    <Typography
                      variant="subtitle1"
                      component="div"
                      sx={{ fontSize: 14, fontWeight: "bold" }}
                    >
                      Decimals:
                    </Typography>
                    <Typography
                      variant="body1"
                      component="div"
                      sx={{ fontSize: 16, color: "#424551" }}
                    >
                      18
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ display: "flex" }}>
                  <Box sx={{ marginRight: 1 }}>
                    <FontAwesomeIcon
                      icon={faFileText}
                      size="lg"
                      style={{
                        width: "25px",
                        height: "25px",
                        color: "#424551",
                      }}
                    />
                  </Box>
                  <Box>
                    <Typography
                      variant="subtitle1"
                      component="div"
                      sx={{ fontSize: 14, fontWeight: "bold" }}
                    >
                      Contract Address:
                    </Typography>
                    <Typography
                      variant="body1"
                      component="div"
                      sx={{ fontSize: 16, color: "#424551" }}
                    >
                      0xecd15ab9cc27983d1e90131743e11ef3e4945d57
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </div>
      <div
        style={{
          backgroundColor: "#d3f4fe",
          padding: 4,
          alignItems: "center",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <Typography
            variant="h5"
            sx={{ fontSize: 36, fontWeight: "bold", margin: 5 }}
          >
            Pre-sale is live
          </Typography>
        </div>
        <Card sx={{ mx: "auto", p: 2, maxWidth: 600 }} variant="outlined">
          {" "}
          <CardContent sx={{ textAlign: "center" }}>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{ fontSize: 16, color: "#1E2122", fontWeight: "bold" }}
            >
              Pre-sale Address (ERC20):
            </Typography>
            <Typography
              variant="body1"
              component="div"
              sx={{ mt: 1, fontSize: 18, color: "#388BFF", fontWeight: "bold" }}
            >
              0xdB042e38877c1eE9A781798e5A214aD2a11A1185
            </Typography>
            <Button
              variant="contained"
              color="primary"
              startIcon={<FileCopy />}
              sx={{
                mt: 2,
                fontSize: 10,
                borderRadius: 16,
                textTransform: "none",
              }}
              onClick={handleCopyClick}
            >
              Copy Address
            </Button>
            {feedback && <Typography sx={{ mt: 2 }}>{feedback}</Typography>}
          </CardContent>
        </Card>
        <div style={{ marginTop: "15px", marginBottom: "40px" }}>
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <Typography gutterBottom sx={{ fontSize: 16, color: "#424551" }}>
              Pre-sale price: 1 ETH = 100,000 EDU.
            </Typography>
            <Typography gutterBottom sx={{ fontSize: 16, color: "#424551" }}>
              Send ETH from your wallet to the pre-sale address above. Our
              system will send $EDU tokens to your wallet immediately.
            </Typography>
            <Typography gutterBottom sx={{ fontSize: 16, color: "#424551" }}>
              The minimum purchase is 0.1 ETH, and the maximum purchase is 30
              ETH.
            </Typography>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: 10,
          padding: "40px",
        }}
      >
        <Grid
          container
          spacing={2}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontSize: 46, fontWeight: "bold", m: 10 }}
          >
            Airdrop
          </Typography>
          <FormControl
            variant="standard"
            sx={{ width: "100%", maxWidth: 600, color: "000000" }}
          >
            <BootstrapInput
              onChange={handleChange}
              id="bootstrap-input"
              placeholder="Enter your ETH Address"
            />
          </FormControl>
        </Grid>
        <Button
          variant="contained"
          color="primary"
          onClick={handleButtonClick}
          disabled={!text}
          size="large"
        >
          claim
        </Button>
      </div>
    </div>
  );
};

export default CardSection;
