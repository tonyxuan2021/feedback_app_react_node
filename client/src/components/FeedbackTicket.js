import { Button, Grid, Typography } from "@mui/material";
import { theme } from "./ThemeColor";
import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";

const FeedbackTicket = () => {
  return (
    <Grid sx={{ p: 3, pt: 5 }}>
      <Grid
        sx={{
          background: theme.palette.light.main,
          p: 3,
          borderRadius: "10px",
        }}
        display="flex"
        flexDirection="column"
        gap="1rem"
      >
        <Typography color={theme.palette.dark.main} fontWeight="bold">
          Add tags for solutions
        </Typography>
        <Typography color={theme.palette.dark.main}>
          Easier to search for solutions based on a specific stack
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
            Enhancement
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
              112
            </Typography>
          </Grid>
          <Grid display="flex" gap="0.5rem" alignItems="center">
            <ChatBubbleIcon color="dark" />
            <Typography fontWeight="bold" variant="body1">
              2
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FeedbackTicket;
