import React from "react";
import PropTypes from "prop-types";
import ReactPlayer from "react-player";
import { Modal } from "reactstrap";

function ModalVideo({ url, openModalVideo, handleModalVideo }) {
  console.log(url);
  return (
    <Modal
      isOpen={openModalVideo}
      toggle={handleModalVideo}
      backdrop={true}
      centered={true}
      style={{ position: "relative" }}
    >
      <div className="react-player">
        <ReactPlayer url={url} controls={true} />
      </div>
    </Modal>
  );
}

ModalVideo.propTypes = {
  url: PropTypes.string.isRequired,
  openModalVideo: PropTypes.bool.isRequired,
  handleModalVideo: PropTypes.func.isRequired,
};

export default ModalVideo;
