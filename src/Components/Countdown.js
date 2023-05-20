import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

function Countdown() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("May 31, 2023 23:59:59").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 5,
      }}
    >
      <Typography variant="h4" sx={{ fontSize: "46px", fontWeight: 600 }}>
        {countdown.days.toString().padStart(2, "0")}
      </Typography>
      <Typography sx={{ mx: 1, fontSize: "16px", color: "#424551" }}>
        Days
      </Typography>
      <Typography
        variant="h6"
        sx={{ fontSize: "2rem", fontWeight: 600, color: "#316DF9", mx: 1 }}
      >
        •
      </Typography>
      <Typography variant="h4" sx={{ fontSize: "46px", fontWeight: 600 }}>
        {countdown.hours.toString().padStart(2, "0")}
      </Typography>
      <Typography sx={{ mx: 1, fontSize: "16px", color: "#424551" }}>
        Hours
      </Typography>
      <Typography
        variant="h6"
        sx={{ fontSize: "2rem", fontWeight: 600, color: "#316DF9", mx: 1 }}
      >
        •
      </Typography>
      <Typography variant="h4" sx={{ fontSize: "46px", fontWeight: 600 }}>
        {countdown.minutes.toString().padStart(2, "0")}
      </Typography>
      <Typography sx={{ mx: 1, fontSize: "16px", color: "#424551" }}>
        Mins
      </Typography>
      <Typography
        variant="h6"
        sx={{ fontSize: "2rem", fontWeight: 600, color: "#316DF9", mx: 1 }}
      >
        •
      </Typography>
      <Typography variant="h4" sx={{ fontSize: "46px", fontWeight: 600 }}>
        {countdown.seconds.toString().padStart(2, "0")}
      </Typography>
      <Typography sx={{ mx: 1, fontSize: "16px", color: "#424551" }}>
        Secs
      </Typography>
    </Box>
  );
}

export default Countdown;
