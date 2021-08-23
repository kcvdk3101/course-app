import React from "react";
import PropTypes from "prop-types";
import TextInput from "../../components/TextInput.jsx";

function AuthorForm({ author, onChange, onSave, saving, errors = {} }) {
  return (
    <form onSubmit={onSave}>
      <h2>{author.id ? "Edit" : "Add"} Author</h2>
      <TextInput
        name="name"
        label="Author Name"
        value={author.name}
        onChange={onChange}
        error={errors.name}
      />

      <TextInput
        name="description"
        label="Short Description"
        value={author.description}
        onChange={onChange}
        error={errors.description}
      />

      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Saving..." : "Save"}
      </button>
    </form>
  );
}

AuthorForm.propTypes = {
  author: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  saving: PropTypes.bool,
};

export default AuthorForm;
