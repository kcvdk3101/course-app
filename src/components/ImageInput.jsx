import React from "react";
import PropTypes from "prop-types";
import FieldErrorMessage from "./FieldErrorMessage";

const ImageInput = ({ thumbnailSrc, label, error }) => {
  let wrapperClass = "form-group my-3";
  if (error && error.length > 0) {
    wrapperClass += " " + "has-error";
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <button>Choose File</button>
      <div className="field">
        {error && <FieldErrorMessage error={error} />}
      </div>
    </div>
  );
};

ImageInput.propTypes = {
  thumbnailSrc: PropTypes.string.isRequired,
};

export default ImageInput;
