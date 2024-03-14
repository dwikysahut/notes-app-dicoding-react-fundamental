import React, { Children } from "react";
import PropTypes from "prop-types";

export default function InputForm({
  form,
  error,
  onChangeForm,
  name,
  placeholder,
  type,
  children,
}) {
  return (
    <div className="w-100 relative">
      <input
        className="w-100 border-b-2 px-3 py-2 outline-none focus:border-b-2
        focus:border-red-900"
        type={type}
        name={name}
        defaultValue={form[name]}
        placeholder={placeholder}
        onChange={onChangeForm}
      />
      {error[name] && (
        <p className="text-white w-100 mt-2 rounded-md px-2 py-1 text-[0.6rem] bg-red-600">
          {error[name]}
        </p>
      )}
      {children}
    </div>
  );
}
InputForm.propTypes = {
  form: PropTypes.object.isRequired,
  error: PropTypes.object,
  children: PropTypes.element,
  type: PropTypes.string,
  onChangeForm: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
