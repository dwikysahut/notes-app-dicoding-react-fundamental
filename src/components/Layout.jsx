import React, { useCallback, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./atom/Header";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

import { Outlet } from "react-router-dom";
import { getUserLogged } from "../utils/network-data";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
export default function Layout() {
  const navigate = useNavigate();
  const location = useLocation();
  const checkMe = useCallback(async () => {
    const result = await getUserLogged();
    if (result.error) {
      navigate("/auth");
    }
  }, []);
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  useEffect(() => {
    checkMe();
  }, [checkMe, location]);

  const goToArchiveHandler = () => {
    navigate("/archive");
  };
  const logoutHandler = () => {
    localStorage.clear();
    navigate("/archive");
  };

  const goToHomeHandler = () => {
    navigate("/");
  };
  return (
    <div className="d-flex flex-column">
      <Header
        onClickHome={goToHomeHandler}
        onClickArchive={goToArchiveHandler}
        onCLickLogout={logoutHandler}
      />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
Layout.propTypes = {
  children: PropTypes.element,
};
