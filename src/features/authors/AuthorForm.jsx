import React from "react";
import PropTypes from "prop-types";
import TextInput from "../../components/TextInput.jsx";
//import SelectInput from "../../components/SelectInput.jsx";
import ImageThumbnail from "../../components/ImageThumbnail.jsx";

function AuthorForm({ author }) {
  console.log(author);
  return (
    <form onSubmit>
      <h2>{author.id ? "Edit" : "Add"} Author</h2>
      <TextInput
        name="authorName"
        label="Author Name"
        value={author.name}
        placeholder="Please enter your name"
        // onChange={onChange}
        // error={errors.title}
      />
      <TextInput
        name="desc"
        label="Short Description"
        value={author.description}
        // onChange={onChange}
        // error={errors.title}
      />
      <ImageThumbnail />
      {/* <SelectInput
        name="authorId"
        label="Author"
        value={course.authorId || ""}
        defaultOption="Select Author"
        options={authors.map((author) => ({
          value: author.id,
          text: author.name,
        }))}
        onChange={onChange}
        error={errors.author}
      /> */}
      {/* <TextInput
        name="category"
        label="Category"
        value={course.category}
        onChange={onChange}
        error={errors.category}
      /> */}
      <button type="submit" className="btn btn-primary">
        Save
      </button>
    </form>
  );
}

AuthorForm.propTypes = {
  author: PropTypes.object.isRequired,
};

export default AuthorForm;
