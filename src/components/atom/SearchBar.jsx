import React, { useContext } from "react";
import { Input } from "reactstrap";
import PropTypes from "prop-types";
import { LanguageContext } from "../../context/LanguageContext";

export default function SearchBar({ value, onFilterChange, title }) {
  const { language } = useContext(LanguageContext);
  return (
    <div className="d-flex flex-column gap-1 mt-2 flex-[1]">
      <p className="list-title fs-3 m-0">{title}</p>
      <Input
        id="search"
        name="search"
        placeholder={language == "id" ? "Ketikkan disini" : "Type Here"}
        type="text"
        value={value}
        onChange={onFilterChange}
      />
    </div>
  );
}
SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
