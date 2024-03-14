import React from "react";
import PropTypes from "prop-types";

export default function InputRichText({ form, onChangeForm, name, placeholder }) {
  return (
    <div className="w-100">
      <div
        className="add-note__input w-100"
        contentEditable
        defaultValue={form[name]}
        data-placeholder={placeholder}
        onInput={onChangeForm}
      />
    </div>
  );
}
InputRichText.propTypes = {
  form: PropTypes.object.isRequired,
  onChangeForm: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
