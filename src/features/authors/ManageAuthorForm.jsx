import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { newAuthor } from "../../../tools/mockData";
import AuthorForm from "./AuthorForm.jsx";
import Spinner from "../../components/Spinner.jsx";

export const ManageAuthorForm = ({ author, authors, ...props }) => {
  console.log(...props);
  return authors.length === 0 ? <Spinner /> : <AuthorForm author={author} />;
};

ManageAuthorForm.propTypes = {
  author: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
};

function getAuthorById(authors, id) {
  console.log(authors.find((author) => author.id === id));
  return authors.find((author) => author.id === id) || null;
}

function mapStateToProps(state, ownProps) {
  const id = ownProps.match.params.id;
  const author =
    id && state.authors.length > 0
      ? getAuthorById(state.authors, id)
      : newAuthor;
  return {
    author,
    authors: state.authors,
  };
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ManageAuthorForm);
