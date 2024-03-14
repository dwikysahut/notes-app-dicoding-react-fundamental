import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

const defaultLanguage = "id";
export const LanguageContext = createContext({
  theme: localStorage.getItem("language") || defaultLanguage,
  setTheme: () => {},
});
export default function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || defaultLanguage
  );

  const onClickToggleLanguageHandler = () => {
    setLanguage((prevState) => (prevState == "id" ? "en" : "id"));
  };

  return (
    <LanguageContext.Provider
      value={{ language, onClickToggleLanguageHandler }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
LanguageProvider.propTypes = {
  children: PropTypes.element,
};
