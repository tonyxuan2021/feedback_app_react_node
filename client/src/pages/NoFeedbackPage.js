import React from "react";
import HeaderFeedback from "../components/HeaderFeedback";
import HeaderSort from "../components/HeaderSort";
import detective from "../assets/image/mobile/illustration-empty.svg";
import { Typography, Button, Grid } from "@mui/material";
import { theme } from "../components/ThemeColor";
import AddIcon from "@mui/icons-material/Add";

const NoFeedbackPage = () => {
  return (
    <div className="no__feedback__wrapper">
      <HeaderFeedback />
      <HeaderSort />
      <Grid
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="1.5rem"
        sx={{ background: "#fff", m: "2rem 1.5rem", p: "2rem", borderRadius:"10px" }}
      >
        <Grid>
          <img className="no__feedback__img" src={detective}></img>
        </Grid>
        <Typography
          variant="h6"
          fontWeight="bold"
          color={theme.palette.dark.main}
        >
          There is no feedback yet
        </Typography>
        <Typography
          variant="body2"
          textAlign="center"
          color={theme.palette.dark.main}
          sx={{opacity:"0.8"}}
        >
          Got a suggestion? Found a bug that needs to be squashed? We love
          hearing about new ideas to improve our app.
        </Typography>
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
      </Grid>
    </div>
  );
};

export default NoFeedbackPage;
