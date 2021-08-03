import React from "react";
import PropTypes from "prop-types";
import ReactPlayer from "react-player";
import { Modal, ModalBody } from "reactstrap";

function ModalVideo({ url, openModalVideo, handleOpenModalVideo }) {
  console.log(url);
  return <ReactPlayer url={url} controls={true} />;
}

ModalVideo.propTypes = {
  url: PropTypes.string.isRequired,
  openModalVideo: PropTypes.bool.isRequired,
  handleOpenModalVideo: PropTypes.func.isRequired,
};

export default ModalVideo;
