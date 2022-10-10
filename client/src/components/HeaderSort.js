import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { theme } from "./ThemeColor";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

const HeaderSort = () => {
  return (
    <Grid
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        background: theme.palette.dark.main,
        minHeight: "65px",
        p: "0 1rem",
      }}
    >
      <Grid display="flex" alignItems="center" gap="0.5rem">
        <Typography variant="body2" color={theme.palette.light.main}>
          Sort by:
        </Typography>
        <Grid display="flex" alignItems="center">
          <Typography
            variant="body2"
            color={theme.palette.light.main}
            fontWeight="bold"
          >
            Most Upvotes
          </Typography>
          <KeyboardArrowDownIcon sx={{ color: theme.palette.light.main }} />
        </Grid>
      </Grid>
      <Grid>
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
    </Grid>
  );
};

export default HeaderSort;
