import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";

export const MuiLayout = () => {
  return (
    <Box
      sx={{
        height: "auto",
        minHeight: "300px",
        width: "auto",
        minWidth: "300px",
        backgroundColor: "GrayText",
      }}
    >
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sm={8}
          md={8}
          lg={8}
          sx={{ backgroundColor: "pink", height: "200px" }}
        ></Grid>
        <Grid
          item
          xs={12}
          sm={4}
          md={4}
          lg={4}
          sx={{ backgroundColor: "yellow", height: "200px" }}
        ></Grid>
        <Grid
          item
          xs={12}
          sm={4}
          md={4}
          lg={4}
          sx={{ backgroundColor: "yellow", height: "200px" }}
        ></Grid>
        <Grid
          item
          xs={12}
          sm={8}
          md={8}
          lg={8}
          sx={{ backgroundColor: "blue", height: "200px" }}
        ></Grid>
        
      </Grid>
    </Box>
  );
};
