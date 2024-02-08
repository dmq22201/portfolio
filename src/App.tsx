import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import GlobalStyle from "./styles/GlobalStyle";
import AppLayout from "./components/AppLayout/AppLayout";
import Project from "./pages/Project/Project";
import Contact from "./pages/Contact/Contact";

const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Navigate to="projects" />} />
          <Route path="projects" element={<Project />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
