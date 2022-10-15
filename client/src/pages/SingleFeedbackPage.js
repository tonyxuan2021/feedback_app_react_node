import React from "react";
import { Grid, Typography, Button, Divider, TextField } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import elijah from "../assets/image/user-images/image-elijah.jpg";
import james from "../assets/image/user-images/image-james.jpg";
import { theme } from "../components/ThemeColor";

const SingleFeedbackPage = () => {
  return (
    <Grid>
      <Grid display="flex" justifyContent="space-between" alignItems="center">
        <Grid display="flex" sx={{ ml: "1rem", pt: "2rem" }}>
          <ChevronLeftIcon color="secondary" />
          <Typography color={theme.palette.dark.secondary} fontWeight={700}>
            Go Back
          </Typography>
        </Grid>
        <Button
          variant="contained"
          color="secondary"
          sx={{
            p: "0.8rem 1rem",
            mt: "2rem",
            mr: "1rem",
            borderRadius: "10px",
          }}
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
      <Grid sx={{ p: 3, pt: 5 }}>
        <Grid
          sx={{
            background: theme.palette.light.main,
            p: 3,
            mb: 3,
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
          <Grid
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
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
        <Grid
          sx={{
            background: theme.palette.light.main,
            borderRadius: "10px",
            p: 3,
            mb: 3,
          }}
        >
          <Grid display="flex" flexDirection="column" gap="1rem" sx={{ mb: 5 }}>
            <Typography
              color={theme.palette.dark.main}
              fontWeight="bold"
              variant="h6"
            >
              4 Comments
            </Typography>
            <Grid
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid display="flex" alignItems="center" gap={2}>
                <Grid>
                  <img
                    style={{ width: "48px", borderRadius: "50%" }}
                    src={elijah}
                  ></img>
                </Grid>
                <Grid>
                  <Typography
                    variant="body1"
                    fontWeight={700}
                    color={theme.palette.dark.main}
                  >
                    Elijah Moss
                  </Typography>
                  <Typography color={theme.palette.dark.secondary}>
                    @hexagon.bestagon
                  </Typography>
                </Grid>
              </Grid>
              <Typography variant="body1" fontWeight={700} color="secondary">
                Reply
              </Typography>
            </Grid>
            <Grid
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="body2" color={theme.palette.dark.secondary}>
                Also, please allow styles to be applied based on system
                preferences. I would love to be able to browse Frontend Mentor
                in the evening after my device’s dark mode turns on without the
                bright background it currently has.
              </Typography>
            </Grid>
          </Grid>
          <Divider variant="middle" />
          <Grid display="flex" flexDirection="column" gap="1rem" sx={{ mt: 5 }}>
            <Grid
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid display="flex" alignItems="center" gap={2}>
                <Grid>
                  <img
                    style={{ width: "48px", borderRadius: "50%" }}
                    src={james}
                  ></img>
                </Grid>
                <Grid>
                  <Typography
                    variant="body1"
                    fontWeight={700}
                    color={theme.palette.dark.main}
                  >
                    James Skinner
                  </Typography>
                  <Typography color={theme.palette.dark.secondary}>
                    @hummingbird1
                  </Typography>
                </Grid>
              </Grid>
              <Typography variant="body1" fontWeight={700} color="secondary">
                Reply
              </Typography>
            </Grid>
            <Grid
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="body2" color={theme.palette.dark.secondary}>
                Second this! I do a lot of late night coding and reading. Adding
                a dark theme can be great for preventing eye strain and the
                headaches that result. It’s also quite a trend with modern apps
                and apparently saves battery life.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          sx={{
            background: theme.palette.light.main,
            p: 3,
            mb: 3,
            borderRadius: "10px",
          }}
          display="flex"
          flexDirection="column"
          gap="1rem"
        >
          <Typography
            color={theme.palette.dark.main}
            fontWeight="bold"
            variant="h6"
          >
            Add Comment
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={3}
            placeholder="Type your comment here"
            sx={{
              background: theme.palette.grey.main,
              "& fieldset": { border: "none" },
            }}
          ></TextField>
          <Grid
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography color={theme.palette.dark.secondary}>
              250 Characters left
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{
                p: "0.8rem 1rem",
                borderRadius: "10px",
              }}
            >
              <Typography
                sx={{ textTransform: "capitalize" }}
                variant="body2"
                color={theme.palette.light.main}
                fontWeight={700}
              >
                Post Comment
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SingleFeedbackPage;
