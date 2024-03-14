import React, { useContext } from "react";
import { Button } from "reactstrap";
import PropTypes from "prop-types";
import { ThemeContext } from "../../context/ThemeContext";

export default function ButtonAdd({ onSubmit }) {
  const { theme } = useContext(ThemeContext);
  return (
    <Button
      className={`rounded-circle fixed bottom-5 right-5 ${
        theme == "light" ? "bg-black text-white" : "bg-white text-black"
      }`}
      style={{ width: "44px", height: "44px" }}
      onClick={onSubmit}
    >
      +
    </Button>
  );
}

ButtonAdd.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
