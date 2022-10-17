import React from "react";
import { Grid, Typography, TextField, Button } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { theme } from "../ThemeColor";

const RoadMapBody = () => {
  return (
    <Grid sx={{ p: "2rem" }}>
      <Grid sx={{ mb: "2rem" }}>
        <Typography
          variant="h6"
          color={theme.palette.dark.main}
          fontWeight={700}
        >
          In-Progress(3)
        </Typography>
        <Typography variant="body2" color={theme.palette.dark.secondary}>
          Features currently being developed
        </Typography>
      </Grid>
      <Grid
        sx={{
          background: theme.palette.light.main,
          p: 3,
          mb: 3,
          borderRadius: "10px",
          borderTop: `10px solid ${theme.palette.primary.main}`,
        }}
        display="flex"
        flexDirection="column"
        gap="1rem"
      >
        <Grid display="flex" alignItems="center" gap={1}>
          <FiberManualRecordIcon fontSize="6px" color="primary" />
          <Typography>In Progress</Typography>
        </Grid>
        <Typography color={theme.palette.dark.main} fontWeight="bold">
          One-click portfolio generation
        </Typography>
        <Typography color={theme.palette.dark.main}>
          Add ability to create professional looking portfolio from profile.
        </Typography>
        <Button
          sx={{
            background: theme.palette.grey.main,
            width: "45%",
            borderRadius: "10px",
          }}
        >
          <Typography
            variant="body1"
            color={theme.palette.secondary.main}
            sx={{ textTransform: "capitalize", fontWeight: "bold" }}
          >
            Feature
          </Typography>
        </Button>
        <Grid display="flex" justifyContent="space-between" alignItems="center">
          <Grid
            display="flex"
            alignItems="center"
            gap="0.5rem"
            sx={{
              background: theme.palette.grey.main,
              p: "0.8rem 1.5rem",
              borderRadius: "10px",
            }}
          >
            <KeyboardArrowUpIcon color="secondary" />
            <Typography fontWeight="bold" variant="body1">
              62
            </Typography>
          </Grid>
          <Grid display="flex" gap="0.5rem" alignItems="center">
            <ChatBubbleIcon color="dark" />
            <Typography fontWeight="bold" variant="body1">
              1
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RoadMapBody;
