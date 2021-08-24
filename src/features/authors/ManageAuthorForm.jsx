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
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (authors.length === 0) {
      getAuthors();
    } else {
      setAuthor({ ...props.author });
    }
  }, []);

  function formIsValid() {
    const { id, name, description } = author;
    const error = {};
    if (!name) error.title = "Name is required!";
    if (!description) error.author = "Give a bio!";

    setErrors(error);
    //Form is valid if the error object still has no properties
    return Object.keys(errors).length === 0;
  }

  const handleChange = (event) => {
    console.log(event.target.value);
    const { name, value } = event.target;
    setAuthor((prevAuthor) => ({
      ...prevAuthor,
      [name]: name === "id" ? parseInt(value, 10) : value,
    }));
  };

  const handleSaveCourse = async (event) => {
    event.preventDefault();
    //setSaving(true);
    toast.success("Save author successfully !");
  };

  console.log(author);

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
