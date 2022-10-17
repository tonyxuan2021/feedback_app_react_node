import React from "react";
import { theme } from "./ThemeColor";
import { Button, Drawer, Grid, Typography } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Link } from "react-router-dom";

const FeedbackDrawer = ({ isDrawerOpen, setIsDrawerOpen }) => {
  return (
    <Drawer
      anchor="right"
      open={isDrawerOpen}
      onClose={() => setIsDrawerOpen(false)}
      sx={{
        [`& .MuiDrawer-paper`]: {
          width: "70%",
          boxSizing: "border-box",
          marginTop: "81.6px",
          background: theme.palette.grey.main,
        },
      }}
    >
      <Grid sx={{ height: "100vh" }}>
        <Grid
          display="flex"
          flexDirection="column"
          gap={2}
          sx={{
            background: "white",
            m: "1rem",
            p: "1rem",
            borderRadius: "10px",
          }}
        >
          <Grid display="flex" justifyContent="space-between">
            <Button variant="contained" color="secondary">
              ALL
            </Button>
            <Button variant="contained" color="secondary">
              UI
            </Button>
            <Button variant="contained" color="secondary">
              UX
            </Button>
          </Grid>
          <Grid display="flex" justifyContent="space-between">
            <Button variant="contained" color="secondary">
              Enhancement
            </Button>
            <Button variant="contained" color="secondary">
              Bug
            </Button>
          </Grid>
          <Grid>
            <Button variant="contained" color="secondary">
              Feature
            </Button>
          </Grid>
        </Grid>
        <Grid
          display="flex"
          flexDirection="column"
          gap={2}
          sx={{
            background: "white",
            m: "1rem",
            p: "1rem",
            borderRadius: "10px",
          }}
        >
          <Grid
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              variant="h6"
              color={theme.palette.dark.main}
              fontWeight={700}
            >
              Roadmap
            </Typography>
            <Link
              to={"/roadmap"}
              style={{ color: theme.palette.secondary.main }}
            >
              <Typography>View</Typography>
            </Link>
          </Grid>
          <Grid
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <FiberManualRecordIcon
              fontSize="6px"
              sx={{ color: theme.palette.orange.main }}
            />
            <Typography>Planned</Typography>
            <Typography>2</Typography>
          </Grid>
          <Grid
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <FiberManualRecordIcon fontSize="6px" color="primary" />
            <Typography>In-Progress</Typography>
            <Typography>3</Typography>
          </Grid>
          <Grid
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <FiberManualRecordIcon
              fontSize="6px"
              sx={{ color: theme.palette.lightblue.main }}
            />
            <Typography>Live</Typography>
            <Typography>1</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Drawer>
  );
};

export default FeedbackDrawer;
