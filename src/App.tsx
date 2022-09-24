import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useRoutes } from "react-router-dom";
import routes from "src/routers";
import "./App.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#eb3d49",
    },
    common: {
      black: "#000",
      white: "#FFF",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1840,
    },
  },
});

function App() {
  const content = useRoutes(routes());
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {content}
    </ThemeProvider>
  );
}

export default App;
