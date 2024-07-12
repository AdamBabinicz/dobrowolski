import React, { createContext, useState, useContext } from "react";
import {
  createGlobalStyle,
  ThemeProvider as StyledThemeProvider,
} from "styled-components";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
`;

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider
        theme={{
          mode: theme,
          sectionBackground: theme === "dark" ? "#222" : "#f0f0f0",
          sectionTextColor: theme === "dark" ? "#fff" : "#333",
          tooltipBackground: theme === "dark" ? "#222" : "#f0f0f0",
          buttonHoverBackground: "#0056b3",
          buttonHoverText: "#fff",
        }}
      >
        <GlobalStyle />
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
