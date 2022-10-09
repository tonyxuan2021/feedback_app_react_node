import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import headerBkg from "../assets/image/mobile/background-header.png";
import { Grid } from "@mui/material";

export default function HeaderFeedback() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundImage: `url(${headerBkg})`,
          backgroundSize: "cover",
          p: "0.8rem 1rem",
        }}
      >
        <Toolbar>
          <Grid sx={{ flexGrow: 1 }}>
            <Typography variant="h6" component="div">
              News
            </Typography>
            <Typography variant="body2" component="div">
              Feedback Board
            </Typography>
          </Grid>
          <MenuIcon />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
