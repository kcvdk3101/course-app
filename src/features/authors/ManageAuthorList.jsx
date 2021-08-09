import React from "react";
import PropTypes from "prop-types";
import AuthorList from "./AuthorList.jsx";

function ManageAuthorList({ authors }) {
  return <AuthorList authors={authors} />;
}

ManageAuthorList.propTypes = {
  authors: PropTypes.array.isRequired,
};

export default ManageAuthorList;
