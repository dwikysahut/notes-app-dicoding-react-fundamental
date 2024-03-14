import React, { useContext } from "react";
import PropTypes from "prop-types";
import { BiLogOut, BiMoon, BiSolidSun } from "react-icons/bi";
import { ThemeContext } from "../../context/ThemeContext";
import { FaLanguage } from "react-icons/fa";
import { LanguageContext } from "../../context/LanguageContext";

export default function Header({ onClickArchive, onClickHome, onCLickLogout }) {
  const { theme, onClickToggleHandler } = useContext(ThemeContext);
  const { language, onClickToggleLanguageHandler } =
    useContext(LanguageContext);
  return (
    <header className="d-flex justi w-100 justify-content-between align-items-center  ">
      <div>
        <h1
          className="list-title"
          style={{ cursor: "pointer" }}
          onClick={onClickHome}
        >
          {language == "id" ? "Aplikasi Catatan" : "Notes App"}
        </h1>
      </div>
      <div className="flex justify-between gap-4">
        <div
          className="flex justify-center items-center cursor-pointer"
          onClick={onClickToggleLanguageHandler}
        >
          <FaLanguage size={20} color={theme == "light" ? "black" : "white"} />
        </div>
        <div
          className="flex justify-center items-center cursor-pointer"
          onClick={onClickToggleHandler}
        >
          {theme == "light" ? (
            <BiMoon size={20} color="black" />
          ) : (
            <BiSolidSun size={20} color="white" />
          )}
        </div>
        <p
          className="arsip__title"
          style={{ cursor: "pointer" }}
          onClick={onClickArchive}
        >
          {language == "id" ? "Arsip" : "Archive"}
        </p>
        <div
          className="flex justify-center items-center cursor-pointer"
          onClick={onCLickLogout}
        >
          <BiLogOut size={20} color={theme == "light" ? "black" : "white"} />
        </div>
      </div>
    </header>
  );
}
Header.propTypes = {
  onClickArchive: PropTypes.func.isRequired,
  onClickHome: PropTypes.func.isRequired,
  onCLickLogout: PropTypes.func.isRequired,
};
