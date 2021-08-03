import React from "react";
import PropTypes from "prop-types";
import ReactPlayer from "react-player";
import { Container, Modal, ModalBody } from "reactstrap";

function ModalVideo({ url, openModalVideo, handleOpenModalVideo }) {
  console.log(url);
  return (
    <Container>
      <ReactPlayer url={url} controls={true} />
    </Container>
  );
}

ModalVideo.propTypes = {
  url: PropTypes.string.isRequired,
  openModalVideo: PropTypes.bool.isRequired,
  handleOpenModalVideo: PropTypes.func.isRequired,
};

export default ModalVideo;
