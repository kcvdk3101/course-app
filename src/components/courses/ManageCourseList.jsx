import React, { useState } from "react";
import PropTypes from "prop-types";
import CourseList from "./CourseList.jsx";

function ManageCourseList({ courses, onDelete }) {
  const [openModalVideo, setOpenModalVideo] = useState(false);

  const handleOpenModalVideo = () => {
    setOpenModalVideo(!openModalVideo);
  };

  return (
    <CourseList
      courses={courses}
      onDelete={onDelete}
      openModalVideo={openModalVideo}
      handleOpenModalVideo={handleOpenModalVideo}
    />
  );
}

ManageCourseList.propTypes = {
  courses: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ManageCourseList;
