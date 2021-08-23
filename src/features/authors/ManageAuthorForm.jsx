import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { newAuthor } from "../../../tools/mockData";
import AuthorForm from "./AuthorForm.jsx";
import Spinner from "../../components/Spinner.jsx";
import { authorsActions } from "../../redux/actions/authorsActions";
import { toast } from "react-toastify";

export const ManageAuthorForm = ({ getAuthors, authors, ...props }) => {
  const [author, setAuthor] = useState({ ...props.author });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (authors.length === 0) {
      getAuthors();
    } else {
      setAuthor({ ...props.author });
    }
  }, []);

  const handleChange = (event) => {
    console.log(event.target.value);
    const { name, value } = event.target;
    // setAuthor((prevAuthor) => ({
    //   ...prevAuthor,
    //   [name]: name === "authorId" ? parseInt(value, 10) : value,
    // }));
  };

  const handleSaveCourse = async (event) => {
    event.preventDefault();
    //setSaving(true);
    toast.success("Save author successfully !");
  };

  return authors.length === 0 ? (
    <Spinner />
  ) : (
    <AuthorForm
      author={author}
      onSave={handleSaveCourse}
      saving={saving}
      onChange={handleChange}
    />
  );
};

ManageAuthorForm.propTypes = {
  author: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  getAuthors: PropTypes.func.isRequired,
};

function getAuthorById(authors, id) {
  console.log(authors.find((author) => author.id === id));
  return authors.find((author) => author.id === id);
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

const mapDispatchToProps = {
  getAuthors: authorsActions.getAuthors,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageAuthorForm);
