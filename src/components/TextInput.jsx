import React from "react";
import PropTypes from "prop-types";
import FieldErrorMessage from "./FieldErrorMessage.jsx";

const TextInput = ({ name, label, onChange, placeholder, value, error }) => {
  let wrapperClass = "form-group my-3";
  if (error && error.length > 0) {
    wrapperClass += " " + "has-error";
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <input
          type="text"
          name={name}
          className="form-control mb-2"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {error && <FieldErrorMessage error={error} />}
      </div>
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
};

export default TextInput;
