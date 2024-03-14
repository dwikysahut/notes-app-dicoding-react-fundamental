import React, { lazy, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListCatatan from "./ListCatatan";
import NotFound from "./NotFound";
import Layout from "../components/Layout";
import DetailCatatan from "./DetailCatatan";
import TambahCatatan from "./TambahCatatan";
import ArchiveCatatan from "./ArchiveCatatan";
import Auth from "./Auth/Auth";
import LoadingProvider from "../context/LoadingContext";
import LanguageProvider from "../context/LanguageContext";
import ThemeProvider from "../context/ThemeContext";

function App() {
  return (
    <Router>
      <ThemeProvider>
        <LanguageProvider>
          <LoadingProvider>
            <Routes>
              <Route Component={Auth} path="/auth" />
              <Route Component={Layout} path="/">
                <Route Component={ListCatatan} path="/" />
                <Route Component={DetailCatatan} path="/notes/:id" />
                <Route Component={TambahCatatan} path="/notes/new" />
                <Route Component={ArchiveCatatan} path="/archive" />
                <Route Component={NotFound} path="*" />
              </Route>
            </Routes>
          </LoadingProvider>
        </LanguageProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
