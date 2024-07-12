import React from "react";
import styled, {
  ThemeProvider as StyledThemeProvider,
} from "styled-components";
import Header from "./components/Header";
import Home from "./components/Home";
import Biography from "./components/Biography";
import Gallery from "./components/Gallery";
import Exhibitions from "./components/Exhibitions";
import Upamietnienie from "./components/upamietnienie/Upamietnienie";
import Footer from "./components/Footer";
import { useTheme, ThemeProvider } from "./ThemeContext";
import GlobalStyle from "./GlobalStyle";
import ScrollToTopButton from "./components/ScrollToTopButton";

const lightTheme = {
  background: "#ffffff",
  color: "#000000",
};

const darkTheme = {
  background: "#000000",
  color: "#ffffff",
};

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
`;

const AppContent = () => {
  const { theme } = useTheme();

  return (
    <StyledThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <ScrollToTopButton />
      <AppContainer>
        <Header />
        <Home />
        <Biography />
        <Gallery />
        <Exhibitions />
        <Upamietnienie />
        <Footer />
      </AppContainer>
    </StyledThemeProvider>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;

// https://www.kazimierzdolny.pl/news/ograniczenia_sa_zle_dla_artysty__ostatni_wywiad_z_waldemarem_wojczakowskim/100198.html

// https://www.szukajwarchiwach.gov.pl/en/web/guest/seria?p_p_id=Seria&p_p_lifecycle=0&p_p_state=normal&p_p_mode=view&refererPlid=2144199&_Seria_delta=60&_Seria_nameofjsp=jednostki&_Seria_resetCur=false&_Seria_id_serii=302580&_Seria_cur=45

// https://www.sda.pl/files/auctions_files/347/katalog.pdf
