import * as React from "react";

import { Box, Tab, Tabs } from "@mui/material";
import { theme } from "../ThemeColor";

export default function RoadMapTab() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        TabIndicatorProps={{ style: { height: "6px" } }}
        value={value}
        onChange={handleChange}
        textColor={theme.palette.dark.main}
        indicatorColor="primary"
        aria-label="secondary tabs example"
      >
        <Tab value="one" label="Planned" />
        <Tab value="two" label="In-Progress" />
        <Tab value="three" label="Live" />
      </Tabs>
    </Box>
  );
}
