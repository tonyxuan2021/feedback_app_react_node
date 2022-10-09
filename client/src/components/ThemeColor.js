import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#AD1FEA",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#4661E6",
    },
    dark: {
      main: "rgb(55,63,104)",
    },
    light: {
      main: "#FFF",
    },
  },
});

// export default function Palette() {
//   return (
//     <ThemeProvider theme={theme}>
//       <Button>Primary</Button>
//       <Button color="secondary">Secondary</Button>
//     </ThemeProvider>
//   );
// }
