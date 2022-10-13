import { Button, Grid, TextField, Typography } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import React from "react";

const CreateFeedBack = () => {
  return (
    <Grid>
      <Grid display="flex">
        <ChevronLeftIcon />
        <Typography>Go Back</Typography>
      </Grid>
      <Grid
        display="flex"
        flexDirection="column"
        gap={2}
        sx={{
          background: "white",
          m: "3rem 1.5rem",
          p: "2rem 1.5rem",
          borderRadius: "10px",
        }}
      >
        <Grid>
          <Typography>Create New Feedback</Typography>
          <Typography>Feedback Title</Typography>
          <Typography>Add a short, descriptive headline</Typography>
          <TextField fullWidth></TextField>
        </Grid>
        <Grid>
          <Typography>Category</Typography>
          <Typography>Choose a category for your feedback</Typography>
          <TextField fullWidth></TextField>
        </Grid>
        <Grid>
          <Typography>Feedback Detail</Typography>
          <Typography>
            Include any specific comments on what should be improved, added,
            etc.
          </Typography>
          <TextField multiline rows={4} fullWidth></TextField>
        </Grid>
        <Button>Add Feedback</Button>
        <Button>Cancel</Button>
      </Grid>
    </Grid>
  );
};

export default CreateFeedBack;
