import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Icon,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

const IcoCard = ({ title, icon, items, text }) => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", margin: 30 }}
    >
      <Card variant="outlined" sx={{maxWidth:1000}}>
        <CardContent>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={12} sm={3}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img src={icon} />
                <Typography
                  sx={{ textAlign: "center", fontSize: "20px", fontWeight:"bold" }}
                  align="center"
                  variant="body1"
                >
                  {text}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={9}>
              <List sx={{ width: "80%" }}>
                {items.map((item, index) => (
                  <ListItem key={index}>
                    <ListItemText>
                      <Typography
                        variant="body1"
                        style={{ fontSize: "16px", color: "#787A80" }}
                      >
                        {item}
                      </Typography>
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default IcoCard;
