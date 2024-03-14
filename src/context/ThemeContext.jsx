import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

const defaultTheme = "light";
export const ThemeContext = createContext({
  theme: localStorage.getItem("theme") || defaultTheme,
  setTheme: () => {},
});
export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(localStorage.getItem('theme')||defaultTheme);

  const onClickToggleHandler = () => {
    setTheme((prevState) => (prevState == "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, onClickToggleHandler }}>
      {children}
    </ThemeContext.Provider>
  );
}
ThemeProvider.propTypes = {
  children: PropTypes.element,
};
