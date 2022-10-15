import React from "react";
import { Grid, Button, Typography, AppBar, Box, Toolbar } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import AddIcon from "@mui/icons-material/Add";
import { theme } from "../ThemeColor";

const RoadMapHeader = () => {
  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          p: "1.6rem 1rem",
          background: theme.palette.dark.main,
        }}
      >
        <Toolbar display="flex" sx={{ justifyContent: "space-between" }}>
          <Grid display="flex" flexDirection="column" alignItems="center">
            <Grid display="flex">
              <ChevronLeftIcon color={theme.palette.light.main} />
              <Typography
                color={theme.palette.light.secondary}
                fontWeight={700}
              >
                Go Back
              </Typography>
            </Grid>
            <Typography fontWeight={700}>Roadmap</Typography>
          </Grid>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            sx={{ p: "0.8rem 1rem", borderRadius: "10px" }}
          >
            <Typography
              sx={{ textTransform: "capitalize" }}
              variant="body2"
              color={theme.palette.light.main}
            >
              Add Feedback
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default RoadMapHeader;
