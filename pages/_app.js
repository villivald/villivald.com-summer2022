import { AppWrapper } from "../context/state";

// reset
import "../styles/globals.css";

// components
import "../styles/app.css";
import "../styles/blog.css";
import "../styles/footer.css";
import "../styles/header.css";
import "../styles/menu.css";
import "../styles/projects.css";
import "../styles/skillbox.css";
import "../styles/timeline.css";

// pages
import "../styles/pages/about.css";
import "../styles/pages/books.css";
import "../styles/pages/projects.css";
import "../styles/pages/studies.css";
import "../styles/pages/uses.css";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect, useState } from "react";

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function getActiveTheme(themeMode) {
  return themeMode === "light" ? lightTheme : darkTheme;
}

function MyApp({ Component, pageProps }) {
  const [activeTheme, setActiveTheme] = useState(lightTheme);
  const [selectedTheme, setSelectedTheme] = useState("light");

  const toggleTheme = () => {
    const desiredTheme = selectedTheme === "light" ? "dark" : "light";
    setSelectedTheme(desiredTheme);
  };

  useEffect(() => {
    setActiveTheme(getActiveTheme(selectedTheme));
  }, [selectedTheme]);
  return (
    <ThemeProvider theme={activeTheme}>
      <AppWrapper>
        <Component
          {...pageProps}
          toggleTheme={toggleTheme}
          selectedTheme={selectedTheme}
          lightTheme={lightTheme}
        />
      </AppWrapper>
    </ThemeProvider>
  );
}

export default MyApp;
