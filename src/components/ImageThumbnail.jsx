import React from "react";
import PropTypes from "prop-types";

function ImageThumbnail({ thumbnail, name }) {
  return (
    <img
      src={thumbnail}
      alt={name}
      style={{ flexShrink: 0, marginBottom: 3, borderRadius: "50%" }}
    />
  );
}

ImageThumbnail.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default ImageThumbnail;
