import React, { useState } from "react";
import "./App.css";

// material ui imports
import Box from "@mui/material/Box";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

// components imports
import Footer from './components/footer';
import Zoom from "./components/zoom";
import Map from "./components/map";
import Tools from './components/tools';
import Functionality from './components/functionality';

const theme = createTheme({
  palette: {
    primary: {
      main: "#1A2737",
    },
    white: {
      text: "#fff",
    },
    black: {
      text: "#000",
    },
    secondary: {
      light: "#0066ff",
      main: "#4C54D1",
    },
  },
  typography: {
    fontFamily: "Red Hat Display",
    fontSize: 12,
  }
});




const App = () => {
  const [zoom, setZoom] = useState(8);
  const [center, setCenter] = useState([45.4, -75.7]);

  const handleZoom = (value) => {
    setZoom(zoom + value);
  };

  console.log(zoom)

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          position: "relative",
        }}
      > 
        <Tools></Tools>
        <Functionality />
        <Map center={center} zoom={zoom}></Map>
        <Zoom handleZoom={handleZoom}></Zoom>
        <Footer center={center}></Footer>
      </Box>
    </ThemeProvider>
  );
}

export default App;
