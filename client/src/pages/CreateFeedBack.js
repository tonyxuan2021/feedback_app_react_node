import { Button, Grid, TextField, Typography } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import React from "react";
import { theme } from "../components/ThemeColor";
import plusBtn from "../assets/image/mobile/icon-new-feedback.svg";

const CreateFeedBack = () => {
  return (
    <Grid sx={{ position: "relative" }}>
      <Grid display="flex" sx={{ position: "absolute" }}>
        <ChevronLeftIcon />
        <Typography>Go Back</Typography>
      </Grid>
      <Grid
        display="flex"
        flexDirection="column"
        gap={2}
        sx={{
          background: "white",
          m: "6rem 1.5rem",
          p: "2rem 1.5rem",
          borderRadius: "10px",
          position: "relative",
        }}
      >
        <Grid sx={{ position: "absolute", top: "-2rem" }}>
          <img src={plusBtn}></img>
        </Grid>
        <Grid>
          <Typography
            variant="h6"
            fontWeight={700}
            color={theme.palette.dark.main}
            sx={{ mb: 3 }}
          >
            Create New Feedback
          </Typography>
          <Typography
            variant="body1"
            fontWeight={600}
            color={theme.palette.dark.main}
            sx={{ mb: 1 }}
          >
            Feedback Title
          </Typography>
          <Typography
            variant="body2"
            color={theme.palette.dark.main}
            sx={{ opacity: "0.8", mb: 1 }}
          >
            Add a short, descriptive headline
          </Typography>
          <TextField
            fullWidth
            variant="filled"
            sx={{ background: theme.palette.grey.main }}
          ></TextField>
        </Grid>
        <Grid>
          <Typography
            variant="body1"
            fontWeight={600}
            color={theme.palette.dark.main}
            sx={{ mb: 1 }}
          >
            Category
          </Typography>
          <Typography
            variant="body2"
            color={theme.palette.dark.main}
            sx={{ opacity: "0.8", mb: 1 }}
          >
            Choose a category for your feedback
          </Typography>
          <TextField
            fullWidth
            variant="filled"
            sx={{ background: theme.palette.grey.main }}
          ></TextField>
        </Grid>
        <Grid>
          <Typography
            variant="body1"
            fontWeight={600}
            color={theme.palette.dark.main}
            sx={{ mb: 1, mb: 1 }}
          >
            Feedback Detail
          </Typography>
          <Typography
            variant="body2"
            color={theme.palette.dark.main}
            sx={{ opacity: "0.8", mb: 1 }}
          >
            Include any specific comments on what should be improved, added,
            etc.
          </Typography>
          <TextField
            multiline
            rows={4}
            fullWidth
            variant="filled"
            sx={{ background: theme.palette.grey.main }}
          ></TextField>
        </Grid>
        <Button variant="contained">Add Feedback</Button>
        <Button
          variant="contained"
          sx={{ background: theme.palette.dark.main }}
        >
          Cancel
        </Button>
      </Grid>
    </Grid>
  );
};

export default CreateFeedBack;
