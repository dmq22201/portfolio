import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Outlet } from "react-router-dom";

import { fadeIn } from "../../styles/Animation";
import useDetectMobileDevice from "../../hooks/useDetectDevice";

import Sidebar from "../Sidebar/Sidebar";
import Container from "../Container/Container";
import Navbar from "../Navbar/Navbar";
import About from "../About/About";
import Button from "../Button/Button";
import GlobalStyle, { darkTheme, lightTheme } from "../../styles/GlobalStyle";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 28rem 1fr;
  grid-gap: 0 4rem;
  animation: ${fadeIn};
  animation-duration: 0.5s;

  @media screen and (max-width: 61.99875em) {
    grid-template-columns: 1fr;
  }
`;

const Main = styled.main`
  padding: 4rem 0;
  height: 100vh;
  overflow: auto;
  animation: ${fadeIn};
  animation-duration: 0.5s;

  @media screen and (max-width: 61.99875em) {
    height: auto;
    overflow: auto;
  }
`;

const ButtonTheme = styled(Button)`
  position: fixed;
  top: 5%;
  right: 2%;

  @media screen and (max-width: 47.99875em) {
    right: 0%;
    width: 10rem;
    height: 10rem;
  }
`;

const AppLayout: React.FunctionComponent = () => {
  const { isMobile, isTablet } = useDetectMobileDevice();

  const [theme, setTheme] = useState<string>("light");
  const isDarkTheme = theme === "dark";

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme && ["dark", "light"].includes(savedTheme)) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme("dark");
    }
  }, []);

  const toggleTheme = () => setTheme(isDarkTheme ? "light" : "dark");

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <StyledAppLayout>
        {isMobile || isTablet ? (
          <>
            <Navbar />
            <About />
          </>
        ) : (
          <Sidebar />
        )}

        <Main>
          <Container>
            <Outlet />
          </Container>
        </Main>

        <ButtonTheme onClick={toggleTheme}>
          {isDarkTheme ? (
            <img src="./light-mode.png" />
          ) : (
            <img src="./dark-mode.png" />
          )}
        </ButtonTheme>
      </StyledAppLayout>
    </ThemeProvider>
  );
};

export default AppLayout;
