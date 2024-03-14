import React from "react";
import PropTypes from "prop-types";

export default function Input({ form, onChangeForm, name, placeholder }) {
  return (
    <div className="w-100">
      <input
        className="add-note__input w-100"
        type="text"
        name={name}
        defaultValue={form[name]}
        placeholder={placeholder}
        onChange={onChangeForm}
      />
    </div>
  );
}
Input.propTypes = {
  form: PropTypes.object.isRequired,
  onChangeForm: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
